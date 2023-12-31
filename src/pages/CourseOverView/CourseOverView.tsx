import { useEffect, useState } from 'react';
import BreadcrumbComponent from './components/Breakcrumb';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import {
  useGetAllCourseQuery,
  useGetCourseByIdQuery,
  useGetRatingCouseQuery,
} from 'features/Course/course.service';
import { Rating, Spinner } from '@material-tailwind/react';
import IonIcon from '@reacticons/ionicons';
import ContentCourses from 'components/ContentCourses';
import ButtonComponents from 'components/Button';
import { CardHeader, CardBody } from '@material-tailwind/react';
import LoadingLocal from 'components/LoadingLocal';
import { useLazyGetInstructorByIdQuery } from 'features/Instructor/Instructor.service';
import Instructor from './components/Instructor';
import Description from './components/Description';
import ReviewCourse from './components/ReviewCourse';
import Button from 'components/Button';
import Introduce from './components/Introduce';
import AllReview from './components/AllReview';
import AddWhistList from 'components/AddWishList';
import { useGetAllLectureQuery } from 'features/Course/lecture.service';
import { useAddUserCourseMutation } from 'features/Auth/auth.service';
import CourseComponents from 'components/Course';
import { saveLink } from 'features/Course/Lecture.slice';

const CourseOverView = () => {
  const { nameCourse, idCourse } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<any | null>(null);
  const [limitCourse, setLimitCourse] = useState<boolean>(false);
  const [displayStyle, setDisplayStyle] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const { data, isFetching } = useGetCourseByIdQuery(idCourse as string);
  const lectures = useGetAllLectureQuery(idCourse);
  const [trigger, result] = useLazyGetInstructorByIdQuery();
  const courses = useGetAllCourseQuery(limitCourse ? 10 : 5);
  const [addUserCourse] = useAddUserCourseMutation();
  const datareview = useGetRatingCouseQuery(idCourse);

  useEffect(() => {
    if (data?.idInstructor) {
      setUserData(data);
      trigger(data?.idInstructor);
    }
  }, [isFetching, idCourse]);

  useEffect(() => {
    document.title = 'Thông tin khóa học';
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setDisplayStyle(isAtTop ? false : true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nameCourse]);

  const handleEnrollCourse = async () => {
    if (user) {
      await addUserCourse({ idUser: user.uid, idCourse: idCourse });
      navigate(
        `/course/${nameCourse}/lecture/${
          !lectures.isFetching && lectures?.data[0]?.lectures[0]?.id
        }`
      );
    } else {
      dispatch(saveLink(`/course/${nameCourse}/${idCourse}`));
      navigate('/login');
    }
  };

  return (
    <div className="relative px-3 pb-10 md:px-5 xl:px-0">
      <section className="hidden bg-gradient-to-r from-[#db6968] to-[#F6D794] py-5 xl:block">
        <div className="mx-auto max-w-7xl text-white">
          {!isFetching && <BreadcrumbComponent nameCourse={userData?.title} />}
          {!isFetching && (
            <div className="space-y-3 font-medium">
              <h1 className="w-2/3 text-4xl font-bold">{userData?.title}</h1>
              {/* <p className="w-2/3 text-xl">{userData?.description}</p> */}
              <div className="flex items-center space-x-2">
                <span className="rounded-md bg-white px-4 py-2 text-sm text-org">
                  Bán chạy nhất
                </span>
                <span>{userData?.rating}</span>
                <Rating unratedColor="amber" ratedColor="amber" value={4} readonly />
                <span className="cursor-pointer underline">({userData?.ratingCount} đánh giá)</span>
              </div>
              <div className="flex space-x-5">
                <div className="flex items-center space-x-3">
                  <IonIcon name="person" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Chuyên gia</span> <br />
                    <span className="text-darkLight ">{userData?.author}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-3 border-l-2 border-r-2 px-4">
                  <IonIcon name="calendar" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Ngày cập nhật</span> <br />
                    <span className="">
                      {new Date(
                        userData?.updatedAt?._seconds * 1000 +
                          userData?.updatedAt?._nanoseconds / 1000000
                      ).toLocaleDateString()}
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <IonIcon name="people" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Học viên đăng ký</span> <br />
                    <span className="">{userData?.totalStudent}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="mx-auto flex max-w-7xl flex-col-reverse py-10 text-darkLight xl:flex-row xl:space-x-10  xl:py-0 ">
        <div className="my-10 space-y-10 xl:w-2/3">
          <div className="space-y-3 rounded-2xl p-4 shadow-border-full md:p-8">
            <h1 className="text-2xl font-bold">Bạn sẽ học được gì?</h1>
            <ul className="font-medium">
              {isFetching ? (
                <LoadingLocal />
              ) : (
                userData?.learned?.map((item: any, index: number) => (
                  <li key={index} className="flex items-center space-x-2 py-2">
                    <IonIcon name="checkmark" className="text-org" />
                    <span> {item}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl p-4 shadow-border-full md:p-8">
            <h1 className="text-2xl font-bold">Nội dung khóa học</h1>
            <ContentCourses props={lectures} />
          </div>
          <div className="space-y-3 rounded-2xl p-8 shadow-border-full">
            <h1 className="text-2xl font-bold">Yêu cầu</h1>
            <ul className="space-y-2 font-medium">
              {isFetching ? (
                <LoadingLocal />
              ) : (
                userData?.requiments?.map((item: any, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <IonIcon name="checkmark" className="text-org" />
                    <span> {item}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl p-4 shadow-border-full md:p-8">
            {!result.data ? <LoadingLocal /> : <Instructor data={result.data} />}
          </div>
          <div className="space-y-3 rounded-2xl p-4 shadow-border-full md:p-8">
            {isFetching ? <LoadingLocal /> : <Description data={userData} />}
          </div>
          <div className="space-y-3 rounded-2xl  p-4 shadow-border-full md:p-8">
            <h1 className="pb-3 text-start text-2xl font-bold">Học viên cũng mua</h1>
            <div className="space-y-4">
              {courses.isSuccess &&
                courses?.data?.map((item: any, index: any) => (
                  <CourseComponents row key={index} data={item} />
                ))}
            </div>
            <div onClick={() => setLimitCourse(!limitCourse)} className="text-center">
              <Button rounded_md border>
                <p className="flex items-center space-x-4">
                  <span>{!limitCourse ? 'Xem thêm' : 'Ẩn bớt'}</span>
                  <span>{courses.isFetching && <Spinner />}</span>
                </p>
              </Button>
            </div>
          </div>
          <div className="space-y-3 rounded-2xl p-8 shadow-border-full">
            <h1 className="flex space-x-3 pb-3 text-start text-2xl font-bold">
              <span>Đánh giá</span>
              {datareview.isSuccess && datareview?.data?.length > 0 && (
                <span className="flex items-center space-x-2">
                  (<IonIcon name="star" className="pe-2 text-org" /> {userData?.rating} xếp hạng
                  khóa học)
                </span>
              )}
            </h1>
            <div className="space-y-4">
              {datareview.isSuccess && datareview?.data?.length > 0 ? (
                datareview?.data?.map((item: any, index: any) => (
                  <ReviewCourse key={index} data={item} />
                ))
              ) : (
                <>
                  <h3 className="text-center text-2xl font-bold text-gray-300">Chưa có đánh giá</h3>
                </>
              )}
            </div>
            {datareview.isSuccess && datareview?.data?.length > 0 && (
              <div className="text-center">
                <AllReview data={{ idCourse: idCourse }}>
                  <Button rounded_md border>
                    Xem tất cả đánh giá
                  </Button>
                </AllReview>
              </div>
            )}
          </div>
        </div>

        <div
          className={`${
            !displayStyle ? 'z-0 xl:-translate-y-[25%]' : 'translate-y-8 xl:z-[100]'
          } top-0 h-fit rounded-2xl bg-white shadow-border-full transition-all duration-300 ease-in xl:sticky xl:w-1/3`}
        >
          {isFetching ? (
            <LoadingLocal />
          ) : (
            <>
              <CardHeader color="blue-gray" className="relative h-[12rem] md:h-[20rem] xl:h-56">
                {lectures.isFetching ? (
                  <LoadingLocal />
                ) : (
                  <Introduce
                    data={{
                      title: data.title,
                      thumb: userData?.thumb,
                      source: lectures?.data[0]?.lectures[0]?.source,
                    }}
                  >
                    <span className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-40 transition-all"></span>
                    <IonIcon
                      name="play-circle"
                      className="absolute left-[50%] top-[50%] z-20 -translate-x-[50%]  -translate-y-[50%] text-[5rem] text-white"
                    />
                    <div className="absolute bottom-5 z-20 w-full text-lg font-bold md:left-60 xl:left-20">
                      Xem giới thiệu khóa học
                    </div>
                    <img src={userData?.thumb} alt="card-image" className="w-full object-cover" />
                  </Introduce>
                )}
              </CardHeader>
              <CardBody>
                <div className="space-y-2 font-medium md:px-32 xl:px-5">
                  {userData?.free ? (
                    <span className=" text-center text-2xl font-bold text-darkLight">Miễn phí</span>
                  ) : (
                    <div className="flex items-center space-x-5 text-3xl font-medium">
                      <span className=" font-bold text-darkLight">
                        {new Intl.NumberFormat('vi-VN').format(userData?.price)}đ
                      </span>
                      <span className="text-lg font-medium text-gray-400 line-through">
                        {new Intl.NumberFormat('vi-VN').format(userData?.price * 1.5)}đ
                      </span>
                    </div>
                  )}
                  {!userData?.free && <p className="text-org">Giảm 50%</p>}
                  <div className="flex items-center space-x-3">
                    <div className="w-[82%]">
                      {!userData?.free ? (
                        <ButtonComponents width_full border rounded_md>
                          Thêm vào giỏ
                        </ButtonComponents>
                      ) : (
                        <div onClick={handleEnrollCourse}>
                          <ButtonComponents width_full primary rounded_md>
                            <span> Đăng ký ngay</span>
                          </ButtonComponents>
                        </div>
                      )}
                    </div>
                    <AddWhistList data={{ idCourse: idCourse }} />
                  </div>
                  {!userData?.free && (
                    <ButtonComponents width_full primary rounded_md>
                      Mua ngay
                    </ButtonComponents>
                  )}
                  {!userData?.free && (
                    <p className="text-center text-sm ">Đảm bảo hoàn tiền trong 30 ngày</p>
                  )}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-semibold">Khóa học bao gồm:</h3>
                    <ul className="space-y-2 text-[16px]">
                      <li className="flex items-center space-x-2">
                        <IonIcon name="film-outline" />
                        <span>Thời lượng {userData?.totalTimeVideo} giờ</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <IonIcon name="bar-chart" />
                        <span>Tổng số {userData?.totalLecture} bài học</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <IonIcon name="infinite" />
                        <span>Quyền truy cập đầy đủ suốt đời</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <IonIcon name="battery-full" />
                        <span>Học mọi lúc mọi nơi</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <IonIcon name="ribbon" />
                        <span>Giấy chứng nhận hoàn thành</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseOverView;
