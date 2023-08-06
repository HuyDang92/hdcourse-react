import IonIcon from '@reacticons/ionicons';
import { useEffect, useState } from 'react';
import logo from '../../../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';
import CircularWithValueLabel from '../CircularProgress';
import { IconButton } from '@material-tailwind/react';
import RatingCourse from '../RatingCourse';
import { toast } from 'react-toastify';
interface IChildProps {
  data: any;
  ratingCheck?: boolean;
}
const HeaderLecture: React.FC<IChildProps> = ({ data, ratingCheck }) => {
  const [userRated, setUserRated] = useState<boolean>(false);
  useEffect(() => {
    if (userRated) {
      toast.success('Đánh giá thành công', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [userRated]);
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="flex items-center justify-between bg-darkLight px-5 py-3 text-white shadow-border-full">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2 pe-3">
            <IonIcon name="chevron-back-outline" className="text-3xl text-white" />
            <img src={logo} alt="" className="w-6" />
          </Link>
          <p className="border-l-2 ps-6 text-xl font-bold">{data && data.title}</p>
        </div>
        <div className="flex items-center space-x-5">
          {!ratingCheck && !userRated && (
            <RatingCourse setUserRated={setUserRated}>
              <div className="flex cursor-pointer items-center space-x-2 hover:text-org">
                <IonIcon name="star" className="text-xl text-white" />{' '}
                <span>Đánh giá khóa học</span>
              </div>
            </RatingCourse>
          )}
          <div className="flex items-center space-x-2">
            {data && (
              <CircularWithValueLabel
                data={{ totalLecture: data?.totalLecture, learned: data?.totalLearned }}
              />
            )}
            <div className="font-semibold">
              {data.totalLearned} / {data?.totalLecture} bài học
            </div>
            <IconButton className="flex items-center space-x-2 rounded-full bg-white p-2 px-4 text-darkLight">
              <IonIcon name="arrow-redo" className="text-xl" />
            </IconButton>
            <IconButton className="flex items-center space-x-2 rounded-full bg-white p-2 px-4 text-darkLight">
              <IonIcon name="ellipsis-vertical" className="text-xl " />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLecture;
