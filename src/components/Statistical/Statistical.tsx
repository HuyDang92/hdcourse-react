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
  const [nameDepartment, setNameDepartment] = useState<string>('');
  const detailTable = useGetProjectOverviewTableDetailQuery(checked);

  useEffect(() => {
    if (data) {
      setChecked(data[0].baseId);
      setNameDepartment(data[0].base);
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
                        onChange={() => {
                          setChecked(item.baseId);
                          setNameDepartment(item.base);
                        }}
                        type="radio"
                        checked={checked === item.baseId}
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
            Cơ sở {nameDepartment}
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
          <tbody className="min-h-20 text-base font-normal">
            {detailTable.isFetching && (
              <div className="absolute left-[50%] -translate-x-[50%] lg:top-[60%]">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="mr-2 inline h-8 w-8 animate-spin fill-[#B5346A] text-gray"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
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
