const Statistical = () => {
  return (
    <section className="flex flex-col items-center gap-3 sm:flex-row lg:h-[41.25rem]">
      <div className="bg-while rounded-lg bg-white px-4 py-6 shadow-border-full sm:w-4/5 lg:h-full">
        <div className="mb-7">
          <h1 className="text-center text-[1.875rem] font-bold text-[#FB923C]">
            Thống kê dự án các cơ sở
          </h1>
          <h3 className="mt-3 text-center text-xl font-medium leading-7 text-[#222222]">
            Tháng 1 - Tháng 6
          </h3>
        </div>
        <div className="flex ">
          <table className=" w-full ">
            <thead className="border-b-[0.063rem] border-[#0000001A] ">
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
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#FB923C] focus:ring-2 focus:ring-[#FB923C]"
                    />
                    <label
                      htmlFor="red-radio"
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
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#FB923C] focus:ring-2 focus:ring-[#FB923C]"
                    />
                    <label
                      htmlFor="red-radio"
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
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#FB923C] focus:ring-2 focus:ring-[#FB923C]"
                    />
                    <label
                      htmlFor="red-radio"
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
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#FB923C] focus:ring-2 focus:ring-[#FB923C]"
                    />
                    <label
                      htmlFor="red-radio"
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
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#FB923C] focus:ring-2 focus:ring-[#FB923C]"
                    />
                    <label
                      htmlFor="red-radio"
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
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#FB923C] focus:ring-2 focus:ring-[#FB923C]"
                    />
                    <label
                      htmlFor="red-radio"
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
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#FB923C] focus:ring-2 focus:ring-[#FB923C]"
                    />
                    <label
                      htmlFor="red-radio"
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
              <tr className="h-14 py-2  leading-5">
                <td>
                  <div className="mr-[1.125rem] flex items-center">
                    <input
                      id="taynguyen"
                      type="radio"
                      value=""
                      name="schoolFacilities"
                      className="bg-gray-100 border-gray-300 h-4 w-4 text-[#FB923C] focus:ring-2 focus:ring-[#FB923C]"
                    />
                    <label
                      htmlFor="red-radio"
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
          <h1 className="text-xl font-bold leading-10 text-[#FB923C]">
            Chi tiết
          </h1>
          <h3 className="text-sm font-normal text-[#222222]">
            Thông tin dự án
          </h3>
        </div>
        <div className="absolute left-0 h-5 w-full bg-bg__statistical"></div>
        <table className="mt-10 w-full">
          <thead className="border-b-[1px] border-bg__statistical  leading-10">
            <th className=" py-4 text-left text-sm font-semibold">Tổng</th>
            <th className=" py-4 text-right text-sm font-semibold">Số lượng</th>
          </thead>
          <tbody className="  text-sm font-normal leading-7">
            <tr>
              <td className="pt-5">Sinh viên</td>
              <td className="pt-5 text-right">526</td>
            </tr>
            <tr>
              <td className="pt-4">Thời gian</td>
              <td className="pt-4 text-right">125h</td>
            </tr>

            <tr>
              <td className="pt-4">Giảng viên</td>
              <td className="pt-4 text-right">56</td>
            </tr>
            <tr className="border-b-[1px] border-[#0000001A]">
              <td className="pb-2.5 pt-4">Thời gian</td>
              <td className="pb-2.5 pt-4 text-right">135h</td>
            </tr>
            <tr>
              <td className="pt-5">Dự án hoàn thành</td>
              <td className="pt-5 text-right">526</td>
            </tr>
            <tr>
              <td className="pt-4">Dự án đang triển khai</td>
              <td className="pt-4 text-right">600</td>
            </tr>
            <tr>
              <td className="pt-4">Dự án sắp triển khai</td>
              <td className="pt-4 text-right">80</td>
            </tr>
          </tbody>
        </table>
        <div className="absolute bottom-0 left-0 hidden h-[5.938rem] w-full rounded-b-lg bg-bg__statistical lg:block"></div>
      </div>
    </section>
  );
};

export default Statistical;
