import { useEffect, useState } from 'react';
import background from 'assets/bglogin.png';
import Button from 'components/Button';
import Loading from 'components/Loading';
import logo from 'assets/logo/logo.svg';
import sendEmail from 'assets/sendemail.gif';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUp, useSignInWithGoogle } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import IonIcon from '@reacticons/ionicons';
import { RootState } from 'stores/store';
interface SignUp {
  name: string;
  email: string;
  password: string;
  repassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const { signup, isPending, verifyEmail, error } = useSignUp();
  const { signInGoogle, errorGG } = useSignInWithGoogle();

  useEffect(() => {
    document.title = 'Đăng ký';
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Tên không được bỏ trống').min(3, 'Tên ít nhất 4 ký tự'),
      email: Yup.string()
        .required('Email không được bỏ trống')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không đúng'),
      password: Yup.string()
        .required('Mật khẩu không được bỏ trống')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          'Tối thiểu 6 ký tự, ít nhất 1 chữ cái và 1 số'
        ),
      repassword: Yup.string()
        .required('Xác nhận mật khẩu không được bỏ trống')
        .oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp'),
    }),
    onSubmit: async (value: SignUp, { resetForm }) => {
      await signup(value.email, value.password, value.name);
      // resetForm();
    },
  });

  const handleLogInGoogle = async () => {
    await signInGoogle();
  };

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
        <div className="relative mx-auto max-w-[22rem] py-3 md:my-20 md:max-w-xl">
          <div className="fixed bottom-0 left-0 right-0 top-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 -rotate-6 skew-y-0 transform rounded-3xl bg-gradient-to-r from-org to-orange-200 shadow-lg"></div>
          {!verifyEmail ? (
            <form onSubmit={formik.handleSubmit}>
              <div className="relative bg-white px-5 py-6 shadow-lg rounded-3xl sm:px-10 sm:py-12">
                <div className="mx-auto max-w-sm">
                  <div className="text-center">
                    <h1 className="text-center text-2xl font-bold ">Đăng ký</h1>
                    {error === 'auth/email-already-in-use' && (
                      <small className="text-[13px] text-red-600">Email đã được đăng ký</small>
                    )}
                  </div>
                  <div className="md:w-96 divide-y divide-gray-200 sm:px-8">
                    <div
                      className={`space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7`}
                    >
                      <div className="space-y-4">
                        <div className="relative">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className={`peer h-10 w-full rounded-full border-2 ${
                              isSubmitted && formik.errors.name && 'border-red-500'
                            }  focus:outline-slate-500 border-gray-300 px-3 text-gray-900 placeholder-transparent focus:border-gray-500 focus:ring-0`}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                          />
                          <label
                            htmlFor="name"
                            className={`peer-placeholder-shown:text-gray-440 absolute left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
                              formik.values.name !== '' ? '-top-3' : 'top-[0.6rem]'
                            }`}
                          >
                            <IonIcon name="person" className="pe-2 text-sm" />
                            Name
                          </label>
                          {isSubmitted && formik.errors.name && (
                            <small className="ps-3 text-[12px] text-red-600">
                              {formik.errors.name}
                            </small>
                          )}
                        </div>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className={`peer h-10 w-full rounded-full border-2 ${
                              isSubmitted && formik.errors.email && 'border-red-500'
                            }  focus:outline-slate-500 border-gray-300 px-3 text-gray-900 placeholder-transparent focus:border-gray-500 focus:ring-0`}
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
                        <div className="relative">
                          <input
                            autoComplete="off"
                            id="password"
                            name="password"
                            type="password"
                            className={`peer h-10 w-full rounded-full border-2 ${
                              isSubmitted && formik.errors.password && 'border-red-500'
                            }  focus:outline-slate-500 border-gray-300 px-3 text-gray-900 placeholder-transparent focus:border-gray-500 focus:ring-0`}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                          />
                          <label
                            htmlFor="password"
                            className={`peer-placeholder-shown:text-gray-440 absolute left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
                              formik.values.password !== '' ? '-top-3' : 'top-[0.6rem]'
                            }`}
                          >
                            <IonIcon name="lock-closed" className="pe-2 text-sm" />
                            Mật khẩu
                          </label>
                          {isSubmitted && formik.errors.password && (
                            <small className="ps-3 text-[12px] text-red-600">
                              {formik.errors.password}
                            </small>
                          )}
                        </div>
                        <div className="relative">
                          <input
                            autoComplete="off"
                            id="repassword"
                            name="repassword"
                            type="password"
                            className={`peer h-10 w-full rounded-full border-2 ${
                              isSubmitted && formik.errors.repassword && 'border-red-500'
                            }  focus:outline-slate-500 border-gray-300 px-3 text-gray-900 placeholder-transparent focus:border-gray-500 focus:ring-0`}
                            value={formik.values.repassword}
                            onChange={formik.handleChange}
                          />
                          <label
                            htmlFor="password"
                            className={`peer-placeholder-shown:text-gray-440 absolute left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
                              formik.values.repassword !== '' ? '-top-3' : 'top-[0.6rem]'
                            }`}
                          >
                            <IonIcon name="lock-closed" className="pe-2 text-sm" />
                            Xác nhận mật khẩu
                          </label>
                          {isSubmitted && formik.errors.repassword && (
                            <small className="ps-3 text-[12px] text-red-600">
                              {formik.errors.repassword}
                            </small>
                          )}
                        </div>
                      </div>

                      <div onClick={() => setIsSubmitted(true)} className="relative">
                        <Button primary rounded_full width_full>
                          Đăng ký
                        </Button>
                      </div>
                      <h1 className="text-center text-gray-500">hoặc</h1>
                      <ul className="listIconFooter mt-5 flex justify-center space-x-2">
                        <li className="rounded-lg border-2 border-darkLight p-2 pb-0">
                          <IonIcon name="logo-facebook" className="text-2xl" />
                        </li>
                        <li
                          onClick={handleLogInGoogle}
                          className="rounded-lg border-2 border-darkLight p-2 pb-0"
                        >
                          <IonIcon name="logo-google" className="text-2xl" />
                        </li>
                        <li className="rounded-lg border-2 border-darkLight p-2 pb-0">
                          <IonIcon name="logo-github" className="text-2xl" />
                        </li>
                      </ul>
                      <p className="text-center">
                        Bạn có tài khoản?
                        <Link className="text-org" to="/login">
                          Đăng nhập
                        </Link>
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-400">
                    Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
                    <Link className="underline" to="/terms">
                      Điều khoản sử dụng
                    </Link>
                    của chúng tôi
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <div className="relative bg-white px-4 py-6 shadow-lg rounded-3xl sm:px-32 sm:py-10">
              <div className="mx-auto max-w-sm text-center">
                <img className="w-72" src={sendEmail} alt="" />
                <div className="text-lg font-semibold">Chúng tôi đã gửi email xác minh </div>
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

export default SignUp;
