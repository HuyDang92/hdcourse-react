// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

import logo from 'assets/logo/logo-fpt.png';

function NotFound() {
  // const navigate = useNavigate();

  return (
    <>
      {/* <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
                <div className="py-20 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6 -translate-y-20">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-8 text-6xl tracking-tight font-extrabold  text-orange-400 dark:text-primary-500">404</h1>
                        <p className="mb-2 text-2xl tracking-tight font-bold text-gray-900  dark:text-white">Trang bạn truy cập không tồn tại.</p>
                        <p className="mb-4 text-md font-light text-gray-500 dark:text-gray-400">Vui lòng kiểm tra lại.</p>
                        <Link to={"/"} className="inline-flex bg-gradient-to-br from-blue-400 to-cyan-400 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                            Quay lại trang chủ 
                        </Link>
                    </div>
                </div>
            </section> */}
      <section className="fixed mx-auto h-[100vh] bg-black px-10 pt-5">
        <img src={logo} alt="" className="mx-auto w-40" />
        <h1 class="my-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent">
          Hiện website chưa hỗ trợ cho phiên bản cho màn hình tablet. Vui lòng
          truy cập trên máy tính có trải nghiệm tốt nhất.
          <br />
        </h1>
        <h1 className="my-6 text-center text-3xl">😊😊😊</h1>
        <iframe
          className="mx-auto rounded-2xl"
          width="700"
          height="400"
          src="https://www.youtube.com/embed/yI3dEh0AvxE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default NotFound;
