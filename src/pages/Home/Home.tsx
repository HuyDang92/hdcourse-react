import { useEffect, useState } from 'react';
import ChartBar from 'components/Chart/ChartBar';
import ChartPie from 'components/Chart/ChartPie';
import Search from 'components/Search';
import ProjectsBox from 'components/ProjectsBox';
import Statistical from 'components/Statistical';
import StatisticalHomeBox from 'components/StatisticalHomeBox';
import { ProcessIcon, CompleteIcon, FutureIcon } from 'assets/icons';
import classNames from 'classnames/bind';
import styles from './Home.module.css';
import {
  useGetProjectOverviewQuery,
  useGetOverviewAnalyticByRoleQuery,
  useGetOverviewStatusProjectQuery,
} from 'features/Home/home.service';

const cx = classNames.bind(styles);

const Home = () => {
  const [chartBarStudentData, setChartBarStudentData] = useState<any>({});
  const [chartBarTeacherData, setChartBarTeacherData] = useState<any>({});
  const [chartPieData, setChartPieData] = useState<any>({});

  const projectOverview = useGetProjectOverviewQuery();
  const overviewAnalyticStudent = useGetOverviewAnalyticByRoleQuery('student');
  const overviewAnalyticTeacher = useGetOverviewAnalyticByRoleQuery('teacher');

  const overviewStatusProjectUpcoming =
    useGetOverviewStatusProjectQuery('UPCOMING');
  const overviewStatusProjectHappening =
    useGetOverviewStatusProjectQuery('HAPPENING');
  const overviewStatusProjectCompleted =
    useGetOverviewStatusProjectQuery('COMPLETED');

  const dataCharthalfPie1 = {
    projectCount: 37,
    totalProject: 100,
    color: ['#FB923C', '#FFE5CE'],
  };

  const dataCharthalfPie2 = {
    projectCount: 29,
    totalProject: 100,
    color: ['#297AFF', '#C0D8FF'],
  };

  const infoProjectData1 = {
    title: 'đang triển khai',
    titleColor: '#FB923C',
    colorColumn: ['#FFE5CE', '#FFCDA3', '#FB923C'],
    linearGradient:
      'linear-gradient(180deg, #FB923C 0%, #FB923C 51.04%, rgba(251, 146, 60, 0.7) 100%)',
    showProgress: true,
  };

  const infoProjectData2 = {
    title: 'sắp triển khai',
    titleColor: '#297AFF',
    colorColumn: ['#C0D8FF', '#95BDFF', '#297AFF'],
    linearGradient:
      'linear-gradient(180deg, #3B82F6 0%, #3B82F6 51.04%, rgba(59, 130, 246, 0.7) 100%)',
    showProgress: false,
  };

  useEffect(() => {
    const xAxisData = overviewAnalyticStudent.data?.map(
      (item: { name: string }) => item.name
    );
    const countRole = overviewAnalyticStudent.data?.map(
      (item: { countRole: number }) => item.countRole
    );
    const countTotalTimeWork = overviewAnalyticStudent.data?.map(
      (item: { countTotalTimeWork: number }) => item.countTotalTimeWork
    );
    const chartBarStudentData = {
      title: 'Thống kê sinh viên',
      xAxisData: xAxisData,
      barData: [countRole, countTotalTimeWork],
      names: ['Số lượng sinh viên', 'Thời gian làm việc'],
      barColors: ['#F97316', '#FED7AA'],
    };

    setChartBarStudentData(chartBarStudentData);
  }, [overviewAnalyticStudent]);

  useEffect(() => {
    const xAxisData = overviewAnalyticTeacher.data?.map(
      (item: { name: string }) => item.name
    );
    const countRole = overviewAnalyticTeacher.data?.map(
      (item: { countRole: number }) => item.countRole
    );
    const countTotalTimeWork = overviewAnalyticTeacher.data?.map(
      (item: { countTotalTimeWork: number }) => item.countTotalTimeWork
    );
    const chartBarTeacherData = {
      title: 'Thống kê giảng viên',
      xAxisData: xAxisData,
      barData: [countRole, countTotalTimeWork],
      names: ['Số lượng giảng viên', 'Thời gian làm việc'],
      barColors: ['#2563EB', '#BFDBFE'],
    };

    setChartBarTeacherData(chartBarTeacherData);
  }, [overviewAnalyticTeacher]);

  useEffect(() => {
    const totalProject = overviewStatusProjectHappening.data?.total;
    const dataChart = overviewStatusProjectHappening.data?.baseAnalytic?.map(
      (item: any) => {
        return {
          value: item.countProjects,
          name: item.name,
          percent: item.percentage,
        };
      }
    );

    const chartPieData = {
      subtext: totalProject,
      data: dataChart,
    };

    setChartPieData(chartPieData);
  }, [overviewStatusProjectHappening]);

  const getProjectUpcoming = () => {
    const totalProject = overviewStatusProjectUpcoming.data?.total;
    const dataChart = overviewStatusProjectUpcoming.data?.baseAnalytic?.map(
      (item: any) => {
        return {
          value: item.countProjects,
          name: item.name,
          percent: item.percentage,
        };
      }
    );

    const chartPieData = {
      subtext: totalProject,
      data: dataChart,
    };

    setChartPieData(chartPieData);
  };

  const getProjectHappening = () => {
    const totalProject = overviewStatusProjectHappening.data?.total;
    const dataChart = overviewStatusProjectHappening.data?.baseAnalytic?.map(
      (item: any) => {
        return {
          value: item.countProjects,
          name: item.name,
          percent: item.percentage,
        };
      }
    );

    const chartPieData = {
      subtext: totalProject,
      data: dataChart,
    };

    setChartPieData(chartPieData);
  };

  const getProjectCompleted = () => {
    const totalProject = overviewStatusProjectCompleted.data?.total;
    const dataChart = overviewStatusProjectCompleted.data?.baseAnalytic?.map(
      (item: any) => {
        return {
          value: item.countProjects,
          name: item.name,
          percent: item.percentage,
        };
      }
    );

    const chartPieData = {
      subtext: totalProject,
      data: dataChart,
    };

    setChartPieData(chartPieData);
  };

  return (
    <div>
      <div className="container mx-auto w-full px-4 text-white lg:px-10">
        <div className="mt-8 w-full text-black">
          <StatisticalHomeBox data={projectOverview.data} />
          <Search />
          <div className="mt-10">
            <ProjectsBox
              infoProject={infoProjectData1}
              chartHalfPieData={dataCharthalfPie1}
            />
          </div>
          <div className="mt-[3.125rem]">
            <ProjectsBox
              infoProject={infoProjectData2}
              chartHalfPieData={dataCharthalfPie2}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-5 sm:flex-row lg:my-[3.125rem]">
          <div className="w-full rounded-lg bg-white p-4 shadow-border-full sm:w-1/2">
            {overviewAnalyticStudent.status === 'fulfilled' && (
              <ChartBar data={chartBarStudentData} />
            )}
          </div>
          <div className="w-full rounded-lg bg-white p-4 shadow-border-full sm:w-1/2">
            {overviewAnalyticTeacher.status === 'fulfilled' && (
              <ChartBar data={chartBarTeacherData} />
            )}
          </div>
        </div>

        <div>
          <div>
            <h2 className="mb-7 text-3xl font-bold text-black">
              Thống kê dự án
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1">
              <div className="flex h-full flex-col justify-between gap-5">
                <button
                  className="flex h-full items-center rounded-lg bg-white p-10 shadow-border-full"
                  onClick={getProjectCompleted}
                >
                  <CompleteIcon className="mr-10" />
                  <h3 className="text-left text-xl font-bold uppercase text-gray">
                    Dự án đã
                    <br /> hoàn thành
                  </h3>
                </button>
                <button
                  className={`${cx(
                    'project_active'
                  )} relative flex h-full items-center rounded-lg bg-white p-10 shadow-border-full`}
                  onClick={getProjectHappening}
                >
                  <ProcessIcon className="mr-10" />
                  <h3 className="text-left text-xl font-bold uppercase text-gray">
                    Dự án đang
                    <br /> triển khai
                  </h3>
                </button>
                <button
                  className="flex h-full items-center rounded-lg bg-white p-10 shadow-border-full"
                  onClick={getProjectUpcoming}
                >
                  <FutureIcon className="mr-10" />
                  <h3 className="text-left text-xl font-bold uppercase text-gray">
                    Dự án sắp
                    <br /> triển khai
                  </h3>
                </button>
              </div>
            </div>
            <div className="col-span-1 rounded-lg bg-white p-4 shadow-border-full sm:col-span-2 lg:col-span-3">
              {overviewStatusProjectUpcoming.status === 'fulfilled' && (
                <ChartPie dataChart={chartPieData} />
              )}
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
