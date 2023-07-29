import IonIcon from '@reacticons/ionicons';
import { NavLink } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { useGetAllLectureQuery } from 'features/Course/lecture.service';
import LoadingLocal from 'components/LoadingLocal';
import { ILecture } from 'types/Home';

const section = [
  {
    name: 'Section 1',
    lectures: [
      { name: 'Overview', to: '/admin' },
      { name: 'Chi tiết', to: '/' },
    ],
  },
  {
    name: 'Section 2',
    lectures: [
      { name: 'Danh mục', to: '/admin/manager-category' },
      { name: 'Khóa học', to: '/admin/manager-course' },
      { name: 'Người dùng', to: '/admin/manager-user' },
      { name: 'Bài viết', to: '/admin/manager-blog' },
    ],
  },
  {
    name: 'Section 3',
    lectures: [
      { name: 'Danh mục', to: '/admin/manager-category' },
      { name: 'Khóa học', to: '/admin/manager-course' },
      { name: 'Người dùng', to: '/admin/manager-user' },
      { name: 'Bài viết', to: '/admin/manager-blog' },
    ],
  },
  {
    name: 'Section 4',
    lectures: [
      { name: 'Danh mục', to: '/admin/manager-category' },
      { name: 'Khóa học', to: '/admin/manager-course' },
      { name: 'Người dùng', to: '/admin/manager-user' },
      { name: 'Bài viết', to: '/admin/manager-blog' },
    ],
  },
];

interface IChildProps {
  props: any;
}
const ContentCourses: React.FC<IChildProps> = ({ props }) => {
  const { data, isFetching } = useGetAllLectureQuery(props.idCourse);

  const [openAccordions, setOpenAccordions] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setOpenAccordions(data.map((item: any, index: number) => index === 0));
    }
  }, [data]);

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prevState: any) =>
      prevState.map((item: any, i: number) => (i === index ? !item : false))
    );
  };

  return (
    <Fragment>
      {isFetching ? (
        <LoadingLocal />
      ) : (
        data?.map((item: ILecture, index: number) => {
          const numberOfLectures = item?.lectures?.length;

          return (
            <Accordion key={index} open={openAccordions[index] ?? false} className="">
              <AccordionHeader
                onClick={() => toggleAccordion(index)}
                className={`rounded-lg border-b-0 bg-gray-200 p-3`}
              >
                <div className="flex w-full items-center justify-between text-darkLight">
                  <div className="flex items-center">
                    <p className="justify-start px-3 text-lg">{item.name}</p>
                  </div>
                  <div className="flex items-center space-x-5">
                    <p className="text-[15px]">{numberOfLectures} bài giảng</p>
                    <IonIcon
                      name="chevron-down-outline"
                      className={`${openAccordions[index] === true && 'rotate-180'} transition-all`}
                    />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="ps-5">
                <ul className="text-[1rem] font-medium text-gray-400">
                  {item.lectures.map((nav, index) => (
                    <li
                      key={index}
                      className="my-1 flex items-center justify-between rounded-lg p-3 text-darkLight transition-all hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-3">
                        <IonIcon name="play-circle-outline" className="text-xl text-org" />
                        <span>{nav.name}</span>
                      </div>
                      <p className="text-gray-500">11:20</p>
                    </li>
                  ))}
                </ul>
              </AccordionBody>
            </Accordion>
          );
        })
      )}
    </Fragment>
  );
};
export default ContentCourses;
