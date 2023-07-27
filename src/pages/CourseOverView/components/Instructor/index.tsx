import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { IInstructor } from 'types/Home';
import { useGetUserByIdMutation } from 'features/Auth/auth.service';
import { useEffect, useState } from 'react';
import { IUserInfo } from 'types/User';

interface IChildProps {
  data: IInstructor;
}
const Instructor: React.FC<IChildProps> = ({ data }) => {
  const [user, setUser] = useState<IUserInfo | null>(null);
  const [extra, setExtra] = useState<boolean>(true);
  const [getInstructor, isPending] = useGetUserByIdMutation();

  useEffect(() => {
    if (data.idUser) {
      getInstructor({ uid: data.idUser }).then((item: any) => {
        setUser(item.data);
      });
    }
  }, [data.idUser]);
  return (
    data && (
      <>
        <h1 className="text-2xl font-bold">Giảng viên</h1>
        <ul className="space-y-4 font-medium">
          <li className="text-xl font-bold text-org underline">
            {!isPending.isLoading && user?.displayName}
          </li>
          <li className="text-lg text-gray-500">{data?.field}</li>
          <li className="flex items-center space-x-5">
            <img src={user?.photoURL} alt="" className="h-36 w-36 rounded-full object-cover" />
            <div className="space-y-2 text-[17px]">
              <div className="flex items-center space-x-3">
                <IonIcon name="star" />
                <span>{data.rating} xếp hạng giảng viên</span>
              </div>
              <div className="flex items-center space-x-3">
                <IonIcon name="ribbon" />
                <span>{data.reviewCount} đánh giá</span>
              </div>
              <div className="flex items-center space-x-3">
                <IonIcon name="people" />
                <span>{data.totalStudents} học viên</span>
              </div>
              <div className="flex items-center space-x-3">
                <IonIcon name="play-circle" />
                <span>{data.totalCourses} khóa học</span>
              </div>
            </div>
          </li>
          <li
            onClick={() => setExtra(!extra)}
            className={`${extra && 'h-20'} relative overflow-hidden pb-10 transition-all`}
          >
            <span>{data?.description}</span>
            <span className="absolute -bottom-0 cursor-pointer bg-white p-2 px-5 text-org">
              {extra ? 'Xem thêm' : 'Ẩn bớt'}
            </span>
          </li>
        </ul>
      </>
    )
  );
};
export default Instructor;
