import IonIcon from '@reacticons/ionicons';
import { Link, NavLink, useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody, Checkbox } from '@material-tailwind/react';
import { useGetAllLectureQuery } from 'features/Course/lecture.service';
import LoadingLocal from 'components/LoadingLocal';
import { ILecture } from 'types/Home';
import slugify from 'slugify';

interface IChildProps {
  props: any;
  enroll?: boolean;
  idLectureCurrrent?: any;
  nameCourse?: any;
  videoEnded?: any;
}
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
const ContentCourses: React.FC<IChildProps> = ({
  props,
  enroll,
  idLectureCurrrent,
  nameCourse,
  videoEnded,
}) => {
  const [openAccordions, setOpenAccordions] = useState<any>([]);

  useEffect(() => {
    if (props?.data) {
      setOpenAccordions(props?.data.map((item: any, index: number) => index === 0));
    }
  }, [props?.data]);

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prevState: any) =>
      prevState.map((item: any, i: number) => (i === index ? !item : item))
    );
  };

  return (
    <Fragment>
      {props.isFetching ? (
        <LoadingLocal />
      ) : (
        props?.data?.map((item: ILecture, index: number) => {
          const numberOfLectures = item?.lectures?.length;

          return (
            <Accordion
              animate={CUSTOM_ANIMATION}
              key={index}
              open={openAccordions[index]}
              className=""
            >
              <AccordionHeader
                onClick={() => toggleAccordion(index)}
                className={` ${
                  enroll ? 'border-b-2' : 'rounded-lg border-b-0'
                }  w-full bg-gray-200 p-3 px-1`}
              >
                <div className="flex w-full items-center justify-between text-darkLight">
                  <div className="">
                    <p className={`justify-start ps-3 ${enroll ? 'text-[17px]' : 'text-lg'}`}>
                      {item.name}
                    </p>
                    {enroll && (
                      <span className="ps-3 text-sm font-medium">0/{item.lectureCount}</span>
                    )}
                  </div>
                  <div className={`flex items-center space-x-5`}>
                    {!enroll && <p className="text-[15px]">{numberOfLectures} bài giảng</p>}
                    <IonIcon
                      name="chevron-down-outline"
                      className={`${openAccordions[index] === true && 'rotate-180'} transition-all`}
                    />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="p-0">
                <ul className="text-[1rem] font-medium text-gray-400">
                  {item.lectures.map((nav, index) => {
                    return enroll ? (
                      <Link key={index} to={`/course/${nameCourse}/lecture/${nav.id}`}>
                        <li
                          key={index}
                          className={`${
                            idLectureCurrrent === nav.id ? 'bg-[#F4F2DE]' : 'hover:bg-gray-100'
                          } my-1 flex cursor-pointer items-center justify-between rounded-lg p-4 text-darkLight transition-all `}
                        >
                          <div className="text-[15px]">
                            <span>{nav.name}</span>
                            <p className=" text-gray-500 flex items-center space-x-1">
                              <IonIcon name="time-outline" />
                              <span>{nav.durationTimeVideo}</span>
                            </p>
                          </div>
                          <IonIcon
                            name={`${videoEnded ? 'ellipse-outline' : 'checkmark-circle'}`}
                            className="ps-2 text-org"
                          />
                        </li>
                      </Link>
                    ) : (
                      <li
                        key={index}
                        className={`${
                          idLectureCurrrent === nav.id ? 'bg-[#F4F2DE]' : 'hover:bg-[#F4F2DE]'
                        } my-1 flex cursor-pointer items-center justify-between rounded-lg p-4 text-darkLight transition-all `}
                      >
                        <div className="flex items-center space-x-3 text-[15px]">
                          <IonIcon name="play-circle-outline" className="text-xl text-org" />
                          <span>{nav.name}</span>
                        </div>
                        <p className="text-gray-500">{nav.durationTimeVideo}</p>
                      </li>
                    );
                  })}
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
