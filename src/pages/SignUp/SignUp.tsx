import { useEffect, useState } from 'react';
import background from 'assets/bglogin.png';
import className from 'classnames/bind';
import styles from './SignUp.module.css';
import Button from 'components/Button';
import Loading from 'components/Loading';
import logo from 'assets/logo/logo.svg';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, provider } from 'firebase.jsx';
import { useAddUserMutation } from 'features/Home/home.service';
import IonIcon from '@reacticons/ionicons';
const cx = className.bind(styles);
interface SignUp {
  name: string;
  email: string;
  password: string;
  repassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [checkSignUp, setCheckSignUp] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Đăng ký'; // Thay đổi tiêu đề tại đây
  }, []);

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
    onSubmit: (value: SignUp) => {
      setCheckSignUp(true);
      createUserWithEmailAndPassword(auth, value.email, value.password)
        .then(async (userCredential) => {
          const { uid, email } = userCredential.user;
          const userInfo = {
            uid,
            displayName: value.name,
            email,
            photoURL:
              'https://firebasestorage.googleapis.com/v0/b/hdcourse-10020.appspot.com/o/courses%2FavtDefault.jpg?alt=media&token=f8fcab19-4e95-40bf-a2df-71014acafa51',
          };
          await addUser({ data: userInfo, idUser: uid });
          await updateProfile(userCredential.user, userInfo);
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          navigate('/');
        })
        .catch((error) => {
          // Xử lý lỗi khi đăng ký không thành công
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
  });

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setCheckSignUp(true);
  //   createUserWithEmailAndPassword(auth, formData.email, formData.password)
  //     .then(async (userCredential) => {
  //       const { uid, email } = userCredential.user;
  //       const userInfo = {
  //         uid,
  //         displayName: formData.name,
  //         email,
  //         photoURL:
  //           'https://firebasestorage.googleapis.com/v0/b/hdcourse-10020.appspot.com/o/courses%2FavtDefault.jpg?alt=media&token=f8fcab19-4e95-40bf-a2df-71014acafa51',
  //       };
  //       await addUser({ data: userInfo, idUser: uid });
  //       await updateProfile(userCredential.user, userInfo);
  //       localStorage.setItem('userInfo', JSON.stringify(userInfo));
  //       navigate('/');
  //     })
  //     .catch((error) => {
  //       // Xử lý lỗi khi đăng ký không thành công
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };
  const handleSignUpGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // The signed-in user info.
        const { uid, displayName, email, photoURL } = result.user;
        const userInfo = { uid, displayName, email, photoURL };
        await addUser({ data: userInfo, idUser: uid });
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="">
      {checkSignUp && <Loading>Đang xử lí...</Loading>}
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
          <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-orange-200 to-orange-500 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
          <form onSubmit={formik.handleSubmit}>
            <div className="relative bg-white px-4 py-6 shadow-lg sm:rounded-3xl sm:px-10 sm:py-12">
              <div className="mx-auto max-w-sm">
                <div>
                  <h1 className="text-center text-2xl font-bold ">Đăng ký</h1>
                </div>
                <div className="w-96 divide-y divide-gray-200 sm:px-8">
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
                          } ${
                            isSubmitted && formik.errors.name && 'focus:outline-red-500'
                          } text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0`}
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
                          } ${
                            isSubmitted && formik.errors.email && 'focus:outline-red-500'
                          } text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0`}
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
                          } ${
                            isSubmitted && formik.errors.password && 'focus:outline-red-500'
                          } text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0`}
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
                          } ${
                            isSubmitted && formik.errors.repassword && 'focus:outline-red-500'
                          } text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0`}
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
                        onClick={handleSignUpGoogle}
                        className="rounded-lg border-2 border-darkLight p-2 pb-0"
                      >
                        <IonIcon name="logo-google" className="text-2xl" />
                      </li>
                      <li className="rounded-lg border-2 border-darkLight p-2 pb-0">
                        <IonIcon name="logo-github" className="text-2xl" />
                      </li>
                    </ul>
                    <p className="text-center">
                      Bạn có tài khoản?{' '}
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
