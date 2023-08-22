import { useEffect, useState } from 'react';
import SliderComponent from './components/Hero';
import section_1 from 'assets/section_2/asset_1.svg';
import section_2 from 'assets/section_2/asset_2.svg';
import section_3 from 'assets/section_2/asset_3.svg';
import section_4 from 'assets/section_2/asset_4.svg';
import company from 'assets/company.png';
import TabsComponent from '../../components/Tabs';
import { DesignIcon, WebIcon, ItIcon, BusinessIcon } from 'assets/icons';
import SlideComponent from 'components/StudyRoute/Slider';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Blog from 'components/Blog';

const ListTopic = [
  {
    icon: DesignIcon,
    title: 'Thiết kế',
  },
  {
    icon: WebIcon,
    title: 'Phát triển',
  },
  {
    icon: BusinessIcon,
    title: 'Kinh doanh',
  },
  {
    icon: ItIcon,
    title: 'CNTT & Phần mềm',
  },
];

const Home = () => {
  useEffect(() => {
    document.title = 'HDCourse - Học ngay làm luôn'; // Thay đổi tiêu đề tại đây
  }, []);

  return (
    <div className="space-y-32 pb-5">
      <section className="section_1">
        <SliderComponent />
      </section>
      <div className="space-y-32 px-5  xl:space-y-0 xl:px-0">
        <section className="section_2">
          <div className="mx-auto max-w-7xl space-y-10">
            <h1 className="text-xl font-extrabold text-darkLight md:text-3xl">
              Vì sao học viên nên chọn HDCourse ?
            </h1>
            <ul className="grid grid-cols-2 gap-3 text-center font-medium xl:grid-cols-4">
              <li className="flex flex-col items-center rounded-3xl p-5 shadow-border-full">
                <img className="h-14 w-14 md:h-28 md:w-28" src={section_1} alt="" />
                <span className='md:text-lg text-sm'>Lộ trình bài bản Ứng với từng vị trí, cấp bậc</span>
              </li>
              <li className="flex flex-col items-center rounded-3xl p-5 shadow-border-full">
                <img className="h-14 w-14 md:h-28 md:w-28" src={section_2} alt="" />
                <span className='md:text-lg text-sm'>Kiến thức thực tiễn Giải quyết ngay vấn đề trong công việc</span>
              </li>
              <li className="flex flex-col items-center rounded-3xl p-5 shadow-border-full">
                <img className="h-14 w-14 md:h-28 md:w-28" src={section_3} alt="" />
                <span className='md:text-lg text-sm'>Giảng viên trực tiếp giải đáp trong 8h làm việc</span>
              </li>
              <li className="flex flex-col items-center rounded-3xl p-5 shadow-border-full">
                <img className="h-14 w-14 md:h-28 md:w-28" src={section_4} alt="" />
                <span className='md:text-lg text-sm'>Nội dung cập nhật hàng tháng Đảm bảo phiên bản mới nhất</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="section_3">
          <div className=" mx-auto max-w-7xl space-y-10">
            <h1 className="text-xl font-extrabold text-darkLight md:text-3xl">
              Khóa học dành cho bạn
            </h1>
            <TabsComponent />
          </div>
        </section>
        <section className="section_4">
          <div className=" mx-auto max-w-7xl space-y-10">
            <h1 className="text-xl font-extrabold text-darkLight md:text-3xl">
              Lộ trình dành cho bạn
            </h1>
            {/* <StudyRoute /> */}
            <SlideComponent />
            <div className="pt-6">
              <Link to="/" className="text-center">
                <Button rounded_md border>
                  Xem thêm
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="section_5">
          <div className=" mx-auto max-w-7xl space-y-10">
            <h1 className="text-xl font-extrabold text-darkLight md:text-3xl">
              Các thể loại hàng đầu
            </h1>
            <ul className="grid grid-cols-2 gap-3 text-center font-medium xl:grid-cols-4">
              {ListTopic?.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center rounded-3xl p-4 shadow-border-full"
                  >
                    <div className="w-20 transition-all hover:scale-[115%] md:w-44">
                      <Icon />
                    </div>
                    <span className="text-lg font-bold text-darkLight">{item.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="section_6 hidden md:block">
          <div className=" mx-auto flex max-w-7xl">
            <div className="w-3/5 space-y-6 pe-10">
              <h1 className="text-xl font-extrabold text-darkLight md:text-3xl">
                HDCourse Business - Giải pháp chuyển đổi số Đào tạo nội bộ dành cho Doanh nghiệp
              </h1>
              <p className="text-lg font-medium text-darkLight">
                Sẵn sàng nền tảng và nội dung đào tạo cho tất cả các vị trí, bộ phận. Ứng dụng ngay
                vào doanh nghiệp chỉ với một click.
              </p>
              <ul className="ps-5 text-lg font-medium text-darkLight">
                <li className="list-disc">
                  Truy cập không giới hạn hơn 22000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi
                  lúc
                </li>
                <li className="list-disc">Các chứng chỉ hàng đầu về công nghệ và kinh doanh </li>
              </ul>
              <div className="space-x-3 xl:flex">
                <Link to="/">
                  <Button rounded_full primary>
                    Đăng ký cho doanh nghiệp
                  </Button>
                </Link>
                <Link to="/">
                  <Button rounded_full border>
                    Tìm hiểu thêm
                  </Button>
                </Link>
              </div>
              <div className="w-full pt-10 xl:w-[80%]">
                <p className="text-lg font-medium text-darkLight">
                  Hơn 100+ doanh nghiệp đã đăng ký cho nhân sự của họ
                </p>
                <div className="flex items-center justify-between pt-4 text-3xl">
                  <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="" />
                  <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="" />
                  <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" />
                  <img src="https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="w-2/5">
              <img src={company} alt="" />
            </div>
          </div>
        </section>
        <section className="section_7 ">
          <div className=" mx-auto max-w-4xl md:flex">
            <div className="md:w-[35%]">
              <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="" />
            </div>
            <div className="space-y-5 pt-10 text-darkLight md:w-[65%] md:ps-10">
              <h1 className="text-3xl font-extrabold ">Trở thành giảng viên</h1>
              <p className="text-font-medium text-lg">
                Giảng viên trên khắp thế giới giảng dạy hàng triệu học viên trên Udemy. Chúng tôi
                cung cấp công cụ và kỹ năng để dạy những gì bạn yêu thích.
              </p>
              <div className="pt-6">
                <Link to="/" className="">
                  <Button rounded_md primary>
                    Bắt đầu ngay hôm nay
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section_8 ">
          <div className=" mx-auto max-w-7xl space-y-10">
            <h1 className="text-xl font-extrabold text-darkLight md:text-3xl">
              Cẩm nang kỹ năng và kiến thức
            </h1>
            <div className="justify-between space-x-3 md:flex">
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </section>
        <section className="section_9">
          <div className=" mx-auto max-w-7xl space-y-5">
            <h1 className="text-xl font-extrabold text-darkLight md:text-3xl">Tìm kiếm nhiều</h1>
            <div className="flex flex-wrap space-x-3 space-y-2">
              <Link to="/">
                <Button rounded_full border>
                  Kinh doanh
                </Button>
              </Link>
              <Link to="/">
                <Button rounded_full border>
                  Kinh doanh
                </Button>
              </Link>
              <Link to="/">
                <Button rounded_full border>
                  Kinh doanh
                </Button>
              </Link>
              <Link to="/">
                <Button rounded_full border>
                  Kinh doanh
                </Button>
              </Link>
              <Link to="/">
                <Button rounded_full border>
                  Kinh doanh
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
