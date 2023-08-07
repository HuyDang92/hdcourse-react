import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, TabsProps } from '@material-tailwind/react';
import Button from 'components/Button';
import Course from 'components/Course';
import { Link, useParams } from 'react-router-dom';
import { useGetUserCourseQuery, useGetWishListQuery } from 'features/Auth/auth.service';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';

export default function TabsProfile() {
  const { active } = useParams();
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const userId = user?.uid || 'null';
  const userWishList = useGetWishListQuery(userId);
  const userCourse = useGetUserCourseQuery(userId);

  const data = [
    {
      label: 'Tất cả khóa học',
      value: 'allCourse',
      courses: userCourse.data ? userCourse?.data : [],
    },
    {
      label: 'Lộ trình',
      value: 'studyRoutes',
      courses: [],
    },
    {
      label: 'Danh sách yêu thích',
      value: 'wishList',
      courses: userWishList.data ? userWishList?.data : [],
    },
    {
      label: 'Chứng nhận',
      value: 'certification',
      courses: [],
    },
  ];
  return (
    <Tabs className="rounded-2xl p-3 shadow-border-full" value={active}>
      <TabsHeader className="bg-gray-200">
        {data?.map(({ label, value }: any) => (
          <Tab key={value} value={value}>
            <span className="font-bold text-darkLight">{label}</span>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {/* {isFetching && <LoadingLocal />} */}
        {data?.map(({ value, courses }: any) =>
          courses.length ? (
            <TabPanel className="px-1 py-3 pt-8" key={value} value={value}>
              <div className="grid grid-cols-4 gap-3">
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
