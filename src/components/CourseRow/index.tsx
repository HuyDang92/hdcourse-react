import { CardHeader, CardBody, Rating } from '@material-tailwind/react';
import { ICourse } from 'types/Home';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCourse } from 'features/Course/Course.slice';
interface IChildProps {
  data: ICourse;
}
const CourseRow: React.FC<IChildProps> = ({ data }) => {
  const slug = data.title.replace(/\s/g, '-');
  const dispatch = useDispatch();

  return (
    data && (
      <div className="flex items-center justify-between border-b-[1px] pb-4">
        <div className="flex items-center space-x-3">
          <div className="">
            <img src={data.thumb} alt="" className="h-20 w-28 rounded-xl" />
          </div>
          <div className="space-y-1 font-medium">
            <span className="text-xl font-bold line-clamp-2">{data.title}</span>
            <ul className="flex items-center space-x-7">
              <li className="font-semibold">Tổng {data.totalTimeVideo} giờ</li>
              <li className=" list-disc">
                Cập nhật{' '}
                {new Date(
                  (data.updatedAt as any)._seconds * 1000 +
                    (data.updatedAt as any)._nanoseconds / 1000000
                ).toLocaleDateString()}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-1 font-bold text-org">
          <span>{data.rating}</span> <IonIcon name="star" />
        </div>
        <div className="flex items-center space-x-1 font-bold ">
          <IonIcon name="people" className="text-xl" /> <span>{data.totalStudent}</span>
        </div>
        <div className="flex flex-col items-end space-y-1 text-lg">
          <span className="block font-bold text-darkLight">
            {new Intl.NumberFormat('vi-VN').format(data.price)}đ
          </span>
          <span className="block text-sm font-medium text-gray-400 line-through">
            {new Intl.NumberFormat('vi-VN').format(data.price * 1.5)}đ
          </span>
        </div>
        <button className="text-3xl text-org">
          <IonIcon name="heart-outline" className="rounded-full border-[1px] border-org p-2" />
        </button>
      </div>
    )
  );
};
export default CourseRow;
