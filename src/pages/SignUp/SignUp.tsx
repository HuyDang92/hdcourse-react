import { useEffect, useState } from 'react';
import background from 'assets/bg.jpg';
import className from 'classnames/bind';
import styles from './SignUp.module.css';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import logo from 'assets/logo/logo.svg';

const cx = className.bind(styles);
interface SignUp {
  email: string;
  password: string;
  repassword: string;
}
const initiaState: SignUp = {
  email: '',
  password: '',
  repassword: '',
};
const SignUp = () => {
  useEffect(() => {
    document.title = 'Đăng ký'; // Thay đổi tiêu đề tại đây
  }, []);
  const [form, setForm] = useState<SignUp>(initiaState);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <div className="">
      <div className="bg">
        <img className="fixed bottom-0 left-0 right-0 top-0" src={background} alt="" />
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
        <div className="relative py-3 sm:mx-auto sm:max-w-xl">
          <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-orange-200 to-orange-500 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
          <form onSubmit={handleSubmit}>
            <div className="relative bg-white px-4 py-6 shadow-lg sm:rounded-3xl sm:px-16 sm:py-12">
              <div className="mx-auto max-w-md">
                <div>
                  <h1 className="text-center text-2xl font-semibold uppercase">Đăng ký</h1>
                </div>
                <div className="w-72 divide-y divide-gray-200">
                  <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="space-y-7">
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="peer h-10 w-full rounded-full text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0"
                          value={form.email}
                          onChange={(event) =>
                            setForm((prev) => ({ ...prev, email: event.target.value }))
                          }
                        />
                        <label
                          htmlFor="email"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-600 ${
                            form.email !== '' ? '-top-6' : 'top-2'
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
                          className="peer h-10 w-full rounded-full text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0"
                          value={form.password}
                          onChange={(event) =>
                            setForm((prev) => ({ ...prev, password: event.target.value }))
                          }
                        />
                        <label
                          htmlFor="password"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-600 ${
                            form.password !== '' ? '-top-6' : 'top-2'
                          }`}
                        >
                          <IonIcon name="person" className="pe-2 text-sm" />
                          Mật khẩu
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="repassword"
                          name="repassword"
                          type="password"
                          className="peer h-10 w-full rounded-full text-gray-900 placeholder-transparent focus:border-transparent focus:outline-slate-500 focus:ring-0"
                          value={form.repassword}
                          onChange={(event) =>
                            setForm((prev) => ({ ...prev, repassword: event.target.value }))
                          }
                        />
                        <label
                          htmlFor="password"
                          className={`peer-placeholder-shown:text-gray-440 absolute left-4 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-600 ${
                            form.repassword !== '' ? '-top-6' : 'top-2'
                          }`}
                        >
                          <IonIcon name="person" className="pe-2 text-sm" />
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
                      <li className="rounded-lg border-2 border-darkLight p-2 pb-0">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
