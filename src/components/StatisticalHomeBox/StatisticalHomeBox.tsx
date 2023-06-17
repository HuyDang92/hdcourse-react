import React from 'react';

import ItemStatistical from './components/ItemStatistical';
import ProjectIcon from 'assets/icons/project-icon.svg';
import StudentIcon from 'assets/icons/student-icon.svg';
import CompletedIcon from 'assets/icons/complete-icon.svg';
import InProcessIcon from 'assets/icons/in-process-icon.svg';
import futureIcon from 'assets/icons/future-icon.svg';

const StatisticalHomeBox = () => {
  return (
    <div className=" mb-8 flex w-full gap-5">
      <ItemStatistical
        title="Tổng số dự án"
        icon={ProjectIcon}
        plus={0}
        count="268"
        name="Dự án"
        colorIcon="#B5346A70"
        colorText="#B5346A"
      />
      <ItemStatistical
        title="Tổng số sinh viên"
        icon={StudentIcon}
        plus={0}
        count="1k"
        name="Sinh viên"
        colorIcon="#34B5A670"
        colorText="#34B5A6"
      />
      <ItemStatistical
        title="Dự án đã hoàn thành"
        icon={CompletedIcon}
        plus={0}
        count="186"
        name="Dự án"
        colorIcon="#34B53A70"
        colorText="#34B53A"
      />
      <ItemStatistical
        title="Dự án đang triển khai"
        icon={InProcessIcon}
        plus={0}
        count="70"
        name="Dự án"
        colorIcon="#FB923C70"
        colorText="#FB923C"
      />
      <ItemStatistical
        title="Dự án sắp triển khai"
        icon={futureIcon}
        plus={0}
        count="25"
        name="Dự án"
        colorIcon="#297bff70"
        colorText="#297bff"
      />
    </div>
  );
};

export default StatisticalHomeBox;
