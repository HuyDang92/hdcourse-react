import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import LoadingLocal from 'components/LoadingLocal';
import { ILecture } from 'types/Home';
import { useGetOneUserCourseQuery } from 'features/Auth/auth.service';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';

interface IChildProps {
  props: any;
  enroll?: boolean;
  idLectureCurrrent?: any;
  nameCourse?: any;
  videoEnded?: any;
  setTotalLearned?: any;
  setRatingCheck?: any;
}
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
const ContentCourses: React.FC<IChildProps> = ({
  props,
  enroll,
  idLectureCurrrent,
  setTotalLearned,
  nameCourse,
  setRatingCheck,
  videoEnded,
}) => {
  const [openAccordions, setOpenAccordions] = useState<any>([]);
  const [completedLectures, setCompletedLectures] = useState<any[]>([]);
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const idCourse = useSelector((state: RootState) => state.courseState.idCourse);
  const userId = user?.uid || 'null';
  const userCourse = useGetOneUserCourseQuery({ idUser: userId, idCourse: idCourse });

  useEffect(() => {
    if (props?.data) {
      setOpenAccordions(
        props?.data?.map((item: any, index: number) => {
          return index === 0;
        })
      );
    }
  }, [props?.data]);

  useEffect(() => {
    if (userCourse && enroll) {
      const sum = userCourse?.data?.lectureLearned.length;
      const rated = userCourse?.data?.ratingCheck;
      setTotalLearned(sum);
      setRatingCheck(rated);
    }
  }, [userCourse.data]);

  useEffect(() => {
    if (videoEnded && enroll) {
      setCompletedLectures((prevCompletedLectures) => {
        if (!prevCompletedLectures.includes(videoEnded)) {
          // Nếu videoEnded chưa có trong mảng, thêm nó vào mảng
          return [...prevCompletedLectures, videoEnded];
        }
        return prevCompletedLectures; // Nếu đã có, trả về mảng không thay đổi
      });
      setTotalLearned((prevTotal: any) => prevTotal + 1);
    }
  }, [videoEnded]);

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prevState: any) =>
      prevState?.map((item: any, i: number) => (i === index ? !item : item))
    );
  };

  return (
    <Fragment>
      {props.isFetching ? (
        <LoadingLocal />
      ) : (
        props?.data?.map((item: ILecture, index: number) => {
          const numberOfLectures = item?.lectures?.length;
          let totalLearnedSection = 0;
          if (enroll) {
            totalLearnedSection =
              (userCourse?.data &&
                item?.lectures?.reduce((count, lecture) => {
                  return userCourse?.data?.lectureLearned?.includes(lecture?.id)
                    ? count + 1
                    : count;
                }, 0)) ||
              0;
            item?.lectures?.forEach((lecture) => {
              if (completedLectures?.includes(lecture?.id)) {
                totalLearnedSection++;
              }
            });
          }
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
                      <span className="ps-3 text-sm font-medium">
                        {totalLearnedSection}/{item.lectureCount}
                      </span>
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
                  {item?.lectures?.map((lecture, index) => {
                    return enroll ? (
                      <Link key={index} to={`/course/${nameCourse}/lecture/${lecture.id}`}>
                        <li
                          key={index}
                          className={`${
                            idLectureCurrrent === lecture.id ? 'bg-[#F4F2DE]' : 'hover:bg-gray-100'
                          } my-1 flex cursor-pointer items-center justify-between rounded-lg p-4 pe-0 text-darkLight transition-all `}
                        >
                          <div className="w-[90%] text-[15px]">
                            <span>{lecture.name}</span>
                            <p className=" flex items-center space-x-1 text-gray-500">
                              <IonIcon name="time-outline" />
                              <span>{lecture.durationTimeVideo}</span>
                            </p>
                          </div>
                          {!userCourse.isFetching && (
                            <div className="w-[10%]">
                              {userCourse?.data?.lectureLearned.includes(lecture.id) ? (
                                <IonIcon name="checkmark-circle" className="ps-2 text-org" />
                              ) : (
                                <IonIcon
                                  name={
                                    completedLectures.includes(lecture.id)
                                      ? 'checkmark-circle'
                                      : 'ellipse-outline'
                                  }
                                  className="ps-2 text-org"
                                />
                              )}
                            </div>
                          )}
                        </li>
                      </Link>
                    ) : (
                      <li
                        key={index}
                        className={`${
                          idLectureCurrrent === lecture.id ? 'bg-[#F4F2DE]' : 'hover:bg-[#F4F2DE]'
                        } my-1 flex cursor-pointer items-center justify-between rounded-lg p-4 text-darkLight transition-all `}
                      >
                        <div className="flex items-center space-x-3 text-[15px]">
                          <IonIcon name="play-circle-outline" className="text-xl text-org" />
                          <span>{lecture.name}</span>
                        </div>
                        <p className="text-gray-500">{lecture.durationTimeVideo}</p>
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
