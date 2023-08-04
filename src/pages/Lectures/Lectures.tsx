import { useGetCourseByIdQuery } from 'features/Course/course.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import HeaderLecture from './components/HeaderLecture/HeaderLecture';
import { useParams } from 'react-router-dom';
import { useGetAllLectureQuery, useGetLectureByIdQuery } from 'features/Course/lecture.service';
import VideosComponent from 'components/Videos';
import ContentCourses from 'components/ContentCourses';
import Button from 'components/Button';
import IonIcon from '@reacticons/ionicons';

const Lectures = () => {
  const { idLeature, nameCourse } = useParams();
  const idCourse = useSelector((state: RootState) => state.courseState.idCourse);
  const [lectureData, setLectureData] = useState<any>(null);
  const course = useGetCourseByIdQuery(idCourse);
  const lectures = useGetAllLectureQuery(idCourse);
  const { data, isFetching } = useGetLectureByIdQuery(idLeature as string);
  const [videoEnded, setVideoEnded] = useState(false);

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
        <section className="max-h-[84vh] w-3/4 overflow-y-scroll">
          <VideosComponent
            setVideoEnded={setVideoEnded}
            data={{ source: lectureData?.source, thumb: course?.data?.thumb }}
          />
          <div className="px-5 py-2 ">
            <h1 className="text-2xl font-bold">{lectureData?.name}</h1>
            <span>
              Cập nhật ngày{' '}
              {new Date(
                lectureData?.updatedAt?._seconds * 1000 +
                  lectureData?.updatedAt?._nanoseconds / 1000000
              ).toLocaleDateString()}
            </span>
          </div>
        </section>
        <section className="mb-10 max-h-[84vh] w-1/4 overflow-y-scroll">
          <h1 className=" px-5 py-2 text-xl font-bold  text-darkLight">Nội dung khóa học</h1>
          <ContentCourses
            idLectureCurrrent={idLeature}
            nameCourse={nameCourse}
            enroll
            videoEnded={videoEnded}
            props={lectures}
          />
        </section>
      </main>
      <footer className="fixed bottom-0 flex w-full justify-center bg-white p-1 shadow-border-full">
        <div className="flex items-center space-x-2">
          <IonIcon name="chevron-back-outline" className="text-3xl" />
          <button className="pe-4">Bài trước</button>
          <Button border rounded_full>
            Bài tiếp theo
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Lectures;
