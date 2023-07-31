import { useEffect, useState } from 'react';
import background from 'assets/bglogin.png';
import Button from 'components/Button';
import Loading from 'components/Loading';
import logo from 'assets/logo/logo.svg';
import sendEmail from 'assets/sendemail.gif';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUp, useSignInWithGoogle, useResetPassword } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import IonIcon from '@reacticons/ionicons';
import { RootState } from 'stores/store';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const { resetPassword, isPending, isSuccess, error } = useResetPassword();

  useEffect(() => {
    document.title = 'Quên mật khẩu';
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email không được bỏ trống')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không đúng'),
    }),
    onSubmit: async (value, { resetForm }) => {
      resetPassword(value.email, 'http://localhost:3000/login');
      // resetForm();
    },
  });

  return (
    <div className="">
      {isPending && <Loading>Đang xử lí...</Loading>}
      <div className="bg">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-darkLight">
          <img className="fixed bottom-0 left-0 right-0 top-0" src={background} alt="" />
        </div>
      </div>
      <Link to="/">
        <div className="absolute z-10 m-10 flex space-x-4 text-2xl font-semibold text-org">
          <img src={logo} className="w-7" alt="logo" />
          <p>
            HD<span>Course</span>
          </p>
        </div>
      </Link>
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-5 sm:py-8">
        <div className="relative py-3 sm:mx-auto sm:my-20 sm:max-w-xl">
          <div className="fixed bottom-0 left-0 right-0 top-0 bg-black opacity-30"></div>
          {!isSuccess ? (
            <>
              <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-orange-200 to-orange-500 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
              <form onSubmit={formik.handleSubmit}>
                <div className="relative bg-white px-4 py-6 shadow-lg sm:rounded-3xl sm:px-10 sm:py-12">
                  <div className="mx-auto max-w-sm">
                    <div className="text-center">
                      <h1 className="text-center text-2xl font-bold ">Quên mật khẩu</h1>
                      <p className="text-sm text-red-500">
                        {error === 'auth/user-not-found' && 'Email chưa được đăng ký'}
                      </p>
                    </div>
                    <div className="w-96 divide-y divide-gray-200 sm:px-8">
                      <div
                        className={`space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7`}
                      >
                        <div className="space-y-4">
                          <div className="relative">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              className={`peer h-10 w-full rounded-full border-2 ${
                                isSubmitted && formik.errors.email && 'border-red-500'
                              }  focus:outline-slate-500 border-gray-300 text-gray-900 placeholder-transparent focus:border-gray-500 focus:ring-0`}
                              value={formik.values.email}
                              onChange={formik.handleChange}
                            />
                            <label
                              htmlFor="email"
                              className={`peer-placeholder-shown:text-gray-440 absolute left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
                                formik.values.email !== '' ? '-top-3' : 'top-[0.6rem]'
                              }`}
                            >
                              <IonIcon name="person" className="pe-2 text-sm" />
                              Email
                            </label>
                            {isSubmitted && formik.errors.email && (
                              <small className="ps-3 text-[12px] text-red-600">
                                {formik.errors.email}
                              </small>
                            )}
                          </div>
                        </div>

                        <div onClick={() => setIsSubmitted(true)} className="relative">
                          <Button primary rounded_full width_full>
                            Đặt lại mật khẩu
                          </Button>
                        </div>
                        <p className="text-center">
                          Bạn chưa tài khoản?
                          <Link className="text-org" to="/signup">
                            Đăng ký
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="relative bg-white px-4 py-6 shadow-lg sm:rounded-3xl sm:px-32 sm:py-10">
              <div className="mx-auto max-w-sm text-center">
                <img className="w-72" src={sendEmail} alt="" />
                <div className="text-lg font-semibold">
                  Đã gửi email đặt lại mật khẩu
                </div>
                <div className="text-lg font-semibold">Vui lòng kiểm tra trong hộp thư</div>
                <span className="cursor-pointer text-sm text-org underline">
                  Không nhận được thư?
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
