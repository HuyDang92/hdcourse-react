import React from 'react';
import ReactECharts from 'echarts-for-react';

interface ChartProps {
  title: string;
  xAxisData: string[];
  barData: number[][];
  names: string[];
  barColors: string[];
}

const ChartBar: React.FC<ChartProps> = ({
  title,
  xAxisData,
  barData,
  names,
  barColors,
}) => {
  const options = {
    title: {
      text: title,
      textStyle: {
        fontFamily: 'Inter, sans-serif',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      textStyle: {
        fontFamily: 'Inter, sans-serif',
      },
    },
    legend: {
      icon: 'circle',
      right: 0,
      top: 'top',
      textStyle: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLine: {
        show: false, // Ẩn đường line của trục x
      },
      axisTick: {
        show: false, // Ẩn các dấu tick của trục x
      },
      axisLabel: {
        interval: 0, // Hiển thị tất cả tên trục x
        fontSize: 12,
        fontFamily: 'Inter, sans-serif',
      },
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      splitLine: {
        show: false, // Ẩn đường line của trục y
      },
      axisLabel: {
        interval: 0, // Hiển thị tất cả tên trục x
        fontSize: 12,
        fontFamily: 'Inter, sans-serif',
      },
    },
    series: [
      {
        name: names[0],
        type: 'bar',
        itemStyle: {
          color: barColors[0],
        },
        data: barData[0],
      },
      {
        name: names[1],
        type: 'bar',
        itemStyle: {
          color: barColors[1],
        },
        data: barData[1],
      },
    ],
  };

  return (
    <ReactECharts
      option={options}
      style={{ height: '332px', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  );
};

export default ChartBar;
