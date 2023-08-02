import { useGetCourseByIdQuery } from 'features/Course/course.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import HeaderLecture from './components/HeaderLecture/HeaderLecture';
import { useParams } from 'react-router-dom';
import { useGetLectureByIdQuery } from 'features/Course/lecture.service';

const Lectures = () => {
  const { idLecture } = useParams();
  const idCourse = useSelector((state: RootState) => state.courseState.idCourse);
  const course = useGetCourseByIdQuery(idCourse);
  const lecture = useGetLectureByIdQuery(idLecture as string);
  console.log();

  useEffect(() => {
    document.title = course?.data?.title;
  }, [course?.isFetching]);
  return (
    <div className="">
      {!course.isFetching && (
        <HeaderLecture
          data={{ title: course?.data?.title, totalLecture: course?.data?.totalLecture }}
        />
      )}
      <div>Khóa học</div>
    </div>
  );
};

export default Lectures;
