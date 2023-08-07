import { Rating } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useAddReplyCommentLectureMutation } from 'features/Course/lecture.service';
import { useParams } from 'react-router-dom';

interface IChildProps {
  data: any;
  comment?: boolean;
  user?: any;
}
const ReviewCourse: React.FC<IChildProps> = ({ data, comment, user }) => {
  const { idLeature } = useParams();

  const [like, setLike] = useState<boolean>(false);
  const [unlike, setUnlike] = useState<boolean>(false);
  const [reply, setReply] = useState<boolean>(false);
  const [openReply, setOpenReply] = useState<boolean>(false);
  const [commentReply, setCommentReply] = useState<string>('');

  const [addCommentRepky, loading] = useAddReplyCommentLectureMutation();

  const handleLike = () => {
    setLike(!like);
    setUnlike(false);
  };
  const handleUnlike = () => {
    setLike(false);
    setUnlike(!unlike);
  };

  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = Math.floor(Date.now() / 1000); // Lấy timestamp hiện tại (số giây tính từ 1970)
      const createdAtTimestamp = data?.createdAt?._seconds;
      const timeDiff = now - createdAtTimestamp;
      console.log(data);

      if (timeDiff < 60) {
        setTimeAgo(`vài giây trước`);
      } else if (timeDiff < 3600) {
        setTimeAgo(`${Math.floor(timeDiff / 60)} phút trước`);
      } else if (timeDiff < 86400) {
        setTimeAgo(`${Math.floor(timeDiff / 3600)} giờ trước`);
      } else if (timeDiff < 2592000) {
        setTimeAgo(`${Math.floor(timeDiff / 86400)} ngày trước`);
      } else if (timeDiff < 31536000) {
        setTimeAgo(`${Math.floor(timeDiff / 2592000)} tháng trước`);
      } else {
        setTimeAgo(`${Math.floor(timeDiff / 31536000)} năm trước`);
      }
    };

    calculateTimeAgo();

    // Update lại thông báo thời gian mỗi giây
    const interval = setInterval(calculateTimeAgo, 1000);

    return () => clearInterval(interval); // Clear interval khi component unmount
  }, [data?.createdAt?._seconds]);

  const handleReply = async (e: any) => {
    e.preventDefault();
    const dataReply = {
      idUserOld: data?.idUser,
      idUser: user?.uid,
      idLecture: idLeature,
      avatar: user?.photoURL,
      name: user?.displayName,
      comment: commentReply,
    };
    await addCommentRepky(dataReply);
    setCommentReply('');
  };
  return (
    data && (
      <div className="space-y-4 border-b-[1px] py-4">
        <div className="flex space-x-6">
          <img src={data.avatar} alt="" className="h-14 w-14 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-lg font-bold">{data.name}</span>
            <span className="flex space-x-3 text-sm font-medium">
              {!comment && (
                <Rating unratedColor="orange" ratedColor="orange" value={data.rating} readonly />
              )}
              <i>{timeAgo}</i>
            </span>
          </div>
        </div>

        <div className="">{comment ? data.comment : data.content}</div>
        <div className="flex space-x-3">
          <span onClick={handleLike}>{!like ? <ThumbUpOffAltIcon /> : <ThumbUpAltIcon />}</span>
          <span onClick={handleUnlike}>
            {!unlike ? <ThumbDownOffAltIcon /> : <ThumbDownAltIcon />}
          </span>
          {comment && (
            <button
              onClick={() => setOpenReply(!openReply)}
              className="rounded-2xl px-3 py-[2px] transition-all hover:bg-gray-200"
            >
              Trả lời
            </button>
          )}
        </div>
        {openReply && (
          <form onSubmit={handleReply} className="ms-16 flex items-center space-x-4">
            <img src={user?.photoURL} className="h-14 w-14 rounded-full object-cover" alt="" />
            <input
              value={commentReply}
              onChange={(e) => setCommentReply(e.target.value)}
              placeholder="Nhập câu trả lời?"
              className="w-full border-b-2 p-2 outline-none"
            />
          </form>
        )}
        {comment && data?.reply.length >= 1 && (
          <div onClick={() => setReply(!reply)} className="text-medium cursor-pointer text-org">
            Xem {data?.reply.length} câu trả lời
          </div>
        )}

        {comment &&
          reply &&
          data?.reply.map((rep: any) => (
            <div className="ms-16 space-y-4 border-t-[1px] py-4">
              <div className="flex space-x-6">
                <img src={rep.avatar} alt="" className="h-14 w-14 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{rep.name}</span>
                </div>
              </div>

              <div className="">{rep.comment}</div>
              <div className="flex space-x-3">
                <span onClick={handleLike}>
                  {!like ? <ThumbUpOffAltIcon /> : <ThumbUpAltIcon />}
                </span>
                <span onClick={handleUnlike}>
                  {!unlike ? <ThumbDownOffAltIcon /> : <ThumbDownAltIcon />}
                </span>
              </div>
            </div>
          ))}
      </div>
    )
  );
};
export default ReviewCourse;
