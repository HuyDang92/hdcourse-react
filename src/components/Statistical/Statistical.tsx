import ProjectIcon from 'assets/icons/project-icon.svg';
import { StatisticalProjectTable } from 'types/Project';
import React, { useEffect, useState } from 'react';
import { useGetProjectOverviewTableDetailQuery } from 'features/Home/home.service';
interface ProjectOverviewTableDetailProps {
  department: string;
  projectCount: number;
}
interface StatisticalProps {
  data: any;
}

const Statistical: React.FC<StatisticalProps> = ({ data }) => {
  const [checked, setChecked] = useState<string>('');
  const detailTable = useGetProjectOverviewTableDetailQuery(checked);

  useEffect(() => {
    if (data) {
      setChecked(data[0].base);
    }
  }, [data]);

  return (
    // <section className="flex flex-col items-center gap-3 sm:flex-row lg:h-[41.25rem]">
    <section className="flex flex-col items-center gap-3 sm:flex-row lg:h-[38rem]">
      <div className="bg-while rounded-lg bg-white px-4 py-6 shadow-border-full sm:w-4/5 lg:h-full">
        <div className="mb-7">
          <h1 className="text-center text-[1.875rem] font-bold text-[#B5346A]">
            Thống kê dự án các cơ sở
          </h1>
          {/* <h3 className="mt-3 text-center text-xl font-medium leading-7 text-[#222222]">
            Tháng 1 - Tháng 6
          </h3> */}
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
              {data?.map((item: StatisticalProjectTable, index: number) => (
                <tr
                  key={index}
                  className="h-12  border-b-[0.063rem] border-[#0000001A] py-2  leading-5"
                >
                  <td>
                    <div className="mr-[1.125rem] flex items-center">
                      <input
                        id={item.base}
                        onChange={() => setChecked(item.base)}
                        type="radio"
                        checked={checked === item.base}
                        value={item.base}
                        name="schoolFacilities"
                        className="bg-gray-100 border-gray-300 ml-2 h-4 w-4 text-[#B5346A] focus:ring-2 focus:ring-[#B5346A]"
                      />

                      <label
                        htmlFor={item.base}
                        className="text-gray-900 dark:text-gray-300 ml-2 cursor-pointer text-sm font-medium"
                      >
                        {item.base}
                      </label>
                    </div>
                  </td>
                  <td>{item.projectCompleted}</td>
                  <td>{item.projectHappening}</td>
                  <td>{item.projectUpcoming}</td>
                  <td>{item.totalStudents}</td>
                  <td>{item.totalTeachers}</td>
                  <td>{item.time}h</td>
                  <td>{item.totalProject}</td>
                </tr>
              ))}
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
            Cơ sở {checked}
          </h3>
        </div>
        <table className="w-full">
          <thead className="border-b-[1px] border-[#B5346A]  leading-10">
            <tr>
              <th className=" py-4 text-left text-sm font-semibold">Bộ môn</th>
              <th className=" w-20 py-4 text-right text-sm font-semibold">
                Số lượng
              </th>
            </tr>
          </thead>
          <tbody className="text-base font-normal leading-7">
            {!detailTable.isFetching &&
              detailTable?.data.map(
                (item: ProjectOverviewTableDetailProps, index: number) => (
                  <tr
                    key={index}
                    className="h-11 border-b-[0.063rem] border-[#0000001A] py-2 leading-5"
                  >
                    <td>{item.department}</td>
                    <td className=" text-right">{item.projectCount}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Statistical;
