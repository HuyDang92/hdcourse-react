import { useEffect, useState } from 'react';
import background from 'assets/bglogin.png';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import logo from 'assets/logo/logo.svg';
import Loading from 'components/Loading';
import { useNavigate } from 'react-router-dom';
import {
  useSignInWithGoogle,
  useSignIn,
  useVerificationEmail,
  useUpdateActiveUser,
} from 'hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Timestamp } from 'firebase/firestore';
import sendEmail from 'assets/sendemail.gif';

interface Login {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [veryfy, setVeryfy] = useState<boolean | undefined>(undefined);
  const [user, setUser] = useState<any | undefined>(undefined);
  const { verificationEmail, isLoading } = useVerificationEmail();
  const { updateActiveUserById } = useUpdateActiveUser();
  const [mess, setMess] = useState<any>(null);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const { signInGoogle, errorGG } = useSignInWithGoogle();
  const { signin, isPending, error } = useSignIn();

  useEffect(() => {
    document.title = 'Đăng nhập';
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email không được bỏ trống')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không đúng'),
      password: Yup.string().required('Mật khẩu không được bỏ trống'),
    }),
    onSubmit: async (value: Login) => {
      const userCre = await signin(value.email, value.password);
      if (userCre?.emailVerified === false) {
        setUser(userCre);
        setVeryfy(false);
      } else {
        setVeryfy(true);
      }
    },
  });

  const handleLogInGoogle = async () => {
    await signInGoogle();
  };

  const handleSendEmail = async () => {
    if (user) {
      const result = await verificationEmail(user, 'http://localhost:3000');
      await updateActiveUserById(user?.uid);
      console.log(result);
      setMess(result);
    }
  };
  return veryfy === false ? (
    <div className="flex items-center justify-center">
      {isLoading && <Loading />}
      <div className="absolute top-0 m-10 flex space-x-4 text-2xl font-semibold text-org">
        <img src={logo} className="w-7" alt="logo" />
        <p>
          HD<span>Course</span>
        </p>
      </div>
      <div className="space-y-5 text-center">
        {mess === null ? (
          <div className=" space-y-4 p-[15rem]">
            <span className="text-xl font-bold">
              Vui lòng xác minh email trước khi sử dụng dịch vụ của chúng tôi
            </span>
            <br />
            <span className="cursor-pointer text-org underline">Không nhận được email?</span>
            <div onClick={handleSendEmail}>
              <Button rounded_md primary>
                Gửi lại email xác minh
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative mt-24 bg-white px-4 py-6 shadow-border-full sm:rounded-3xl sm:px-32 sm:py-10">
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
  ) : (
    <div className="">
      {isPending && <Loading>Đang xử lí...</Loading>}
      <div className="bg">
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-darkLight">
          <img className="fixed bottom-0 left-0 right-0 top-0" src={background} alt="" />
        </div>
      </div>
      <Link to="/">
        <h1 className="absolute z-10 m-10 flex space-x-4 text-2xl font-semibold text-org">
          <img src={logo} className="w-7" alt="logo" />
          <p>
            HD<span>Course</span>
          </p>
        </h1>
      </Link>
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-5 sm:py-8">
        <div className="relative py-3 sm:mx-auto sm:my-20 sm:max-w-xl">
          <div className="fixed bottom-0 left-0 right-0 top-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-orange-500 to-orange-200 shadow-lg sm:rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
          <form onSubmit={formik.handleSubmit} className="">
            <div className="relative bg-white  shadow-lg sm:rounded-3xl sm:px-10 sm:py-12">
              <div className="mx-auto max-w-sm ">
                <div className="text-center">
                  <h1 className="text-center text-2xl font-bold">Đăng nhập</h1>
                  {error === 'email-not-verified' && (
                    <small className="text-[13px] text-red-600">Email chưa được đăng ký</small>
                  )}
                  {error === 'auth/wrong-password' && (
                    <small className="text-[13px] text-red-600">Mật khẩu không chính xác</small>
                  )}
                  {error === 'auth/user-not-found' && (
                    <small className="text-[13px] text-red-600">Tài khoản chưa được đăng ký</small>
                  )}
                </div>
                <div className="w-96 divide-y divide-gray-200 sm:px-8">
                  <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className={`${
                            isSubmitted && formik.errors.email && 'border-red-500'
                          }  focus:outline-slate-500 peer h-10 w-full rounded-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-gray-500 focus:ring-0`}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        <label
                          htmlFor="email"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 rounded-full bg-white px-2 text-sm text-gray-600  transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
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
                          className={`${
                            isSubmitted && formik.errors.password && 'border-red-500'
                          }  focus:outline-slate-500 peer h-10 w-full rounded-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-gray-500 focus:ring-0`}
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                        <label
                          htmlFor="password"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 rounded-full bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
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
                    </div>
                    <div className="relative flex justify-between">
                      <div className="">
                        <input
                          id="rememberCheckbox"
                          type="checkbox"
                          className="h-4 w-4 rounded bg-gray-100 text-blue-600 shadow-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label
                          htmlFor="rememberCheckbox"
                          className="ml-2 text-sm dark:text-gray-300"
                        >
                          Nhớ mật khẩu
                        </label>
                      </div>
                      <div className="">
                        <Link className="text-sm underline" to="/forgotPassword">
                          Quên mật khẩu?
                        </Link>
                      </div>
                    </div>
                    <div onClick={() => setIsSubmitted(true)} className="relative">
                      <Button primary rounded_full width_full>
                        Đăng nhập
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
                    <p className="text-center text-lg">
                      Bạn chưa có tài khoản?{' '}
                      <Link className="text-org" to="/signup">
                        Đăng ký
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
        </div>
      </div>
    </div>
  );
};

export default Login;
