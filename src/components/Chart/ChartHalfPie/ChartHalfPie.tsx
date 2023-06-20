import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

interface ChartHalfPieProps {
  title: string;
  projectCount: number;
  totalProject: number;
  color: string[];
}

const ChartHalfPie: React.FC<ChartHalfPieProps> = ({
  title,
  projectCount,
  color,
  totalProject,
}) => {
  const options: EChartsOption = {
    title: {
      text: projectCount,
      top: '60%',
      left: 'center',
      textStyle: {
        fontSize: 50,
        color: '#000',
        fontFamily: 'Inter, sans-serif',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}',
      textStyle: {
        fontFamily: 'Inter, sans-serif',
        // fontWeight: 'bold',
      },
    },
    series: [
      {
        name: 'Dự án',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '70%'],
        startAngle: 180,
        labelLine: {
          show: false,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        data: [
          {
            name: `${
              title.charAt(0).toUpperCase() + title.slice(1)
            }: ${projectCount}`,
            value: projectCount,
            itemStyle: {
              color: color[0],
            },
          },
          {
            name: `Tổng dự án: ${totalProject}`,
            value: totalProject - projectCount,
            itemStyle: {
              color: color[1],
            },
          },
          {
            // make an record to fill the bottom 50%
            value: totalProject,
            itemStyle: {
              // stop the chart from rendering this piece
              color: 'none',
              decal: {
                symbol: 'none',
              },
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="absolute bottom-0 w-full translate-x-[-1.813rem] translate-y-[6.875rem]">
      <ReactECharts
        option={options}
        style={{ height: '500px', width: '100%' }}
        opts={{ renderer: 'svg' }}
      />
    </div>
  );
};

export default ChartHalfPie;
