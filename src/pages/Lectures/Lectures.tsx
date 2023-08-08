import { useGetCourseByIdQuery, useGetRatingCouseQuery } from 'features/Course/course.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import HeaderLecture from './components/HeaderLecture/HeaderLecture';
import { useParams } from 'react-router-dom';
import {
  useAddCommentLectureMutation,
  useGetAllLectureQuery,
  useGetCommentLectureQuery,
  useGetLectureByIdQuery,
  useLearnedLectureMutation,
} from 'features/Course/lecture.service';
import VideosComponent from 'components/Videos';
import ContentCourses from 'components/ContentCourses';
import Button from 'components/Button';
import IonIcon from '@reacticons/ionicons';
import { Skeleton } from '@mui/material';
import ReviewCourse from 'pages/CourseOverView/components/ReviewCourse';

const Lectures = () => {
  const { idLeature, nameCourse } = useParams();
  const idCourse = useSelector((state: RootState) => state.courseState.idCourse);
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const userId = user?.uid || 'null';
  const lectureId = idLeature || 'null';

  const [comment, setComment] = useState<string>('');
  const [limit, setLimit] = useState<number>(5);
  const [lectureData, setLectureData] = useState<any>(null);
  const [totalLearned, setTotalLearned] = useState<number>(0);
  const [ratingCheck, setRatingCheck] = useState<boolean>(false);

  const course = useGetCourseByIdQuery(idCourse);
  const lectures = useGetAllLectureQuery(idCourse);
  const { data, isFetching } = useGetLectureByIdQuery(idLeature as string);
  const [videoEnded, setVideoEnded] = useState<string | null>(null);
  const [updateLearned] = useLearnedLectureMutation();
  const dataComment = useGetCommentLectureQuery({ idLecture: lectureId, limit });
  const [addComment, loading] = useAddCommentLectureMutation();

  useEffect(() => {
    if (videoEnded) {
      updateLearned({ idUser: userId, idCourse: idCourse, idLecture: videoEnded });
    }
  }, [videoEnded]);

  useEffect(() => {
    document.title = course?.data?.title;
    setLectureData(data);
  }, [course?.isFetching, isFetching, idLeature]);

  const handleComment = async (e: any) => {
    e.preventDefault();
    const data = {
      idUser: user?.uid,
      idLecture: idLeature,
      avatar: user?.photoURL,
      name: user?.displayName,
      comment: comment,
    };
    await addComment(data);
    setComment('');
  };

  return (
    <div className="">
      {!course.isFetching && (
        <HeaderLecture
          ratingCheck={ratingCheck}
          data={{
            title: course?.data?.title,
            totalLecture: course?.data?.totalLecture,
            totalLearned: totalLearned,
          }}
        />
      )}
      <main className="mt-[70px] flex">
        <section className="max-h-[84vh] w-3/4 overflow-y-scroll">
          <VideosComponent
            setVideoEnded={setVideoEnded}
            data={{ idLecture: idLeature, source: lectureData?.source, thumb: course?.data?.thumb }}
          />
          <div className="mb-10 px-5 py-2">
            <h1 className="text-2xl font-bold">
              {isFetching ? <Skeleton height={'3rem'} width={'60%'} /> : lectureData?.name}
            </h1>
            <span className="font-medium text-gray-500">
              {isFetching ? (
                <Skeleton height={'2rem'} width={'30%'} />
              ) : (
                <span className="font-medium ">
                  Cập nhật ngày{' '}
                  {new Date(
                    lectureData?.updatedAt?._seconds * 1000 +
                      lectureData?.updatedAt?._nanoseconds / 1000000
                  ).toLocaleDateString()}
                </span>
              )}
            </span>
            <div className="py-10">{lectureData?.description}</div>
            <div className="space-y-4 p-5">
              <span>{dataComment.isSuccess && dataComment?.data?.length} hỏi đáp</span>
              <form onSubmit={handleComment} className="flex items-center space-x-4">
                <img src={user?.photoURL} className="h-14 w-14 rounded-full object-cover" alt="" />
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Bạn có thắc mắc gì trong bài học này?"
                  className="w-full border-b-2 p-2 outline-none"
                />
              </form>

              {dataComment.isSuccess && dataComment?.data?.length > 0 ? (
                dataComment?.data?.map((item: any, index: any) => (
                  <ReviewCourse user={user} comment key={index} data={item} />
                ))
              ) : (
                <>
                  <h3 className="text-center text-2xl font-bold text-gray-300">
                    Chưa có bình luận
                  </h3>
                </>
              )}
            </div>
            {dataComment.isSuccess && dataComment?.data?.length > 5 && (
              <div onClick={() => setLimit((prev) => prev + 10)} className="py-3 text-center">
                <Button rounded_md border>
                  Xem thêm
                </Button>
              </div>
            )}
          </div>
        </section>
        <section className="mb-10 max-h-[84vh] w-1/4 overflow-y-scroll">
          <h1 className=" px-5 py-2 text-xl font-bold  text-darkLight">Nội dung khóa học</h1>
          <ContentCourses
            idLectureCurrrent={idLeature}
            nameCourse={nameCourse}
            enroll
            videoEnded={videoEnded}
            setTotalLearned={setTotalLearned}
            setRatingCheck={setRatingCheck}
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
