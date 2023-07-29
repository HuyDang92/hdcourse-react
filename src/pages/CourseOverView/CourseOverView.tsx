import { useEffect, useState } from 'react';
import BreadcrumbComponent from './components/Breakcrumb';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { useGetAllCourseQuery, useGetCourseByIdQuery } from 'features/Course/course.service';
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
import CourseRow from 'components/CourseRow';
import Button from 'components/Button';
import Introduce from './components/Introduce';
import AllReview from './components/AllReview';
import AddWhistList from 'components/AddWishList';
const datariview = [
  {
    avatar: 'https://www.material-tailwind.com/img/face-2.jpg',
    name: 'Huy Dz',
    createdAt: '09/02/2023',
    content:
      'Khóa học chỉnh chu, anh eric chu đáo cẩn thận, cần xem chậm lại để nắm được những kiến thức anh chỉ.',
  },
  {
    avatar: 'https://www.material-tailwind.com/img/face-2.jpg',
    name: 'Huy Dz',
    createdAt: '09/02/2023',
    content:
      'Khóa học chỉnh chu, anh eric chu đáo cẩn thận, cần xem chậm lại để nắm được những kiến thức anh chỉ.',
  },
];
const CourseOverView = () => {
  const { nameCourse } = useParams();
  const [limitCourse, setLimitCourse] = useState<boolean>(false);
  const [displayStyle, setDisplayStyle] = useState<boolean>(false);
  const courseName = nameCourse && nameCourse.replace(/-/g, ' ');
  const idCourse = useSelector((state: RootState) => state.courseState.idCourse);
  const { data, isFetching } = useGetCourseByIdQuery(idCourse);
  const [trigger, result] = useLazyGetInstructorByIdQuery();
  const courses = useGetAllCourseQuery(limitCourse ? 10 : 5);

  useEffect(() => {
    if (data?.idInstructor) {
      trigger(data?.idInstructor);
    }
  }, [isFetching]);

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
  }, []);

  return (
    <div className="relative">
      <section className="bg-gradient-to-r from-[#db6968] to-[#F6D794] py-5">
        <div className="mx-auto max-w-7xl text-white">
          <BreadcrumbComponent nameCourse={courseName} />
          {!isFetching && (
            <div className="space-y-3 font-medium">
              <h1 className="text-4xl font-bold">{data?.title}</h1>
              <p className="text-xl">{data?.description}</p>
              <div className="flex items-center space-x-2">
                <span className="rounded-md bg-white px-4 py-2 text-sm text-org">
                  Bán chạy nhất
                </span>
                <span>{data?.rating}</span>
                <Rating unratedColor="amber" ratedColor="amber" value={4} readonly />
                <span className="cursor-pointer underline">({data?.ratingCount} đánh giá)</span>
              </div>
              <div className="flex space-x-5">
                <div className="flex items-center space-x-3">
                  <IonIcon name="person" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Chuyên gia</span> <br />
                    <Link to={`/instructor/${data?.author}`}>
                      <span className="text-darkLight underline">{data?.author}</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center space-x-3 border-l-2 border-r-2 px-4">
                  <IonIcon name="calendar" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Ngày cập nhật</span> <br />
                    <span className="">
                      {new Date(
                        data?.updatedAt?._seconds * 1000 + data?.updatedAt?._nanoseconds / 1000000
                      ).toLocaleDateString()}
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <IonIcon name="people" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Học viên đăng ký</span> <br />
                    <span className="">{data?.totalStudent}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="mx-auto  flex max-w-7xl space-x-10  text-darkLight ">
        <div className="my-10 w-2/3 space-y-10">
          <div className="space-y-3 rounded-2xl p-8 shadow-border-full">
            <h1 className="text-2xl font-bold">Bạn sẽ học được gì?</h1>
            <ul className="font-medium">
              {isFetching ? (
                <LoadingLocal />
              ) : (
                data?.learned?.map((item: any, index: number) => (
                  <li key={index} className="flex items-center space-x-2 py-2">
                    <IonIcon name="checkmark" className="text-org" />
                    <span> {item}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl p-8 shadow-border-full">
            <h1 className="text-2xl font-bold">Nội dung khóa học</h1>
            {isFetching ? <LoadingLocal /> : <ContentCourses props={{ idCourse: idCourse }} />}
          </div>
          <div className="space-y-3 rounded-2xl p-8 shadow-border-full">
            <h1 className="text-2xl font-bold">Yêu cầu</h1>
            <ul className="space-y-2 font-medium">
              {isFetching ? (
                <LoadingLocal />
              ) : (
                data?.requiments?.map((item: any, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <IonIcon name="checkmark" className="text-org" />
                    <span> {item}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl p-8 shadow-border-full">
            {!result.data ? <LoadingLocal /> : <Instructor data={result.data} />}
          </div>
          <div className="space-y-3 rounded-2xl p-8 shadow-border-full">
            {!result.data ? <LoadingLocal /> : <Description data={result.data} />}
          </div>
          <div className="space-y-3 rounded-2xl  p-8 shadow-border-full">
            <h1 className="pb-3 text-start text-2xl font-bold">Học viên cũng mua</h1>
            <div className="space-y-4">
              {courses.isSuccess &&
                courses?.data?.map((item: any, index: any) => (
                  <CourseRow key={index} data={item} />
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
              <span className="flex items-center space-x-2">
                (<IonIcon name="star" className="pe-2 text-org" /> {data?.rating} xếp hạng khóa học)
              </span>
            </h1>
            <div className="space-y-4">
              {datariview?.map((item: any, index: any) => (
                <ReviewCourse key={index} data={item} />
              ))}
            </div>
            <div className="text-center">
              <AllReview data={{ idCourse: idCourse }}>
                <Button rounded_md border>
                  Xem tất cả đánh giá
                </Button>
              </AllReview>
            </div>
          </div>
        </div>

        <div
          className={`${
            !displayStyle ? 'z-0 -translate-y-[35%]' : 'z-[100] translate-y-8'
          } sticky top-0  my-10 h-fit w-1/3 rounded-2xl bg-white shadow-border-full transition-all duration-300 ease-in`}
        >
          {isFetching ? (
            <LoadingLocal />
          ) : (
            <>
              <CardHeader color="blue-gray" className="relative h-56">
                <Introduce data={{ title: data.title }}>
                  <span className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-40 transition-all"></span>
                  <IonIcon
                    name="play-circle"
                    className="absolute left-[50%] top-[50%] z-20 -translate-x-[50%]  -translate-y-[50%] text-[5rem] text-white"
                  />
                  <div className="absolute bottom-5 left-20 z-20 w-full text-lg font-bold">
                    Xem giới thiệu khóa học
                  </div>
                  <img src={data?.thumb} alt="card-image" className="" />
                </Introduce>
              </CardHeader>
              <CardBody>
                <div className="space-y-2 px-5 font-medium">
                  {data?.free ? (
                    <span className=" text-center text-2xl font-bold text-darkLight">Miễn phí</span>
                  ) : (
                    <div className="flex items-center space-x-5 text-3xl font-medium">
                      <span className=" font-bold text-darkLight">
                        {new Intl.NumberFormat('vi-VN').format(data?.price)}đ
                      </span>
                      <span className="text-lg font-medium text-gray-400 line-through">
                        {new Intl.NumberFormat('vi-VN').format(data?.price * 1.5)}đ
                      </span>
                    </div>
                  )}
                  {!data?.free && <p className="text-org">Giảm 50%</p>}
                  <div className="flex items-center space-x-3">
                    <div className="w-[82%]">
                      {!data?.free ? (
                        <ButtonComponents width_full border rounded_md>
                          Thêm vào giỏ
                        </ButtonComponents>
                      ) : (
                        <ButtonComponents width_full primary rounded_md>
                          Đăng ký ngay
                        </ButtonComponents>
                      )}
                    </div>
                    <AddWhistList data={{ idCourse: idCourse }} />
                  </div>
                  {!data?.free && (
                    <ButtonComponents width_full primary rounded_md>
                      Mua ngay
                    </ButtonComponents>
                  )}
                  {!data?.free && (
                    <p className="text-center text-sm ">Đảm bảo hoàn tiền trong 30 ngày</p>
                  )}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-semibold">Khóa học bao gồm:</h3>
                    <ul className="space-y-2 text-[16px]">
                      <li className="flex items-center space-x-2">
                        <IonIcon name="film-outline" />
                        <span>Thời lượng {data?.totalTimeVideo} giờ</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <IonIcon name="bar-chart" />
                        <span>Tổng số {data?.totalLecture} bài học</span>
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
