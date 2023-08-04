import { useGetCourseByIdQuery } from 'features/Course/course.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import HeaderLecture from './components/HeaderLecture/HeaderLecture';
import { useParams } from 'react-router-dom';
import { useGetAllLectureQuery, useGetLectureByIdQuery } from 'features/Course/lecture.service';
import VideosComponent from 'components/Videos';
import ContentCourses from 'components/ContentCourses';

const Lectures = () => {
  const { idLeature, nameCourse } = useParams();
  const idCourse = useSelector((state: RootState) => state.courseState.idCourse);
  const [lectureData, setLectureData] = useState<any>(null);
  const course = useGetCourseByIdQuery(idCourse);
  const lectures = useGetAllLectureQuery(idCourse);
  const { data, isFetching } = useGetLectureByIdQuery(idLeature as string);

  useEffect(() => {
    document.title = course?.data?.title;
    setLectureData(data);
  }, [course?.isFetching, isFetching, idLeature]);
  return (
    <div className="">
      {!course.isFetching && (
        <HeaderLecture
          data={{ title: course?.data?.title, totalLecture: course?.data?.totalLecture }}
        />
      )}
      <main className="mt-[70px] flex">
        <section className="max-h-[95vh] w-3/4 overflow-y-scroll">
          <VideosComponent data={{ source: lectureData?.source, thumb: course?.data?.thumb }} />
          <div className="">
            <h1 className="px-5 py-2 text-2xl font-bold">{lectureData?.name}</h1>
          </div>
        </section>
        <section className="max-h-[95vh] w-1/4 overflow-y-scroll">
          <h1 className="px-5 py-2 text-xl font-bold text-darkLight">Nội dung khóa học</h1>
          <ContentCourses
            idLectureCurrrent={idLeature}
            nameCourse={nameCourse}
            enroll
            props={lectures}
          />
        </section>
      </main>
    </div>
  );
};

export default Lectures;
