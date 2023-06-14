import ChartBar from 'components/Chart/ChartBar';
import ChartPie from 'components/Chart/ChartPie';
import Statistical from 'components/Statistical';
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
    <div>
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

        <div className="my-[3.125rem] text-black">
        <Statistical />
        </div>
      </div>
    </div>
  );
};

export default Home;
