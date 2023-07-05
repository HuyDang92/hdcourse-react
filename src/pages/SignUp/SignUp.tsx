import { useEffect, useState } from 'react';
import background from 'assets/bglogin.png';
import className from 'classnames/bind';
import styles from './SignUp.module.css';
import Button from 'components/Button';
import Loading from 'components/Loading';
import logo from 'assets/logo/logo.svg';
import { useNavigate, Link } from 'react-router-dom';
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
const initiaState: SignUp = {
  name: '',
  email: '',
  password: '',
  repassword: '',
};
const SignUp = () => {
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();
  const [formData, setForm] = useState<SignUp>(initiaState);
  const [checkSignUp, setCheckSignUp] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Đăng ký'; // Thay đổi tiêu đề tại đây
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckSignUp(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userCredential) => {
        const { uid, email } = userCredential.user;
        const userInfo = {
          uid,
          displayName: formData.name,
          email,
          photoURL:
            'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1688539006~exp=1688539606~hmac=e9521db982174d32a66a72f5c1a4565a4b0c702dca019e87e3f56e989b27206b',
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
  };
  const handleLoginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const { uid, displayName, email, photoURL } = result.user;
        const userInfo = { uid, displayName, email, photoURL };
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
          <form onSubmit={handleSubmit}>
            <div className="relative bg-white px-4 py-6 shadow-lg sm:rounded-3xl sm:px-10 sm:py-12">
              <div className="mx-auto max-w-sm">
                <div>
                  <h1 className="text-center text-2xl font-bold ">Đăng ký</h1>
                </div>
                <div className="w-96 divide-y divide-gray-200 sm:px-8">
                  <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="peer h-10 w-full rounded-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0"
                          value={formData.name}
                          onChange={(event) =>
                            setForm((prev) => ({ ...prev, name: event.target.value }))
                          }
                        />
                        <label
                          htmlFor="name"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
                            formData.name !== '' ? '-top-3' : 'top-[0.6rem]'
                          }`}
                        >
                          <IonIcon name="person" className="pe-2 text-sm" />
                          Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="peer h-10 w-full rounded-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0"
                          value={formData.email}
                          onChange={(event) =>
                            setForm((prev) => ({ ...prev, email: event.target.value }))
                          }
                        />
                        <label
                          htmlFor="email"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
                            formData.email !== '' ? '-top-3' : 'top-[0.6rem]'
                          }`}
                        >
                          <IonIcon name="person" className="pe-2 text-sm" />
                          Email
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="password"
                          name="password"
                          type="password"
                          className="peer h-10 w-full rounded-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0"
                          value={formData.password}
                          onChange={(event) =>
                            setForm((prev) => ({ ...prev, password: event.target.value }))
                          }
                        />
                        <label
                          htmlFor="password"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
                            formData.password !== '' ? '-top-3' : 'top-[0.6rem]'
                          }`}
                        >
                          <IonIcon name="lock-closed" className="pe-2 text-sm" />
                          Mật khẩu
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="repassword"
                          name="repassword"
                          type="password"
                          className="peer h-10 w-full rounded-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0"
                          value={formData.repassword}
                          onChange={(event) =>
                            setForm((prev) => ({ ...prev, repassword: event.target.value }))
                          }
                        />
                        <label
                          htmlFor="password"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-600 ${
                            formData.repassword !== '' ? '-top-3' : 'top-[0.6rem]'
                          }`}
                        >
                          <IonIcon name="lock-closed" className="pe-2 text-sm" />
                          Xác nhận mật khẩu
                        </label>
                      </div>
                    </div>

                    <div className="relative">
                      {/* <button className="rounded-md bg-blue-500 px-2 py-1 text-white">Submit</button> */}
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
                        onClick={handleLoginGoogle}
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
