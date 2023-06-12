import { Link } from 'react-router-dom';
import logoFPT from 'assets/logo/logo-fpt.png';

const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-white/95 sticky top-0 z-[70] max-h-20 w-full  border-b bg-white/80 py-3 backdrop-blur transition-all duration-300 lg:z-50">
      <nav className="container mx-auto flex w-full basis-full flex-wrap items-center px-4 sm:px-6 lg:px-10">
        <Link className=" mr-auto flex-none text-slate-900" to="/">
          <img
            className="inline-block h-14"
            src={logoFPT}
            alt="FPT Polytechnic"
          />
        </Link>
        <div>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2.5 align-middle text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white "
              data-hs-collapse="#docs-navbar"
              aria-controls="docs-navbar"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden h-4 w-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
              <svg
                className="hs-collapse-open:block hidden h-4 w-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </button>
          </div>
          <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-rounded scrollbar-w-1 fixed bottom-0 left-0 top-0 z-[50] h-full min-h-screen w-56 -translate-x-full bg-white p-4  transition-transform">
            <h5
              id="drawer-navigation-label"
              className="text-base font-medium  uppercase text-gray-500"
            >
              Menu
            </h5>
            <button
              type="button"
              className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="overflow-y-auto py-4">
              <div className="flex flex-col gap-2 rounded-lg bg-white text-gray-600 ">
                <Link
                  type="button"
                  className="relative inline-flex w-full items-center rounded-md border-gray-200 px-2 py-2  text-[0.9rem]  text-gray-500 hover:bg-sky-500 hover:text-white focus:text-blue-500 focus:ring-blue-500 "
                  to="/login"
                >
                  Đăng nhập
                </Link>
                <Link
                  type="button"
                  className="relative inline-flex w-full items-center rounded-md border-gray-200 px-2 py-2  text-[0.9rem]  text-gray-500 hover:bg-sky-500 hover:text-white focus:text-blue-500 focus:ring-blue-500 "
                  to="/"
                >
                  Trang chủ
                </Link>
                <Link
                  type="button"
                  className="relative inline-flex w-full items-center rounded-md border-gray-200 px-2 py-2  text-[0.9rem]  text-gray-500 hover:bg-sky-500 hover:text-white focus:text-blue-500 focus:ring-blue-500"
                  to="/"
                >
                  Cơ sở
                </Link>
                <Link
                  type="button"
                  className="relative inline-flex w-full items-center rounded-md border-gray-200 px-2 py-2  text-[0.9rem]  text-gray-500 hover:bg-sky-500 hover:text-white focus:text-blue-500 focus:ring-blue-500"
                  to="/"
                >
                  Năm học
                </Link>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 hidden h-full  min-h-screen w-screen bg-gray-500 bg-opacity-50"></div>
        </div>
        <div className="ml-auto hidden items-center gap-x-2 sm:gap-x-3 md:order-3 md:flex md:pl-1">
          <div className="relative z-50 flex items-center gap-1  before:hidden before:h-10 before:w-px before:bg-gray-300  md:before:block">
            <Link
              className="ml-7 inline-flex h-12 w-[9.25rem] items-center justify-center gap-x-3 rounded-md border border-transparent bg-gradient-to-tl from-sky-500 to-sky-500 px-2 text-center text-sm font-medium text-white duration-200 hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white "
              to="/login"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
        <div
          id="docs-navbar"
          className="ml-auto hidden grow basis-full  overflow-hidden text-[0.8rem] font-medium uppercase text-slate-800 transition-all duration-300 md:order-2 md:block md:w-auto md:basis-auto"
        >
          <div className="mt-5 flex flex-col gap-1 md:mt-0 md:flex-row md:items-center md:justify-end md:pl-5">
            <Link
              className="group relative inline-flex items-center  justify-center gap-x-3 rounded-md p-4 py-2 duration-100 before:absolute before:bottom-0 before:h-1  before:w-0 before:rounded-sm before:bg-sky-500 before:transition-all before:duration-100 hover:text-sky-500 hover:before:w-[70%]"
              to="/"
            >
              Trang chủ
            </Link>
            <Link
              className="group relative inline-flex items-center  justify-center gap-x-3 rounded-md p-4 py-2 duration-100 before:absolute before:bottom-0 before:h-1  before:w-0 before:rounded-sm before:bg-sky-500 before:transition-all before:duration-100 hover:text-sky-500 hover:before:w-[70%]"
              to="/"
            >
              Cơ sở
            </Link>
            <Link
              className="group relative inline-flex items-center  justify-center gap-x-3 rounded-md p-4 py-2 pr-7 duration-100 before:absolute before:bottom-0 before:h-1  before:w-0 before:rounded-sm before:bg-sky-500 before:transition-all before:duration-100 hover:text-sky-500 hover:before:w-[70%]"
              to="/"
            >
              Năm học
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
