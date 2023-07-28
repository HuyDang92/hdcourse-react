import { Rating } from '@material-tailwind/react';
import IonIcon from '@reacticons/ionicons';
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
  return (
    <div className="space-y-4 border-b-[1px] py-4">
      <div className="flex space-x-6">
        <img src={data.avatar} alt="" className="h-1w-14 w-14 rounded-full" />
        <p className="flex flex-col">
          <span className="text-lg font-bold">{data.name}</span>
          <span className="flex space-x-3 text-sm font-medium">
            <Rating unratedColor="orange" ratedColor="orange" value={4} readonly />
            <i>2 ngày trước</i>
          </span>
        </p>
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
