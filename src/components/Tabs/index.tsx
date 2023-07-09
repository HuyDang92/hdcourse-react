import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, TabsProps } from '@material-tailwind/react';
import Button from 'components/Button';
import Course from 'components/Course';
import { Link } from 'react-router-dom';

export default function Example() {
  const data = [
    {
      label: 'HTML',
      value: 'html',
      desc: [
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: `Html/css`,
          author: 'Huy Huy',
          rating: 4.9,
          ratingCount: 98,
          price: 189000,
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: `Html/css pro`,
          author: 'Huy Huy',
          rating: 4.9,
          ratingCount: 98,
          price: 189000,
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
          title: `Html/css pro`,
          author: 'Huy Huy',
          rating: 4.9,
          ratingCount: 98,
          price: 189000,
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',

          title: `Html/css pro`,
          author: 'Huy Huy',
          rating: 4.9,
          ratingCount: 98,
          price: 189000,
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

          title: `React`,
          author: 'Huy Huy V',
          rating: 4.9,
          ratingCount: 98,
          price: 199000,
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',

          title: `React Pro`,
          author: 'Huy Huy V',
          rating: 4.9,
          ratingCount: 98,
          price: 199000,
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',

          title: `React Pro`,
          author: 'Huy Huy V',
          rating: 4.9,
          ratingCount: 98,
          price: 199000,
        },
        {
          thumb:
            'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',

          title: `React Pro`,
          author: 'Huy Huy V',
          rating: 4.9,
          ratingCount: 98,
          price: 199000,
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
              {desc.map((item) => (
                <Course data={item} />
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
