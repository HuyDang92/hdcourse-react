import { Rating } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

interface IChildProps {
  data: any;
}
const ReviewCourse: React.FC<IChildProps> = ({ data }) => {
  const [like, setLike] = useState<boolean>(false);
  const [unlike, setUnlike] = useState<boolean>(false);
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

      if (timeDiff < 60) {
        setTimeAgo(`${timeDiff} giây trước`);
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
  return (
    <div className="space-y-4 border-b-[1px] py-4">
      <div className="flex space-x-6">
        <img src={data.avatar} alt="" className="h-14 w-14 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="text-lg font-bold">{data.name}</span>
          <span className="flex space-x-3 text-sm font-medium">
            <Rating unratedColor="orange" ratedColor="orange" value={data.rating} readonly />
            <i>{timeAgo}</i>
          </span>
        </div>
      </div>
      <div className="">{data.content}</div>
      <div className="flex space-x-3">
        <span onClick={handleLike}>{!like ? <ThumbUpOffAltIcon /> : <ThumbUpAltIcon />}</span>
        <span onClick={handleUnlike}>
          {!unlike ? <ThumbDownOffAltIcon /> : <ThumbDownAltIcon />}
        </span>
      </div>
    </div>
  );
};
export default ReviewCourse;
