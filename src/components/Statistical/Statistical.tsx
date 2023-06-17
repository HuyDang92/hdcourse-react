import ProjectIcon from 'assets/icons/project-icon.svg';

const Statistical = () => {
  return (
    <section className="flex flex-col items-center gap-3 sm:flex-row lg:h-[41.25rem]">
      <div className="bg-while rounded-lg bg-white px-4 py-6 shadow-border-full sm:w-4/5 lg:h-full">
        <div className="mb-7">
          <h1 className="text-center text-[1.875rem] font-bold text-[#B5346A]">
            Thống kê dự án các cơ sở
          </h1>
          <h3 className="mt-3 text-center text-xl font-medium leading-7 text-[#222222]">
            Tháng 1 - Tháng 6
          </h3>
        </div>
        <div className="relative overflow-x-auto">
          <table className=" w-full ">
            <thead className="border-b-[0.063rem] border-[#0000001A] ">
              <tr>
                <th className="py-3 text-left text-[0.625rem] font-medium leading-4 text-[#8F8F8F]">
                  Cơ sở
                </th>
                <th className="py-3 text-left text-[0.625rem] font-medium leading-4 text-[#8F8F8F]">
                  Dự án hoàn thành
                </th>
                <th className="py-3 text-left text-[0.625rem] font-medium leading-4 text-[#8F8F8F]">
                  Dự án đang triển khai
                </th>
                <th className="py-3 text-left text-[0.625rem] font-medium leading-4 text-[#8F8F8F]">
                  Dự án sắp triển khai
                </th>
                <th className="py-3 text-left text-[0.625rem] font-medium leading-4 text-[#8F8F8F]">
                  Số lượng sinh viên
                </th>
                <th className="py-3 text-left text-[0.625rem] font-medium leading-4 text-[#8F8F8F]">
                  Số lượng giảng viên
                </th>
                <th className="py-3 text-left text-[0.625rem] font-medium leading-4 text-[#8F8F8F]">
                  Thời gian
                </th>
                <th className="py-3 text-left text-[0.625rem] font-medium leading-4 text-[#8F8F8F]">
                  Tổng số dự án
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900 text-center text-sm font-medium">
              <tr className="h-14  border-b-[0.063rem] border-[#0000001A] py-2  leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="hcm"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                    />
                    <label
                      htmlFor="hcm"
                      className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                    >
                      Hồ Chí Minh
                    </label>
                  </div>
                </td>
                <td>80</td>
                <td>67</td>
                <td>23</td>
                <td>120</td>
                <td>65</td>
                <td>204h</td>
                <td>167</td>
              </tr>
              <tr className="h-14  border-b-[0.063rem] border-[#0000001A] py-2  leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="hanoi"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                    />
                    <label
                      htmlFor="hanoi"
                      className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                    >
                      Hà Nội
                    </label>
                  </div>
                </td>
                <td>80</td>
                <td>67</td>
                <td>23</td>
                <td>120</td>
                <td>65</td>
                <td>204h</td>
                <td>167</td>
              </tr>
              <tr className="h-14  border-b-[0.063rem] border-[#0000001A] py-2  leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="bacgiang"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                    />
                    <label
                      htmlFor="bacgiang"
                      className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                    >
                      Bắc Giang
                    </label>
                  </div>
                </td>
                <td>80</td>
                <td>67</td>
                <td>23</td>
                <td>120</td>
                <td>65</td>
                <td>204h</td>
                <td>167</td>
              </tr>
              <tr className="h-16 border-b-[0.063rem] border-[#0000001A] py-2  leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="danang"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                    />
                    <label
                      htmlFor="danang"
                      className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                    >
                      Đằ Nẵng
                    </label>
                  </div>
                </td>
                <td>80</td>
                <td>67</td>
                <td>23</td>
                <td>120</td>
                <td>65</td>
                <td>204h</td>
                <td>167</td>
              </tr>
              <tr className="h-14  border-b-[0.063rem] border-[#0000001A] py-2  leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="hue"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                    />
                    <label
                      htmlFor="hue"
                      className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                    >
                      Huế
                    </label>
                  </div>
                </td>
                <td>80</td>
                <td>67</td>
                <td>23</td>
                <td>120</td>
                <td>65</td>
                <td>204h</td>
                <td>167</td>
              </tr>
              <tr className="h-14  border-b-[0.063rem] border-[#0000001A] py-2  leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="dongnai"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                    />
                    <label
                      htmlFor="dongnai"
                      className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                    >
                      Đồng Nai
                    </label>
                  </div>
                </td>
                <td>80</td>
                <td>67</td>
                <td>23</td>
                <td>120</td>
                <td>65</td>
                <td>204h</td>
                <td>167</td>
              </tr>
              <tr className="h-14  border-b-[0.063rem] border-[#0000001A] py-2  leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="cantho"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                    />
                    <label
                      htmlFor="cantho"
                      className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                    >
                      Cần Thơ
                    </label>
                  </div>
                </td>
                <td>80</td>
                <td>67</td>
                <td>23</td>
                <td>120</td>
                <td>65</td>
                <td>204h</td>
                <td>167</td>
              </tr>
              <tr className="h-14 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="taynguyen"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                    />
                    <label
                      htmlFor="taynguyen"
                      className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                    >
                      Tây Nguyên
                    </label>
                  </div>
                </td>
                <td>80</td>
                <td>67</td>
                <td>23</td>
                <td>120</td>
                <td>65</td>
                <td>204h</td>
                <td>167</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="font-inter bg-while relative  mt-4 w-full rounded-lg bg-white px-4 py-6 shadow-border-full sm:mt-0 sm:w-1/5 lg:h-full">
        <div className="mb-3">
          <div className="flex items-center gap-3">
            <div>
              <img src={ProjectIcon} alt="" className="h-6" />
            </div>
            <h1 className="text-xl font-bold leading-10 text-[#B5346A]">
              Chi tiết
            </h1>
          </div>
          <h3 className="mb-1 text-base font-normal text-[#222222]">
            Thông tin dự án
          </h3>
          <h3 className="text-base font-normal text-[#222222]">
            Cơ sở Hồ Chí Minh
          </h3>
        </div>
        <table className="w-full">
          <thead className="border-b-[1px] border-[#B5346A]  leading-10">
            <tr>
              <th className=" py-4 text-left text-sm font-semibold">Bộ môn</th>
              <th className=" py-4 text-right text-sm font-semibold">
                Số lượng
              </th>
            </tr>
          </thead>
          <tbody className="text-base font-normal leading-7">
            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Công nghệ thông tin</td>
              <td className=" text-right">526</td>
            </tr>
            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Ứng dụng phần mềm</td>
              <td className="pt-4 text-right">125h</td>
            </tr>

            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Thương mại điện tử</td>
              <td className="pt-4 text-right">56</td>
            </tr>
            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Tiếng anh</td>
              <td className="pt-4 text-right">600</td>
            </tr>
            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Cơ bản</td>
              <td className="pt-4 text-right">80</td>
            </tr>
            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Làm đẹp</td>
              <td className="pt-4 text-right">80</td>
            </tr>
            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Kinh tế</td>
              <td className="pt-4 text-right">80</td>
            </tr>
            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Quan hệ doanh nghiệp</td>
              <td className="pt-4 text-right">80</td>
            </tr>
            <tr className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5">
              <td>Du lịch & Nhà hàng KS</td>
              <td className="pt-4 text-right">80</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Statistical;
