import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, TabsProps } from '@material-tailwind/react';
import Button from 'components/Button';
import Course from 'components/Course';
import { Link } from 'react-router-dom';
import { useGetAllDataCatHotQuery } from 'features/Course/course.service';
import { useEffect } from 'react';
import LoadingLocal from 'components/LoadingLocal';
const dataFake = [
  {
    label: 'Tất cả khóa học',
    value: 'allCourse',
    courses: [
      {
        id: 'zXNLC6ErqbciESQA6BQw',
        totalLecture: '33',
        totalTimeVideo: '43',
        level: 'Cơ bản',
        thumb:
          'https://res.cloudinary.com/dbppi7qw4/image/upload/v1690725975/courses/lxszyfvwivdhfkx4zyum.jpg',
        author: 'Huy Dz',
        id_category: '3GgSpwfcOywTfA7haW7O',
        rating: '4.5',
        description: 'dgfhhfsgedhffteggfgdrqeghfgdr',
        title: 'SEO 4',
        ratingCount: '56',
        idInstructor: 'Ky3lkHEyYRosulNIoigQ',
        price: '1780000',
        createdAt: {
          _seconds: 1690725976,
          _nanoseconds: 757000000,
        },
        updatedAt: {
          _seconds: 1690725976,
          _nanoseconds: 757000000,
        },
        totalStudent: 344,
        learned: [''],
        requiments: [''],
        free: false,
      },
      {
        id: 'mqckIDTEoPXxrAZTfi5U',
        totalLecture: '33',
        totalTimeVideo: '43',
        thumb:
          'https://res.cloudinary.com/dbppi7qw4/image/upload/v1690183610/courses/vndjd9bzpc8jbsyj5ogs.jpg',
        author: 'Huy Dz',
        price: '1780000',
        id_category: '3GgSpwfcOywTfA7haW7O',
        rating: '4.5',
        description: 'dgfhhfsgedhffteggfgdrqeghfgdr',
        title: 'SEO 2',
        ratingCount: '56',
        createdAt: {
          _seconds: 1690183610,
          _nanoseconds: 647000000,
        },
        updatedAt: {
          _seconds: 1690183610,
          _nanoseconds: 647000000,
        },
        requiments: [''],
        learned: [''],
        idInstructor: 'Ky3lkHEyYRosulNIoigQ',
        level: 'Cơ bản',
        free: false,
        totalStudent: 332,
      },
      {
        id: 'altlGVVz6nHDscM0kMuO',
        totalLecture: '33',
        totalTimeVideo: '43',
        thumb:
          'https://res.cloudinary.com/dbppi7qw4/image/upload/v1690183561/courses/t4nqpy9opi9ih6mj7cxe.jpg',
        author: 'Huy Dz',
        price: '1780000',
        rating: '4.5',
        description: 'dgfhhfsgedhffteggfgdrqeghfgdr',
        ratingCount: '56',
        createdAt: {
          _seconds: 1690183562,
          _nanoseconds: 162000000,
        },
        updatedAt: {
          _seconds: 1690183562,
          _nanoseconds: 162000000,
        },
        requiments: [''],
        learned: [''],
        idInstructor: 'Ky3lkHEyYRosulNIoigQ',
        level: 'Cơ bản',
        free: false,
        title: 'SEO 3',
        id_category: '3GgSpwfcOywTfA7haW7O',
        totalStudent: 244,
      },
      {
        id: 'a8fvE6JGhFStmF44S6J1',
        totalLecture: '33',
        totalTimeVideo: '43',
        level: 'Cơ bản',
        thumb:
          'https://res.cloudinary.com/dbppi7qw4/image/upload/v1690726071/courses/w1p428qf8wl27u0x1nfq.jpg',
        author: 'Huy Pro',
        id_category: '3GgSpwfcOywTfA7haW7O',
        rating: '4.5',
        description:
          'Thành thạo mutations, cơ chế hoạt động của cache,useQuery, useInfiniteQuery, làm việc với JWT,... trong React query',
        ratingCount: '56',
        idInstructor: 'Ky3lkHEyYRosulNIoigQ',
        price: '1380000',
        createdAt: {
          _seconds: 1690726071,
          _nanoseconds: 794000000,
        },
        updatedAt: {
          _seconds: 1690726071,
          _nanoseconds: 794000000,
        },
        totalStudent: 232,
        learned: [''],
        requiments: [''],
        title: 'SEO 1',
        free: true,
      },
    ],
  },
  {
    label: 'Lộ trình',
    value: 'studyRoutes',
    courses: [],
  },
  {
    label: 'Danh sách yêu thích',
    value: 'wishList',
    courses: [],
  },
  {
    label: 'Chứng nhận',
    value: 'certification',
    courses: [],
  },
];
export default function TabsProfile() {
  const { data, isFetching } = useGetAllDataCatHotQuery();

  return (
    <Tabs className="rounded-2xl p-3 shadow-border-full" value="allCourse">
      <TabsHeader className="bg-gray-200">
        {dataFake?.map(({ label, value }: any) => (
          <Tab key={value} value={value}>
            <span className="font-bold text-darkLight">{label}</span>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {isFetching && <LoadingLocal />}
        {dataFake?.map(({ value, courses }: any) =>
          courses.length ? (
            <TabPanel className="px-1 py-3 pt-8" key={value} value={value}>
              <div className="flex justify-between space-x-3">
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
