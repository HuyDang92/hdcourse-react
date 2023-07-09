import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Rating,
  Typography,
} from '@material-tailwind/react';
import Button from 'components/Button';
import { Course } from 'types/Home';

interface IChildProps {
  data: Course;
}
const CourseComponents: React.FC<IChildProps> = ({ data }) => {
  console.log(data);

  return (
    // {data?.map((item) => )}
    <div className="mt-6 w-80 shadow-border-full rounded-2xl p-4">
      <CardHeader
        color="blue-gray"
        className="relative -top-10 h-44 overflow-hidden transition-all hover:scale-[105%]"
      >
        <span className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-0 transition-all hover:opacity-50"></span>
        <img
          src={data.thumb}
          alt="img-blur-shadow"
          className="rounded-xl w-full h-full"
        />
      </CardHeader>
      <CardBody className="-mt-5 space-y-2 overflow-hidden">
        <div className="min-h-[25px] text-lg font-semibold line-clamp-2">{data.title}</div>
        <div className="text-sm font-medium text-gray-400">{data.author}</div>
        <div className="text-md flex items-center space-x-2 font-medium">
          <span className="font-semibold text-gray-600">{data.rating}</span>
          <Rating className="text-org" value={4} readonly />
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
