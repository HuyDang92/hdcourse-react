import { useEffect, useState } from 'react';
import ChartBar from 'components/Chart/ChartBar';
import ChartPie from 'components/Chart/ChartPie';
import Search from 'components/Search';
import ProjectsBox from 'components/ProjectsBox';
import Statistical from 'components/Statistical';
import StatisticalHomeBox from 'components/StatisticalHomeBox';
import { ProcessIcon, CompleteIcon, FutureIcon } from 'assets/icons';
import className from 'classnames/bind';
import styles from './Home.module.css';
import {
  useGetProjectOverviewQuery,
  useGetOverviewAnalyticByRoleQuery,
  useGetOverviewStatusProjectQuery,
  useGetOverviewCourseQuery,
  useGetProjectOverviewTableQuery,
} from 'features/Home/home.service';

const cx = className.bind(styles);

const Home = () => {
  const [chartBarStudentData, setChartBarStudentData] = useState<any>({});
  const [chartBarTeacherData, setChartBarTeacherData] = useState<any>({});
  const [chartPieData, setChartPieData] = useState<any>({});
  const [overviewCourseHap, setOverviewCourseHap] = useState<any>({});
  const [overviewCourseUp, setOverviewCourseUp] = useState<any>({});
  const [projectStatus, setProjectStatus] = useState<any>({
    type: 'HAPPENING',
    active: 2,
  });

  const projectOverview = useGetProjectOverviewQuery();
  const overviewAnalyticStudent = useGetOverviewAnalyticByRoleQuery('student');
  const overviewAnalyticTeacher = useGetOverviewAnalyticByRoleQuery('teacher');
  const overviewProject = useGetProjectOverviewTableQuery();
  const overviewCourseHapenning = useGetOverviewCourseQuery({
    type: 'HAPPENING',
    page: 1,
    limit: 999999999999,
  });
  const overviewCourseUpcoming = useGetOverviewCourseQuery({
    type: 'UPCOMING',
    page: 1,
    limit: 999999999999,
  });
  const overviewStatusProject = useGetOverviewStatusProjectQuery(
    projectStatus.type
  );

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
    const totalProject = overviewStatusProject.data?.total;
    const dataChart = overviewStatusProject.data?.baseAnalytic?.map(
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
  }, [projectStatus, overviewStatusProject]);

  useEffect(() => {
    const dataOriginal = overviewCourseHapenning?.data?.projects;
    const chunkSize = 6;
    const formartArr = [];

    if (!dataOriginal) {
      return;
    }

    for (let i = 0; i < dataOriginal.length; i += chunkSize) {
      const chunk = dataOriginal.slice(i, i + chunkSize);
      formartArr.push(chunk);
    }

    const stylesCss = {
      titleColor: '#FB923C',
      linearGradient:
        'linear-gradient(180deg, #FB923C 0%, #FB923C 51.04%, rgba(251, 146, 60, 0.7) 100%)',
      showProgress: true,
    };

    const dataCharthalfPie = {
      totalProject: projectOverview?.data?.projectCount,
      projectCount:
        overviewCourseHapenning?.data?.projectsAnalysis.projectsCount,
      studentsCount:
        overviewCourseHapenning?.data?.projectsAnalysis.studentsCount,
      color: ['#FB923C', '#FFE5CE'],
      colorColumn: ['#FFE5CE', '#FFCDA3', '#FB923C'],
    };

    setOverviewCourseHap({
      infoProjectData: formartArr,
      stylesCss: stylesCss,
      dataCharthalfPie: dataCharthalfPie,
    });
  }, [overviewCourseHapenning]);

  useEffect(() => {
    const dataOriginal = overviewCourseUpcoming?.data?.projects;
    const chunkSize = 6;
    const formartArr = [];

    if (!dataOriginal) {
      return;
    }
    for (let i = 0; i < dataOriginal.length; i += chunkSize) {
      const chunk = dataOriginal.slice(i, i + chunkSize);
      formartArr.push(chunk);
    }

    const stylesCss = {
      titleColor: '#297AFF',
      linearGradient:
        'linear-gradient(180deg, #3B82F6 0%, #3B82F6 51.04%, rgba(59, 130, 246, 0.7) 100%)',
      showProgress: false,
    };

    const dataCharthalfPie = {
      totalProject: projectOverview?.data?.projectCount,
      projectCount:
        overviewCourseUpcoming?.data?.projectsAnalysis.projectsCount,
      studentsCount:
        overviewCourseUpcoming?.data?.projectsAnalysis.studentsCount,
      color: ['#297AFF', '#C0D8FF'],
      colorColumn: ['#C0D8FF', '#95BDFF', '#297AFF'],
    };

    setOverviewCourseUp({
      infoProjectData: formartArr,
      stylesCss: stylesCss,
      dataCharthalfPie: dataCharthalfPie,
    });
  }, [overviewCourseUpcoming]);

  return (
    <div className="mx-auto w-full px-4 text-white xl:px-10">
      <div className="mt-8 w-full text-black">
        <StatisticalHomeBox data={projectOverview.data} />
        <Search />
        <div className="mt-10">
          {!overviewCourseHapenning.isFetching && (
            <ProjectsBox
              titleTable="đang triển khai"
              infoProject={overviewCourseHap.infoProjectData}
              chartHalfPieData={overviewCourseHap.dataCharthalfPie}
              styleCss={overviewCourseHap.stylesCss}
            />
          )}
        </div>
        <div className="mt-[3.125rem]">
          {!overviewCourseUpcoming.isFetching && (
            <ProjectsBox
              titleTable="sắp triển khai"
              infoProject={overviewCourseUp.infoProjectData}
              chartHalfPieData={overviewCourseUp.dataCharthalfPie}
              styleCss={overviewCourseUp.stylesCss}
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-5 sm:flex-row lg:my-[3.125rem]">
        <div className="w-full rounded-lg bg-white p-4 shadow-border-full sm:w-1/2">
          {!overviewAnalyticStudent.isFetching && (
            <ChartBar data={chartBarStudentData} />
          )}
        </div>
        <div className="w-full rounded-lg bg-white p-4 shadow-border-full sm:w-1/2">
          {!overviewAnalyticTeacher.isFetching && (
            <ChartBar data={chartBarTeacherData} />
          )}
        </div>
      </div>

      <div>
        <div>
          <h2 className="my-5 text-2xl font-bold text-black lg:mb-7 lg:mt-0 lg:text-3xl">
            Thống kê dự án
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:h-[34.375rem] lg:grid-cols-4">
          <div className="col-span-1">
            <div className="flex h-full flex-col justify-between gap-5">
              <button
                className={`${
                  projectStatus.active === 1 &&
                  cx('project_active', 'border-[#34B53A]')
                } relative flex h-full items-center rounded-lg border-4 bg-white p-10 shadow-border-full sm:border-none sm:border-transparent`}
                onClick={() =>
                  setProjectStatus({ type: 'COMPLETED', active: 1 })
                }
              >
                <CompleteIcon className="mr-10" />
                <h3 className="text-left text-xl font-bold uppercase text-gray">
                  Dự án đã
                  <br /> hoàn thành
                </h3>
              </button>
              <button
                className={`${
                  projectStatus.active === 2 &&
                  cx('project_active', 'border-[#FB923C]')
                } relative flex h-full items-center rounded-lg border-4 bg-white p-10 shadow-border-full sm:border-none sm:border-transparent`}
                onClick={() =>
                  setProjectStatus({ type: 'HAPPENING', active: 2 })
                }
              >
                <ProcessIcon className="mr-10" />
                <h3 className="text-left text-xl font-bold uppercase text-gray">
                  Dự án đang
                  <br /> triển khai
                </h3>
              </button>
              <button
                className={`${
                  projectStatus.active === 3 &&
                  cx('project_active', 'border-[#4E91FF]')
                } relative flex h-full items-center rounded-lg border-4 bg-white p-10 shadow-border-full sm:border-none sm:border-transparent`}
                onClick={() =>
                  setProjectStatus({ type: 'UPCOMING', active: 3 })
                }
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
            {!overviewStatusProject.isFetching && (
              <ChartPie dataChart={chartPieData} />
            )}
          </div>
        </div>
      </div>

      <div className="my-[3.125rem] text-black">
        <Statistical data={overviewProject.data} />
      </div>
    </div>
  );
};

export default Home;
