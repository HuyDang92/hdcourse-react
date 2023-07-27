import { useEffect } from 'react';
import BreadcrumbComponent from './components/Breakcrumb';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { useGetCourseByIdQuery } from 'features/Course/course.service';
import { Rating } from '@material-tailwind/react';
import IonIcon from '@reacticons/ionicons';
import ContentCourses from 'components/ContentCourses';
import ButtonComponents from 'components/Button';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const CourseOverView = () => {
  const { nameCourse } = useParams();
  const courseName = nameCourse && nameCourse.replace(/-/g, ' ');
  const idCourse = useSelector((state: RootState) => state.courseState.idCourse);
  const { data, isFetching } = useGetCourseByIdQuery(idCourse);

  useEffect(() => {
    document.title = 'Thông tin khóa học';
  }, []);
  return (
    <div className="relative">
      <section className="bg-gradient-to-r from-[#db6968] to-[#F6D794] py-5">
        <div className="mx-auto max-w-7xl text-white">
          <BreadcrumbComponent nameCourse={courseName} />
          {!isFetching && (
            <div className="space-y-3 font-medium">
              <h1 className="text-4xl font-bold">{data.title}</h1>
              <p className="text-xl">{data.description}</p>
              <div className="flex items-center space-x-2">
                <span className="rounded-md bg-white px-4 py-2 text-sm text-org">
                  Bán chạy nhất
                </span>
                <span>{data.rating}</span>
                <Rating unratedColor="amber" ratedColor="amber" value={4} readonly />
                <span className="cursor-pointer underline">({data.ratingCount} đánh giá)</span>
              </div>
              <div className="flex space-x-5">
                <div className="flex items-center space-x-3">
                  <IonIcon name="person" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Chuyên gia</span> <br />
                    <Link to={`/instructor/${data.author}`}>
                      <span className="text-darkLight underline">{data.author}</span>
                    </Link>
                  </p>
                </div>
                <div className="flex items-center space-x-3 border-l-2 border-r-2 px-4">
                  <IonIcon name="calendar" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Ngày cập nhật</span> <br />
                    <span className="">
                      {new Date(
                        data.updatedAt?._seconds * 1000 + data.updatedAt?._nanoseconds / 1000000
                      ).toLocaleDateString()}
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <IonIcon name="people" className="w-full rounded-full border-2 p-2 text-2xl" />
                  <p>
                    <span>Học viên đăng ký</span> <br />
                    <span className="">{data.totalStudent}</span>
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
            <ul className="flex flex-wrap justify-between font-medium">
              {!isFetching &&
                data.learned.map((item: any) => (
                  <li className="flex w-[50%] items-center space-x-2">
                    <IonIcon name="checkmark" className="text-org" />
                    <span> {item}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl p-8 shadow-border-full">
            <h1 className="text-2xl font-bold">Nội dung khóa học</h1>
            <ContentCourses />
          </div>
        </div>
        {!isFetching && (
          <Card className="relative -top-[10rem] my-10 h-fit w-1/3 rounded-2xl">
            <CardHeader color="blue-gray" className="relative h-56">
              <span className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-40 transition-all"></span>
              <IonIcon
                name="play-circle"
                className="absolute left-[50%] top-[50%] z-20 -translate-x-[50%]  -translate-y-[50%] text-[5rem] text-white"
              />
              <div className="absolute bottom-5 left-20 z-20 w-full text-lg font-bold">
                Xem giới thiệu khóa học
              </div>
              <img src={data.thumb} alt="card-image" className="" />
            </CardHeader>
            <CardBody>
              <div className="space-y-3 px-5 font-medium">
                <div className="flex items-center space-x-5 text-4xl font-medium">
                  <span className=" font-bold text-darkLight">
                    {new Intl.NumberFormat('vi-VN').format(data.price)}đ
                  </span>
                  <span className="text-lg font-medium text-gray-400 line-through">
                    {new Intl.NumberFormat('vi-VN').format(data.price * 1.5)}đ
                  </span>
                </div>
                <p className="text-org">Giảm 50%</p>
                <div className="flex items-center space-x-3">
                  <div className="w-[90%]">
                    <ButtonComponents width_full border rounded_md>
                      Thêm vào giỏ
                    </ButtonComponents>
                  </div>
                  <button className="w-[10%] text-4xl text-org">
                    <IonIcon name="heart-outline" />
                  </button>
                </div>
                <ButtonComponents width_full primary rounded_md>
                  Mua ngay
                </ButtonComponents>
                <p className="text-center text-sm ">Đảm bảo hoàn tiền trong 30 ngày</p>
              </div>
            </CardBody>
          </Card>
        )}
        {/* <div className=" overflow-hidden rounded-2xl shadow-border-full">
        </div> */}
      </div>
    </div>
  );
};

export default CourseOverView;
