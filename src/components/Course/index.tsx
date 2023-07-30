import { CardHeader, CardBody, Rating, IconButton } from '@material-tailwind/react';
import { ICourse } from 'types/Home';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCourse } from 'features/Course/Course.slice';
import AddWhistList from 'components/AddWishList';

interface IChildProps {
  data: ICourse;
}
const CourseComponents: React.FC<IChildProps> = ({ data }) => {
  const slug = data.title?.replace(/\s/g, '-');
  const dispatch = useDispatch();

  return (
    <div className="my-5 h-fit w-80 rounded-2xl shadow-border-full">
      <CardHeader
        color="blue-gray"
        className="group relative h-44 overflow-hidden transition-all hover:scale-[105%]"
      >
        <Link onClick={() => dispatch(getCourse(data.id))} to={`/course/${slug}`}>
          <span className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-0 transition-all group-hover:opacity-50"></span>
        </Link>
        <img src={data.thumb} alt="img-blur-shadow" className="h-full w-full rounded-xl" />
        <div className="hover-target absolute left-[50%] top-[50%] z-30 flex -translate-x-[50%] -translate-y-[50%] space-x-3">
          <div className="scale-0 rounded-full bg-white shadow-border-full transition-all  group-hover:scale-100">
            <IconButton variant="outlined" size="lg" color="orange" className="rounded-full">
              <IonIcon name="cart" className={`pt-2 text-xl`} />
            </IconButton>
          </div>
          <div className="scale-0 rounded-full bg-white shadow-border-full transition-all  group-hover:scale-100">
            <AddWhistList data={{ idCourse: data.id }} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="-mt-2 space-y-2 overflow-hidden">
        <div className="min-h-[25px] cursor-pointer text-lg font-semibold line-clamp-2">
          <Link to={`/course/${slug}`}>{data.title}</Link>
        </div>
        <div className="text-sm font-medium text-gray-400">{data.author}</div>
        <div className="text-md flex items-center space-x-2 font-medium">
          <span className="font-semibold text-gray-600">{data.rating}</span>
          <Rating unratedColor="amber" ratedColor="amber" value={4} readonly />
          <span className=" font-normal text-gray-600">({data.ratingCount})</span>
        </div>
        {data.free ? (
          <span className=" text-center text-xl font-bold text-darkLight">Miễn phí</span>
        ) : (
          <div className="flex items-center space-x-5 font-medium">
            <span className="text-xl font-bold text-darkLight">
              {new Intl.NumberFormat('vi-VN').format(data.price)}đ
            </span>
            <span className="text-sm font-medium text-gray-400 line-through">
              {new Intl.NumberFormat('vi-VN').format(data.price * 1.5)}đ
            </span>
          </div>
        )}
      </CardBody>
    </div>
  );
};
export default CourseComponents;
