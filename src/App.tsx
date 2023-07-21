import { useRoutes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from 'routes';
import NotFound from 'pages/NotFound';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { useUpdateActiveUser, useVerificationEmail } from 'hooks/useAuth';
import { auth } from 'firebase.jsx';
import { useState } from 'react';
import Button from 'components/Button';
import Loading from 'components/Loading';
import sendEmail from 'assets/sendemail.gif';
import logo from 'assets/logo/logo.svg';

const App = () => {
  const userCre = useSelector((state: RootState) => state.auth.currentUser);
  const isLoggin = useSelector((state: RootState) => state.auth.isLoggedIn);
  const { verificationEmail, isPending, error } = useVerificationEmail();
  const { updateActiveUserById } = useUpdateActiveUser();
  const [mess, setMess] = useState<any>(null);

  const handleSendEmail = async () => {
    const user = auth.currentUser;
    if (user) {
      const result = await verificationEmail(user, 'http://localhost:3000');
      userCre && (await updateActiveUserById(userCre?.uid));
      setMess(result);
    }
  };
  const routing = useRoutes([
    ...publicRoutes.map((route, index) => ({
      path: route.path,
      element: (
        <route.layout>
          <route.component />
        </route.layout>
      ),
    })),
    ...privateRoutes.map((route, index) => ({
      path: route.path,
      element: (
        <route.layout>
          <route.component />
        </route.layout>
      ),
    })),
    { path: '*', element: <NotFound /> },
  ]);

  return (
    <div className="App">
      {!userCre?.active && isLoggin ? (
        <div className="flex items-center justify-center">
          {isPending && <Loading />}
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
        <>{routing}</>
      )}
    </div>
  );
};

export default App;
