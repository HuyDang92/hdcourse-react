import { CardHeader, CardBody, Typography } from '@material-tailwind/react';
import IonIcon from '@reacticons/ionicons';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

export default function StudyRoute() {
  return (
    <div className="w-full rounded-3xl text-darkLight shadow-border-full md:flex md:h-72">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 shrink-0 md:w-2/5 md:rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="image"
          className="h-40 w-full overflow-hidden object-cover md:h-full"
        />
      </CardHeader>
      <CardBody className="p-5 px-8">
        <Typography variant="h4" color="blue-gray" className="mb-2 text-lg md:text-xl ">
          Data analytics toàn diện
        </Typography>
        <Typography color="gray" className="mb-8 font-normal line-clamp-3 xl:line-clamp-none">
          Lộ trình trở thành Data Analyst của Gitiho được thiết kế đầy đủ từ cơ bản đến nâng cao,
          theo một quy trình được thiết kế bởi các chuyên gia hàng đầu. Lộ trình phù hợp cho cả học
          viên muốn trở thành một DA chuyên nghiệp và cả những học viên muốn ứng dụng Phân tích dữ
          liệu để tối ưu công việc của mình.
        </Typography>
        <div className="items-end justify-between xl:flex">
          <ul>
            <li className="text-md flex items-center space-x-3 font-medium ">
              <IonIcon name="book-outline" />
              <span>4 khóa học</span>
            </li>
            <li className="text-md flex items-center space-x-3 font-medium ">
              <IonIcon name="time-outline" />
              <span>38 giờ học</span>
            </li>
            <li className="text-md flex items-center space-x-3 font-medium ">
              <IonIcon name="ribbon-outline" />
              <span>10 học viên đã đăng ký</span>
            </li>
          </ul>
          <Link to="/" className="">
            <Button rounded_full primary>
              Tìm hiểu thêm
            </Button>
          </Link>
        </div>
      </CardBody>
    </div>
  );
}
