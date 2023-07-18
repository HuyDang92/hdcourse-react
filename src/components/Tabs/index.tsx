import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, TabsProps } from '@material-tailwind/react';
import Button from 'components/Button';
import Course from 'components/Course';
import { Link } from 'react-router-dom';

export default function TabsComponent() {
  const data = [
    {
      label: 'HTML',
      value: 'html',
      desc: [
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: 'Course 1',
          author: 'Author 1',
          rating: 4.5,
          ratingCount: 100,
          price: 29.99,
          description: 'Course 1 description',
          tree: true,
          totalLecture: 10,
          totalStudent: 500,
          totalTimeVideo: 120,
          createdAt: new Date('2022-01-01'),
          updatedAt: new Date('2022-02-01'),
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: 'Course 2',
          author: 'Author 2',
          rating: 4.0,
          ratingCount: 50,
          price: 19.99,
          description: 'Course 2 description',
          tree: false,
          totalLecture: 8,
          totalStudent: 300,
          totalTimeVideo: 90,
          createdAt: new Date('2022-03-01'),
          updatedAt: new Date('2022-04-01'),
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: 'Course 3',
          author: 'Author 3',
          rating: 4.8,
          ratingCount: 200,
          price: 39.99,
          description: 'Course 3 description',
          tree: true,
          totalLecture: 12,
          totalStudent: 800,
          totalTimeVideo: 150,
          createdAt: new Date('2022-05-01'),
          updatedAt: new Date('2022-06-01'),
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: 'Course 4',
          author: 'Author 4',
          rating: 4.2,
          ratingCount: 80,
          price: 24.99,
          description: 'Course 4 description',
          tree: false,
          totalLecture: 6,
          totalStudent: 200,
          totalTimeVideo: 60,
          createdAt: new Date('2022-07-01'),
          updatedAt: new Date('2022-08-01'),
        },
      ],

      // ...other course objects
    },
    {
      label: 'React',
      value: 'react',
      desc: [
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: 'Course 1',
          author: 'Author 1',
          rating: 4.5,
          ratingCount: 100,
          price: 29.99,
          description: 'Course 1 description',
          tree: true,
          totalLecture: 10,
          totalStudent: 500,
          totalTimeVideo: 120,
          createdAt: new Date('2022-01-01'),
          updatedAt: new Date('2022-02-01'),
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: 'Course 2',
          author: 'Author 2',
          rating: 4.0,
          ratingCount: 50,
          price: 19.99,
          description: 'Course 2 description',
          tree: false,
          totalLecture: 8,
          totalStudent: 300,
          totalTimeVideo: 90,
          createdAt: new Date('2022-03-01'),
          updatedAt: new Date('2022-04-01'),
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: 'Course 3',
          author: 'Author 3',
          rating: 4.8,
          ratingCount: 200,
          price: 39.99,
          description: 'Course 3 description',
          tree: true,
          totalLecture: 12,
          totalStudent: 800,
          totalTimeVideo: 150,
          createdAt: new Date('2022-05-01'),
          updatedAt: new Date('2022-06-01'),
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: 'Course 4',
          author: 'Author 4',
          rating: 4.2,
          ratingCount: 80,
          price: 24.99,
          description: 'Course 4 description',
          tree: false,
          totalLecture: 6,
          totalStudent: 200,
          totalTimeVideo: 60,
          createdAt: new Date('2022-07-01'),
          updatedAt: new Date('2022-08-01'),
        },
      ],
      // ...other course objects
    },
  ];

  return (
    <Tabs className="rounded-2xl p-3 shadow-border-full" value="html">
      <TabsHeader className="bg-gray-200">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            <span className="font-bold text-darkLight">{label}</span>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel className="px-1 py-3 pt-8" key={value} value={value}>
            <div className="flex justify-between space-x-3">
              {desc.map((item, index) => (
                <Course key={index} data={item} />
              ))}
            </div>
            <div className="pt-6">
              <Link to="/" className="text-center">
                <Button rounded_md border>
                  Xem thêm
                </Button>
              </Link>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
