import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IonIcon from '@reacticons/ionicons';
import { useRef } from 'react';
import StudyRoute from 'components/StudyRoute';



function SlideComponent() {
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
        className="absolute left-[2%] top-[45%] z-10 rounded-full bg-gray-500 p-2 text-2xl text-white opacity-30 duration-200 ease-in-out hover:scale-105 hover:opacity-60"
      />
      <IonIcon
        name="chevron-forward-outline"
        onClick={next}
        className="absolute right-[2%] top-[45%] z-10 rounded-full bg-gray-500 p-2 text-2xl text-white opacity-30 duration-200 ease-in-out hover:scale-105 hover:opacity-60"
      />
      <Slider ref={sliderRef} {...settings}>
        <div className="relative rounded-2xl p-4">
          <StudyRoute />
        </div>
        <div className="relative rounded-2xl p-4">
          <StudyRoute />
        </div>
        <div className="relative rounded-2xl p-4">
          <StudyRoute />
        </div>
      </Slider>
    </div>
  );
}

export default SlideComponent;
