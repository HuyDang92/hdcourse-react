import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IonIcon from '@reacticons/ionicons';
import { RootState } from 'stores/store';
import { useNavigate } from 'react-router-dom';
import { useLazyGetInstructorByIdQuery } from 'features/Instructor/Instructor.service';
import LoadingLocal from 'components/LoadingLocal';
import Button from 'components/Button';

const Intructors = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const idIntructor = useSelector((state: RootState) => state.instructorState.idInstructor);
  const [getInstructor, result] = useLazyGetInstructorByIdQuery();

  useEffect(() => {
    if (idIntructor) {
      getInstructor(idIntructor);
    }
  }, [idIntructor]);
  useEffect(() => {
    if (result.isSuccess) {
      document.title = result.data.name;
    }
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, result.isSuccess]);

  return (
    <div className="mx-auto my-14 flex max-w-7xl">
      <div className="sticky top-10 w-1/4 pe-16">
        {result.isSuccess ? (
          <div className="space-y-4">
            <img src={result?.data?.avatar} alt="" className="h-60 w-60 rounded-full" />
            <Button width_full border>
              <a href="#" className="flex items-center justify-center space-x-3 font-semibold">
                <IonIcon name="link" />
                <span>Trang web</span>
              </a>
            </Button>
            <Button width_full border>
              <a href="#" className="flex items-center justify-center space-x-3 font-semibold">
                <IonIcon name="logo-facebook" />
                <span>Facebook</span>
              </a>
            </Button>
            <Button width_full border>
              <a href="#" className="flex items-center justify-center space-x-3 font-semibold">
                <IonIcon name="logo-youtube" />
                <span>Youtube</span>
              </a>
            </Button>
          </div>
        ) : (
          <LoadingLocal />
        )}
      </div>
      <div className="w-3/4">
        {result.isSuccess ? (
          <div className="space-y-8">
            <div className="">
              <h3 className="text-lg font-bold uppercase text-gray-400">Giảng viên</h3>
              <h1 className="text-4xl font-bold text-darkLight">{result?.data.name}</h1>
              <h3 className="text-xl font-bold text-darkLight">{result?.data.field}</h3>
            </div>
            <div className="flex items-center space-x-8">
              <p className="text-center">
                <h3 className="text-lg font-bold text-gray-400">Tổng học viên</h3>
                <span className="text-3xl font-bold text-darkLight">
                  {result?.data.totalStudents}
                </span>
              </p>
              <p className="text-center">
                <h3 className="text-lg font-bold text-gray-400">Đánh giá</h3>
                <span className="text-3xl font-bold text-darkLight">
                  {result?.data.reviewCount}
                </span>
              </p>
            </div>
            <div className="">
              <h3 className="text-lg font-bold uppercase text-darkLight">Giới thiệu</h3>
              <p className="text-lg font-medium text-darkLight">{result?.data.description}</p>
            </div>
            <div className="">
              <h3 className="text-lg font-bold uppercase text-darkLight">Các khóa học của tôi</h3>
            </div>
          </div>
        ) : (
          <LoadingLocal />
        )}
      </div>
    </div>
  );
};

export default Intructors;
