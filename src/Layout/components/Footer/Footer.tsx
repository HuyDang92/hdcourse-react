import { Link } from 'react-router-dom';
import logoFPTWhite from 'assets/logo/logo-fpt-white.png';

const Footer = () => {
  return (
    <footer className="mx-auto w-full bg-[#252831] px-4 pt-8  text-white lg:px-10">
      <div className="m-auto">
        <div className="bg-blueGray-100 relative pb-4 pt-5">
          <div className="container mx-auto ">
            <div className="mb-5 grid gap-4 lg:grid-cols-3 lg:text-left">
              <div className="mt-3 w-full">
                <img
                  className="mb-5 w-40 object-cover"
                  src={logoFPTWhite}
                  alt="FPT Polytechnic"
                />
                <div className="mb-7 flex flex-col gap-2">
                  <div className="flex items-center gap-2 ">
                    <p className="text-start text-[0.8rem] font-medium text-[#b8c0c6]">
                      Địa chỉ: Tòa nhà QTSC9 (toà T), đường Tô Ký, <br /> phường
                      Tân Chánh Hiệp, quận 12, TP HCM
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <p className="text-[0.8rem] font-medium text-[#b8c0c6]">
                      Email: xthpoly@gmail.com
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <p className="text-[0.8rem] font-medium text-[#b8c0c6]">
                      Facebook:
                    </p>
                    <Link to="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="cursor-pointer text-cyan-300"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full">
                <div className="items-top mb-4 flex flex-wrap">
                  <div className="">
                    <span className="mb-5 block text-sm font-bold uppercase">
                      Về xưởng thực hành
                    </span>

                    <div className="mb-7 flex flex-col gap-2.5">
                      <div className="flex cursor-pointer items-center gap-3">
                        <p className="text-start text-[0.8rem] font-medium text-[#b8c0c6]">
                          Giới thiệu Xưởng thực hành
                        </p>
                      </div>
                      <div className="flex cursor-pointer items-center gap-3">
                        <p className="text-[0.8rem] font-medium text-[#b8c0c6]">
                          Liên hệ hợp tác
                        </p>
                      </div>
                      <div className="flex cursor-pointer items-center gap-3">
                        <p className="text-[0.8rem] font-medium text-[#b8c0c6]">
                          Điều khoản
                        </p>
                      </div>
                      <div className="flex cursor-pointer items-center gap-3">
                        <p className="text-[0.8rem] font-medium text-[#b8c0c6]">
                          Chỉnh sách bảo mật
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 w-full">
                <div className="items-top mb-4 flex flex-wrap">
                  <div className="">
                    <h1 className="mb-5 block text-sm  font-bold uppercase">
                      Đơn vị phát triển
                    </h1>
                    <div className="mb-7 flex flex-col gap-2.5">
                      <div className="flex cursor-pointer items-center gap-3">
                        <p className="text-start text-[0.8rem] font-medium text-[#b8c0c6]">
                          Bộ môn Công nghệ thông tin FPL HCM
                        </p>
                      </div>
                      <div className="flex cursor-pointer items-center gap-3">
                        <p className="text-start text-[0.8rem] font-medium text-[#b8c0c6]">
                          Bộ môn Ứng dụng phần mềm FPL HCM
                        </p>
                      </div>
                      <div className="flex items-center gap-3 ">
                        <p className="text-[0.8rem] font-medium text-[#b8c0c6]">
                          Hợp tác cùng
                          <span className="cursor-pointer bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text px-1 font-semibold uppercase text-transparent underline">
                            Dev team
                          </span>
                          FPL HCM K16
                        </p>
                      </div>
                      <div className="mb-5 flex -space-x-2">
                        <img
                          className="h-9 w-9 cursor-pointer rounded-full border-2 border-white"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt=""
                        />
                        <img
                          className="h-9 w-9 cursor-pointer rounded-full border-2 border-white"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt=""
                        />
                        <img
                          className="h-9 w-9 cursor-pointer rounded-full border-2 border-white"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt=""
                        />
                        <img
                          className="h-9 w-9 cursor-pointer rounded-full border-2 border-white"
                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4 border-gray-100 opacity-50" />
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="mx-auto w-full px-4 text-center md:w-4/12">
                <p className="text-blueGray-500 text-[0.8rem]  font-bold text-[#b8c0c6]">
                  Copyright © 2023 FPT Polytechnic Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
