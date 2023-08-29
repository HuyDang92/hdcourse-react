import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, TabsProps } from '@material-tailwind/react';
import Button from 'components/Button';
import Course from 'components/Course';
import { Link, useParams } from 'react-router-dom';
import { useGetUserCourseQuery, useGetWishListQuery } from 'features/Auth/auth.service';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IonIcon from '@reacticons/ionicons';

export default function TabsProfile() {
  const { active } = useParams();
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const userId = user?.uid || 'null';
  const userWishList = useGetWishListQuery(userId);
  const userCourse = useGetUserCourseQuery(userId);
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

  const data = [
    {
      label: 'Tất cả khóa học',
      value: 'allCourse',
      icon: 'bookmarks',
      courses: userCourse.data ? userCourse?.data : [],
    },
    {
      label: 'Lộ trình',
      value: 'studyRoutes',
      icon: 'library',
      courses: [],
    },
    {
      label: 'Danh sách yêu thích',
      value: 'wishList',
      icon: 'heart',
      courses: userWishList.data ? userWishList?.data : [],
    },
    {
      label: 'Chứng nhận',
      value: 'certification',
      icon: 'ribbon',
      courses: [],
    },
  ];
  return (
    <Tabs className="rounded-2xl p-3 shadow-border-full" value={active}>
      <TabsHeader className="bg-gray-200">
        {data?.map(({ label, value, icon }: any) => (
          <Tab key={value} value={value}>
            <IonIcon className="text-org" name={icon} />
            <span className="hidden font-bold text-darkLight md:block">{label}</span>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {/* {isFetching && <LoadingLocal />} */}
        {data?.map(({ value, courses }: any) =>
          courses.length ? (
            <TabPanel className="px-1 py-3 pt-8" key={value} value={value}>
              <div className="xl:hidden">
                <Slider ref={sliderRef} {...settings}>
                  {courses?.map((item: any, index: any) => (
                    <Course key={index} data={item} />
                  ))}
                </Slider>
              </div>
              <div className="xl:grid hidden grid-cols-4 gap-3">
                {courses?.map((item: any, index: any) => (
                  <Course key={index} data={item} />
                ))}
              </div>
            </TabPanel>
          ) : (
            <TabPanel className="p-5 text-center" key={value} value={value}>
              <h1 className="text-xl font-bold text-gray-300">Danh sách trống</h1>
              <div className="pt-6">
                <Link to={`/`} className="text-center">
                  <Button rounded_md primary>
                    Khám phá ngay
                  </Button>
                </Link>
              </div>
            </TabPanel>
          )
        )}
      </TabsBody>
    </Tabs>
  );
}
