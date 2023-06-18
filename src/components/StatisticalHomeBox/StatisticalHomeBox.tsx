import React from 'react';

import ItemStatistical from './components/ItemStatistical';
import ProjectIcon from 'assets/icons/project-icon.svg';
import StudentIcon from 'assets/icons/student-icon.svg';
import CompletedIcon from 'assets/icons/complete-icon.svg';
import InProcessIcon from 'assets/icons/in-process-icon.svg';
import futureIcon from 'assets/icons/future-icon.svg';

import { StatisticalHomeBoxProps } from 'types/Home';

interface ItemStatisticalProps {
  data: StatisticalHomeBoxProps | undefined;
}

const StatisticalHomeBox: React.FC<ItemStatisticalProps> = ({ data }) => {
  return (
    <div className="mb-8 grid grid-cols-2 gap-5 sm:flex-row md:grid-cols-3 lg:grid-cols-5">
      <ItemStatistical
        title="Tổng số dự án"
        icon={ProjectIcon}
        plus={0}
        count={data?.projectCount}
        name="Dự án"
        colorIcon="#B5346A70"
        colorText="#B5346A"
      />
      <ItemStatistical
        title="Tổng số sinh viên"
        icon={StudentIcon}
        plus={0}
        count={data?.studentCount}
        name="Sinh viên"
        colorIcon="#34B5A670"
        colorText="#34B5A6"
      />
      <ItemStatistical
        title="Dự án đã hoàn thành"
        icon={CompletedIcon}
        plus={0}
        count={data?.projectCompletedCount}
        name="Dự án"
        colorIcon="#34B53A70"
        colorText="#34B53A"
      />
      <ItemStatistical
        title="Dự án đang triển khai"
        icon={InProcessIcon}
        plus={0}
        count={data?.projectHappeningCount}
        name="Dự án"
        colorIcon="#FB923C70"
        colorText="#FB923C"
      />
      <ItemStatistical
        title="Dự án sắp triển khai"
        icon={futureIcon}
        plus={0}
        count={data?.projectUpComingCount}
        name="Dự án"
        colorIcon="#297bff70"
        colorText="#297bff"
      />
    </div>
  );
};

export default StatisticalHomeBox;
