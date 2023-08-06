import { CardHeader, CardBody, Rating, IconButton } from '@material-tailwind/react';
import { ICourse } from 'types/Home';
import IonIcon from '@reacticons/ionicons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from 'features/Course/Course.slice';
import AddWhistList from 'components/AddWishList';
import { RootState } from 'stores/store';
import { useGetUserCourseQuery } from 'features/Auth/auth.service';
import slugify from 'slugify';
import { useGetAllLectureQuery } from 'features/Course/lecture.service';
import { useEffect, useState } from 'react';
import { saveLink } from 'features/Course/Lecture.slice';

interface IChildProps {
  data: ICourse;
  row?: boolean;
}
const CourseComponents: React.FC<IChildProps> = ({ data, row }) => {
  const slug = slugify(data.title, {
    replacement: '-',
    lower: true,
    strict: true,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const userCourses = useGetUserCourseQuery(user?.uid);
  const lectures = useGetAllLectureQuery(data?.id);
  const [enroll, setEnroll] = useState<boolean>(false);
  useEffect(() => {
    if (userCourses.data) {
      const existingIndex = userCourses.data.findIndex((item: any) => item.id === data?.id);
      setEnroll(existingIndex !== -1);
    }
  }, [userCourses.isFetching]);

  const handleRoute = (idCourse: string) => {
    if (user) {
      const existingIndex = userCourses.data.findIndex((item: any) => item.id === idCourse);
      if (existingIndex == -1) {
        navigate(`/course/${slug}/${idCourse}`);
        dispatch(getCourse(idCourse));
      } else {
        navigate(
          `/course/${slug}/lecture/${!lectures.isFetching && lectures?.data[0]?.lectures[0]?.id}`
        );
        dispatch(getCourse(idCourse));
      }
    } else {
      navigate(`/course/${slug}/${idCourse}`);
      dispatch(getCourse(idCourse));
    }
  };

  return !row ? (
    <div className="my-5 h-fit w-[19.3rem] rounded-2xl shadow-border-full">
      <CardHeader
        color="blue-gray"
        className="group relative h-44 overflow-hidden transition-all hover:scale-[105%]"
      >
        <span
          onClick={() => handleRoute(data.id)}
          className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-0 transition-all group-hover:opacity-50"
        ></span>

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
      <CardBody className="-mt-2 h-48 space-y-2 overflow-hidden">
        <div className="min-h-[25px] cursor-pointer text-lg font-semibold line-clamp-2">
          <span onClick={() => handleRoute(data.id)}>{data.title}</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm font-medium text-gray-400">{data.author}</div>
          {enroll ? (
            <span className="flex items-center space-x-2">
              <IonIcon name="checkmark-circle" className="text-org" /> <span>Đã đăng ký</span>
            </span>
          ) : null}
        </div>
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
  ) : (
    <div className="flex items-center justify-between border-b-[1px] pb-4">
      <div onClick={() => handleRoute(data.id)}>
        <div className="flex items-center space-x-3">
          <div className="">
            <img src={data.thumb} alt="" className="h-20 w-28 rounded-xl" />
          </div>
          <div className="space-y-2 font-medium">
            <p className="flex w-72 items-center space-x-4">
              <span className="text-xl font-bold line-clamp-2">{data.title}</span>
            </p>
            <ul className="flex items-center space-x-7 text-sm">
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
      </div>
      <div className="flex items-center space-x-1 font-bold text-org">
        <span>{data.rating}</span> <IonIcon name="star" />
      </div>
      <div className="flex items-center space-x-1 font-bold ">
        <IonIcon name="people" className="text-xl" /> <span>{data.totalStudent}</span>
      </div>
      {!data.free ? (
        <div className="flex flex-col items-end space-y-1">
          <span className="block font-bold text-darkLight">
            {new Intl.NumberFormat('vi-VN').format(data.price)}đ
          </span>
          <span className="block text-sm font-medium text-gray-400 line-through">
            {new Intl.NumberFormat('vi-VN').format(data.price * 1.5)}đ
          </span>
        </div>
      ) : (
        <div className="block font-bold text-darkLight">
          {enroll ? (
            <span className="flex items-center space-x-2">
              <IonIcon name="checkmark-circle" className="text-org" /> <span>Đã đăng ký</span>
            </span>
          ) : (
            'Miễn phí'
          )}
        </div>
      )}

      <AddWhistList data={{ idCourse: data.id }} />
    </div>
  );
};
export default CourseComponents;
