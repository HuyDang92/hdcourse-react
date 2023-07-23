import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, TabsProps } from '@material-tailwind/react';
import Button from 'components/Button';
import Course from 'components/Course';
import { Link } from 'react-router-dom';
import { useGetAllDataByIdCatQuery } from 'features/Course/course.service';
import { useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import LoadingLocal from 'components/LoadingLocal';
export default function TabsComponent() {
  const { data, isFetching } = useGetAllDataByIdCatQuery();
  console.log(data);

  // const dataCourse = [
  //   {
  //     label: 'HTML',
  //     value: 'html',
  //     course: [
  //       {
  //         id_category: '12345yhgfdx',
  //         thumb:
  //           'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
  //         title: 'Course 1',
  //         author: 'Author 1',
  //         rating: 4.5,
  //         ratingCount: 100,
  //         price: 29.99,
  //         description: 'Course 1 description',
  //         tree: true,
  //         totalLecture: 10,
  //         totalStudent: 500,
  //         totalTimeVideo: 120,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         updatedAt: Timestamp.fromDate(new Date()),
  //       },
  //       {
  //         id_category: '12345yhgfdx',
  //         thumb:
  //           'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
  //         title: 'Course 2',
  //         author: 'Author 2',
  //         rating: 4.0,
  //         ratingCount: 50,
  //         price: 19.99,
  //         description: 'Course 2 description',
  //         tree: false,
  //         totalLecture: 8,
  //         totalStudent: 300,
  //         totalTimeVideo: 90,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         updatedAt: Timestamp.fromDate(new Date()),
  //       },
  //       {
  //         id_category: '12345yhgfdx',
  //         thumb:
  //           'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
  //         title: 'Course 3',
  //         author: 'Author 3',
  //         rating: 4.8,
  //         ratingCount: 200,
  //         price: 39.99,
  //         description: 'Course 3 description',
  //         tree: true,
  //         totalLecture: 12,
  //         totalStudent: 800,
  //         totalTimeVideo: 150,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         updatedAt: Timestamp.fromDate(new Date()),
  //       },
  //       {
  //         id_category: '12345yhgfdx',
  //         thumb:
  //           'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
  //         title: 'Course 4',
  //         author: 'Author 4',
  //         rating: 4.2,
  //         ratingCount: 80,
  //         price: 24.99,
  //         description: 'Course 4 description',
  //         tree: false,
  //         totalLecture: 6,
  //         totalStudent: 200,
  //         totalTimeVideo: 60,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         updatedAt: Timestamp.fromDate(new Date()),
  //       },
  //     ],

  //     // ...other course objects
  //   },
  //   {
  //     label: 'React',
  //     value: 'react',
  //     course: [
  //       {
  //         id_category: '12345yhgfdx',
  //         thumb:
  //           'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
  //         title: 'Course 1',
  //         author: 'Author 1',
  //         rating: 4.5,
  //         ratingCount: 100,
  //         price: 29.99,
  //         description: 'Course 1 description',
  //         tree: true,
  //         totalLecture: 10,
  //         totalStudent: 500,
  //         totalTimeVideo: 120,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         updatedAt: Timestamp.fromDate(new Date()),
  //       },
  //       {
  //         id_category: '12345yhgfdx',
  //         thumb:
  //           'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
  //         title: 'Course 2',
  //         author: 'Author 2',
  //         rating: 4.0,
  //         ratingCount: 50,
  //         price: 19.99,
  //         description: 'Course 2 description',
  //         tree: false,
  //         totalLecture: 8,
  //         totalStudent: 300,
  //         totalTimeVideo: 90,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         updatedAt: Timestamp.fromDate(new Date()),
  //       },
  //       {
  //         id_category: '12345yhgfdx',
  //         thumb:
  //           'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
  //         title: 'Course 3',
  //         author: 'Author 3',
  //         rating: 4.8,
  //         ratingCount: 200,
  //         price: 39.99,
  //         description: 'Course 3 description',
  //         tree: true,
  //         totalLecture: 12,
  //         totalStudent: 800,
  //         totalTimeVideo: 150,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         updatedAt: Timestamp.fromDate(new Date()),
  //       },
  //       {
  //         id_category: '12345yhgfdx',
  //         thumb:
  //           'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
  //         title: 'Course 4',
  //         author: 'Author 4',
  //         rating: 4.2,
  //         ratingCount: 80,
  //         price: 24.99,
  //         description: 'Course 4 description',
  //         tree: false,
  //         totalLecture: 6,
  //         totalStudent: 200,
  //         totalTimeVideo: 60,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         updatedAt: Timestamp.fromDate(new Date()),
  //       },
  //     ],
  //     // ...other course objects
  //   },
  // ];

  return (
    <Tabs className="rounded-2xl p-3 shadow-border-full" value="ReactJs">
      <TabsHeader className="bg-gray-200">
        {!isFetching &&
          data.map(({ label, value }: any) => (
            <Tab key={value} value={value}>
              <span className="font-bold text-darkLight">{label}</span>
            </Tab>
          ))}
      </TabsHeader>
      <TabsBody>
        {isFetching && <LoadingLocal />}
        {!isFetching &&
          data.map(({ value, courses }: any) => {
            console.log(courses.map((item: any) => item));

            return (
              <TabPanel className="px-1 py-3 pt-8" key={value} value={value}>
                <div className="flex justify-between space-x-3">
                  {courses.map((item: any, index: any) => (
                    <Course key={index} data={item} />
                  ))}
                </div>
                <div className="pt-6">
                  <Link to={`/course/${value}`} className="text-center">
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
