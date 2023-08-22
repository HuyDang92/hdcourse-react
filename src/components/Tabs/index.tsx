import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import Button from 'components/Button';
import Course from 'components/Course';
import { Link } from 'react-router-dom';
import { useGetAllDataCatHotQuery } from 'features/Course/course.service';
import LoadingLocal from 'components/LoadingLocal';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TabsComponent() {
  const { data, isFetching } = useGetAllDataCatHotQuery();

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = (): void => {
    sliderRef.current?.slickNext();
  };

  const previous = (): void => {
    sliderRef.current?.slickPrev();
  };
  return (
    <Tabs className="rounded-2xl p-1 shadow-border-full md:p-3" value="SEO">
      <TabsHeader className="bg-gray-200">
        {!isFetching &&
          data?.map(({ label, value }: any) => (
            <Tab key={value} value={value}>
              <span className="font-bold text-darkLight">{label}</span>
            </Tab>
          ))}
      </TabsHeader>
      <TabsBody>
        {isFetching && <LoadingLocal />}
        {!isFetching &&
          data?.map(({ value, courses }: any) => {
            return (
              <TabPanel className="px-1 py-3 pt-8" key={value} value={value}>
                <div className="">
                  <Slider ref={sliderRef} {...settings}>
                    {courses?.map((item: any, index: any) => (
                      <Course key={index} data={item} />
                    ))}
                  </Slider>
                </div>
                <div className="pt-6">
                  <Link to={`/categories/${value}`} className="text-center">
                    <Button rounded_md border>
                      Xem thêm
                    </Button>
                  </Link>
                </div>
              </TabPanel>
            );
          })}
      </TabsBody>
    </Tabs>
  );
}
