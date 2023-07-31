import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IonIcon from '@reacticons/ionicons';
import { useRef } from 'react';
import banner_1 from 'assets/banner/banner_1.jpg';
import banner_2 from 'assets/banner/banner_2.jpg';
import Button from 'components/Button';

function Hero() {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const next = (): void => {
    sliderRef.current?.slickNext();
  };

  const previous = (): void => {
    sliderRef.current?.slickPrev();
  };
  return (
    <div className="relative">
      <IonIcon
        name="chevron-back-outline"
        onClick={previous}
        className="absolute left-[3%] top-[45%] z-10 rounded-full bg-gray-500 p-2 text-2xl text-white opacity-30 duration-200 ease-in-out hover:scale-105 hover:opacity-60"
      />
      <IonIcon
        name="chevron-forward-outline"
        onClick={next}
        className="absolute right-[3%] top-[45%] z-10 rounded-full bg-gray-500 p-2 text-2xl text-white opacity-30 duration-200 ease-in-out hover:scale-105 hover:opacity-60"
      />
      <Slider ref={sliderRef} {...settings}>
        <div className="relative">
          <img src={banner_1} className="h-[30rem] w-full object-cover" alt="" />
          <div className="absolute left-[8%] top-[20%] w-[30rem] space-y-4 text-white">
            <h1 className="text-4xl font-extrabold">Hoc thả ga với gói hội viên HDCourse</h1>
            <p className="text-lg font-bold">
              Học không giới hạn <span className="font-extrabold text-org">450+</span> khóa học chất
              lượng
            </p>
            <p className="text-4xl font-extrabold">
              Chỉ từ <span className="font-extrabold text-org">199.000đ</span>/tháng
            </p>
            <Button rounded_md primary>
              Khám phá ngay
            </Button>
          </div>
        </div>
        <div className="relative">
          <img src={banner_2} className="h-[30rem] w-full object-cover" alt="" />
          <div className="absolute left-[8%] top-[20%] w-[30rem] space-y-4 text-darkLight">
            <h1 className="text-4xl font-extrabold">HDCourse học tập tiết kiệm tối đa</h1>
            <p className="text-lg font-bold">
              Đồng giá <span className="font-extrabold text-org">200+</span> khóa học chất lượng
            </p>
            <p className="text-4xl font-extrabold">
              Chỉ từ <span className="font-extrabold text-org">149.000đ</span>
            </p>
            <Button rounded_md primary>
              Đăng ký ngay
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
