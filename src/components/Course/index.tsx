import { CardHeader, CardBody, Rating } from '@material-tailwind/react';
import { Course } from 'types/Home';
import IonIcon from '@reacticons/ionicons';

interface IChildProps {
  data: Course;
}
const CourseComponents: React.FC<IChildProps> = ({ data }) => {
  return (
    <div className="my-5 h-fit w-80 rounded-2xl shadow-border-full">
      <CardHeader
        color="blue-gray"
        className="group relative h-44 overflow-hidden transition-all hover:scale-[105%]"
      >
        <span className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-0 transition-all group-hover:opacity-50"></span>
        <img src={data.thumb} alt="img-blur-shadow" className="h-full w-full rounded-xl" />
        <div className="hover-target absolute left-[50%] top-[50%] z-30 flex -translate-x-[50%] -translate-y-[50%] space-x-3">
          <button className="scale-0 rounded-full bg-white px-3 pt-3 pb-1 text-xl text-org  shadow-border-full transition-all hover:bg-org hover:text-white group-hover:scale-100">
            <IonIcon name="cart-outline" className="" />
          </button>
          <button className="scale-0 rounded-full bg-white px-3 pt-3 pb-1  text-xl text-org shadow-border-full transition-all hover:bg-org hover:text-white group-hover:scale-100">
            <IonIcon name="heart-outline" />
          </button>
        </div>
      </CardHeader>
      <CardBody className="-mt-2 space-y-2 overflow-hidden">
        <div className="min-h-[25px] text-lg font-semibold line-clamp-2">{data.title}</div>
        <div className="text-sm font-medium text-gray-400">{data.author}</div>
        <div className="text-md flex items-center space-x-2 font-medium">
          <span className="font-semibold text-gray-600">{data.rating}</span>
          <Rating unratedColor="amber" ratedColor="amber" value={4} readonly />
          <span className=" font-normal text-gray-600">({data.ratingCount})</span>
        </div>
        <div className="flex items-center space-x-5 font-medium">
          <span className="text-xl font-bold text-darkLight">{data.price}đ</span>
          <span className="text-sm font-medium text-gray-400 line-through">199.000đ</span>
        </div>
      </CardBody>
    </div>
  );
};
export default CourseComponents;
