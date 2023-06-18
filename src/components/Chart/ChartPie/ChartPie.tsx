import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

interface DataItem {
  value: number;
  name: string;
  percent: number;
}

interface ChartPieData {
  subtext: string;
  data: DataItem[];
}

interface ChartPieProps {
  dataChart: ChartPieData;
}

const ChartPie: React.FC<ChartPieProps> = ({ dataChart }) => {
  const colorList = [
    '#F59E0B', //hp
    '#3B82F6', //dn
    '#14B8A6', //hcm
    '#EC4899', //hue
    '#FACC15', //tn
    '#E274F4', //bg
    '#6366F1', //ct
    '#0A6E63', //hn
  ];

  const options: EChartsOption = {
    title: {
      text: 'Tổng số lượng',
      subtext: dataChart.subtext,
      left: 'center',
      top: '43%',
      textStyle: {
        fontSize: 15,
        fontFamily: 'Inter, sans-serif',
        color: '#000',
        fontWeight: 'normal',
      },
      subtextStyle: {
        fontSize: 50,
        fontFamily: 'Inter, sans-serif',
        color: '#000',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      textStyle: {
        fontFamily: 'Inter, sans-serif',
      },
    },
    series: [
      {
        name: 'Số lượng dự án',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2,
          color: (params: any) => colorList[params.dataIndex],
        },
        labelLine: {
          show: false,
        },
        label: {
          show: false,
          formatter: '{b}: {per|{d}%}',
          textStyle: {
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
          },
          rich: {
            per: {
              color: '#34B5A6',
              backgroundColor: 'rgba(52, 181, 166, 0.3)',
              padding: [3, 4],
              borderRadius: 4,
            },
          },
        },
        emphasis: {
          label: {
            show: true,
          },
          labelLine: {
            show: true,
          },
        },
        textStyle: {
          fontFamily: 'Inter, sans-serif',
        },
        data: dataChart.data,
      },
    ],
  };

  return (
    dataChart.data && (
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-3/5">
          <ReactECharts
            option={options}
            style={{ height: '518px', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
        </div>
        <div className="flex w-full items-center justify-center sm:w-full md:max-w-[20rem]">
          <div className="mx-auto">
            <table className="table-auto text-sm text-[#0A0A0A]">
              <thead>
                <tr className="h-8">
                  <th className="w-28">
                    <div className="flex items-center">
                      <div className="mx-2 h-3 w-3 rounded-full bg-transparent"></div>
                      <p className="text-sm font-medium text-[#737373]">
                        Cơ sở
                      </p>
                    </div>
                  </th>
                  <th className="w-20 text-right font-medium text-[#737373]">
                    <span>Số lượng</span>
                  </th>
                  <th className="w-10"></th>
                  <th className="w-20 text-right font-medium text-[#737373]">
                    <span className="mr-2">%</span>
                  </th>
                </tr>
              </thead>
              <tbody className="border-t border-t-gray">
                {dataChart.data.map((item, index) => (
                  <tr key={index} className="h-8">
                    <td className="w-28">
                      <div className="flex items-center">
                        <div
                          className="mx-2 h-3 w-3 rounded-full"
                          style={{
                            backgroundColor:
                              colorList[index % colorList.length],
                          }}
                        ></div>
                        <p className="text-sm">{item.name}</p>
                      </div>
                    </td>
                    <td className="w-20 text-right">{item.value}</td>
                    <td className="w-10"></td>
                    <td className="w-20 text-right">
                      <span className="mr-2">{item.percent}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
};

export default ChartPie;
