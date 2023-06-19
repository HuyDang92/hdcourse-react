import ReactECharts from 'echarts-for-react';
import { useCurrentViewportView } from 'hooks/useCurrentViewportView';
import { useEffect, useState } from 'react';
interface ChartBar {
  title: string;
  xAxisData: string[];
  barData: number[][];
  names: string[];
  barColors: string[];
}

interface ChartBarProps {
  data: ChartBar;
}

const ChartBar: React.FC<ChartBarProps> = ({ data }) => {
  const [options, setOptions] = useState({} as any);
  const isMobile = useCurrentViewportView();

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      const options = {
        title: {
          text: data.title,
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
          right: isMobile ? 'right' : 0,
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
          data: data.xAxisData,
          axisLine: {
            show: false, // Ẩn đường line của trục x
          },
          axisTick: {
            show: false, // Ẩn các dấu tick của trục x
          },
          axisLabel: {
            //interval: 0, // Hiển thị tất cả tên trục x
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
            name: data.names[0],
            type: 'bar',
            itemStyle: {
              color: data.barColors[0],
            },
            data: data.barData[0],
          },
          {
            name: data.names[1],
            type: 'bar',
            itemStyle: {
              color: data.barColors[1],
            },
            data: data.barData[1],
          },
        ],
      };

      setOptions(options);
    }
  }, [data]);

  return (
    <ReactECharts
      option={options}
      style={{ height: '332px', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  );
};

export default ChartBar;
