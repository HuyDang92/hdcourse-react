import ChartBar from 'components/Chart/ChartBar';
import ChartPie from 'components/Chart/ChartPie';
import { ProcessIcon, CompleteIcon, FutureIcon } from 'assets/icons';
import classNames from 'classnames/bind';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

const Home = () => {
  const xAxisData = [
    'Hà Nội',
    'HCM',
    'Bắc Giang',
    'Hải Phòng',
    'Đà Nẵng',
    'Huế',
    'Đồng Nai',
    'Cần Thơ',
    'Tây Nguyên',
  ];

  const names1 = ['Số lượng sinh viên', 'Thời gian làm việc'];
  const names2 = ['Số lượng giảng viên', 'Thời gian làm việc'];

  const barData1 = [
    [200, 400, 200, 250, 400, 400, 200, 300, 400],
    [100, 100, 300, 300, 400, 400, 200, 300, 400],
  ];
  const barData2 = [
    [200, 100, 200, 300, 400, 400, 200, 300, 400],
    [200, 100, 200, 300, 400, 400, 200, 300, 400],
  ];

  const barColors1 = ['#F97316', '#FED7AA'];
  const barColors2 = ['#2563EB', '#BFDBFE'];

  const subtext = '715';

  const data = [
    { value: 452, name: 'HCM', percent: 63.2 },
    { value: 122, name: 'Hà Nội', percent: 63.2 },
    { value: 65, name: 'Đà Nẵng', percent: 63.2 },
    { value: 30, name: 'Cần Thơ', percent: 63.2 },
    { value: 17, name: 'Huế', percent: 63.2 },
    { value: 37, name: 'Bắc Giang', percent: 63.2 },
    { value: 42, name: 'Hải Phòng', percent: 63.2 },
    { value: 60, name: 'Tây Nguyên', percent: 63.2 },
  ];

  return (
    <div className="min-h-[2000px] ">
      <div className="container mx-auto w-full px-4 text-white lg:px-10">
        <div className="mt-5 flex flex-col gap-5 sm:flex-row lg:my-[3.125rem]">
          <div className="w-full rounded-lg bg-white p-4 shadow-border-full sm:w-1/2">
            <ChartBar
              title="Thống kê sinh viên"
              xAxisData={xAxisData}
              barData={barData1}
              names={names1}
              barColors={barColors1}
            />
          </div>
          <div className="w-full rounded-lg bg-white p-4 shadow-border-full sm:w-1/2">
            <ChartBar
              title="Thống kê giảng viên"
              xAxisData={xAxisData}
              barData={barData2}
              names={names2}
              barColors={barColors2}
            />
          </div>
        </div>

        <div>
          <div>
            <h2 className="mb-7 text-4xl font-bold text-black">
              Thống kê dự án
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1">
              <div className="flex h-full flex-col justify-between gap-5">
                <button className="flex h-full items-center rounded-lg bg-white p-10 shadow-border-full">
                  <CompleteIcon className="mr-10" />
                  <h3 className="text-left text-xl font-bold uppercase text-gray">
                    Dự án đã
                    <br /> hoàng thành
                  </h3>
                </button>
                <button
                  className={`${cx(
                    'project_active'
                  )} relative flex h-full items-center rounded-lg bg-white p-10 shadow-border-full`}
                >
                  <ProcessIcon className="mr-10" />
                  <h3 className="text-left text-xl font-bold uppercase text-gray">
                    Dự án đang
                    <br /> triển khai
                  </h3>
                </button>
                <button className="flex h-full items-center rounded-lg bg-white p-10 shadow-border-full">
                  <FutureIcon className="mr-10" />
                  <h3 className="text-left text-xl font-bold uppercase text-gray">
                    Dự án sắp
                    <br /> triển khai
                  </h3>
                </button>
              </div>
            </div>
            <div className="col-span-1 rounded-lg bg-white p-4 shadow-border-full sm:col-span-2 lg:col-span-3">
              <ChartPie subtext={subtext} data={data} />
            </div>
          </div>
        </div>

        <div className="my-[3.125rem] grid grid-cols-4 gap-5 text-black">
          <div className="col-span-3">
            <div className="rounded-lg bg-white p-4 p-6 shadow-border-full">
              <div className="py-7 text-center">
                <h1 className="text-3xl font-bold text-[#FB923C]">
                  Thống kê dự án các cơ sở
                </h1>
                <h3 className="pt-3 text-xl">Tháng 1 - Tháng 6</h3>
              </div>

              <div className="relative overflow-x-auto">
                <table className="text-gray-500 w-full text-left text-sm">
                  <thead className="text-gray-700 bg-gray-50 ">
                    <tr className="text-[0.625rem] text-[#8F8F8F]">
                      <th scope="col" className="px-6 py-3 font-medium">
                        Cơ sở
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Dự án hoàn thành
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Dự án đang triển khai
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Dự án sắp triển khai
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Số lượng sinh viên
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Số lượng giảng viên
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Thời gian
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" hover:bg-gray-50  border-b bg-white">
                      <th
                        scope="row"
                        className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium"
                      >
                        <div className="mr-4 flex items-center">
                          <input
                            id="schoolFacilitie"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            className="bg-gray-100 border-gray-300 h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="inline-radio"
                            className="text-gray-900 ml-[1.125rem] text-sm font-medium"
                          >
                            Hồ Chí Minh
                          </label>
                        </div>
                      </th>
                      <td className="px-6 py-4 text-sm font-medium">Silver</td>
                      <td className="px-6 py-4 text-sm font-medium">Laptop</td>
                      <td className="px-6 py-4 text-sm font-medium">$2999</td>
                    </tr>
                    <tr className=" hover:bg-gray-50  border-b bg-white">
                      <th
                        scope="row"
                        className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium"
                      >
                        <div className="mr-4 flex items-center">
                          <input
                            id="orange-radio"
                            type="radio"
                            value=""
                            name="colored-radio"
                            className="bg-gray-100 border-gray-300 dark:ring-offset-gray-800 h-4 w-4 text-orange-500 focus:ring-2 focus:ring-orange-500"
                          />
                          <label
                            htmlFor="orange-radio"
                            className="text-gray-900 dark:text-gray-300 ml-2 text-sm font-medium"
                          >
                            Hà Nội
                          </label>
                        </div>
                      </th>
                      <td className="px-6 py-4 text-sm font-medium">Silver</td>
                      <td className="px-6 py-4 text-sm font-medium">Laptop</td>
                      <td className="px-6 py-4 text-sm font-medium">$2999</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
