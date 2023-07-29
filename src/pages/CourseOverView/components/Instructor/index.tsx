import IonIcon from '@reacticons/ionicons';
import { IInstructor } from 'types/Home';
import { useState } from 'react';
import { IUserInfo } from 'types/User';

interface IChildProps {
  data: IInstructor;
}
const Instructor: React.FC<IChildProps> = ({ data }) => {
  const [extra, setExtra] = useState<boolean>(true);
  // const [getInstructor, isPending] = useGetUserByIdMutation();

  // useEffect(() => {
  //   if (data.idUser) {
  //     getInstructor({ uid: data.idUser }).then((item: any) => {
  //       setUser(item.data);
  //     });
  //   }
  // }, [data.idUser]);
  return (
    data && (
      <>
        <h1 className="text-2xl font-bold">Giảng viên</h1>
        <ul className="space-y-4 font-medium">
          <li className="text-xl font-bold text-org underline">{data?.name}</li>
          <li className="text-lg text-gray-500">{data?.field}</li>
          <li className="flex items-center space-x-5">
            <img src={data?.avatar} alt="" className="h-36 w-36 rounded-full object-cover" />
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
            className={`${extra && 'h-24'} relative overflow-hidden pb-10 transition-all`}
          >
            <span dangerouslySetInnerHTML={{ __html: data?.description }} />
            <span className="absolute -bottom-0 left-0 right-0 cursor-pointer  bg-gradient-to-t from-[#fff] to-transparent py-6 text-center text-org">
              <span className="relative -bottom-7">{extra ? 'Xem thêm' : 'Ẩn bớt'}</span>
            </span>
          </li>
        </ul>
      </>
    )
  );
};
export default Instructor;
