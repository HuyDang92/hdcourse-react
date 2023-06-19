import { Icon } from 'assets/icons';
import Slider from 'react-slick';
import { useRef, useState, useEffect } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChartHalfPie from 'components/Chart/ChartHalfPie';
import SliderCourseComponent from './components/SliderCourseComponent';
import { ProjectItem } from 'types/Project';
import { useCurrentViewportView } from 'hooks/useCurrentViewportView';

interface ChartHalfPieProps {
  projectCount: number;
  totalProject: number;
  studentsCount: number;
  color: string[];
  colorColumn: string[];
}

interface ProjectsProps {
  titleTable: string;
  infoProject: ProjectItem[][];
  chartHalfPieData: ChartHalfPieProps;
  styleCss: {
    titleColor: string;
    linearGradient: string;
    showProgress: boolean;
  };
}

const Projects: React.FC<ProjectsProps> = ({
  titleTable,
  infoProject,
  chartHalfPieData,
  styleCss,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [showPreviousButton, setShowPreviousButton] = useState(true);
  const [newArrSlideMobi, setNewArrSlideMobi] = useState<any>([]);

  const { isMobile } = useCurrentViewportView();

  useEffect(() => {
    const chunkSize = 1;
    const formartArr = [];

    if (infoProject !== undefined) {
      for (let i = 0; i < infoProject.flat().length; i += chunkSize) {
        const chunk = infoProject.flat().slice(i, i + chunkSize);
        formartArr.push(chunk);
      }
    }

    setNewArrSlideMobi(formartArr);
  }, [isMobile]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    afterChange: (currentSlide: number) => {
      // Kiểm tra chỉ số hiện tại của slider
      if (currentSlide === 0) {
        setShowPreviousButton(false); // Ẩn nút previous
      } else {
        setShowPreviousButton(true); // Hiển thị nút previous
      }
    },
  };

  const next = (): void => {
    sliderRef.current?.slickNext();
  };

  const previous = (): void => {
    sliderRef.current?.slickPrev();
  };

  return (
    infoProject && (
      <div className="flex max-h-[32.5rem] w-full flex-col gap-8 bg-white md:flex-row">
        <div className="w-full rounded-lg bg-white sm:w-3/4">
          <div className="flex justify-between">
            <h1 className="text-medium flex items-center text-xl font-bold sm:text-[1.875rem]">
              Dự án {titleTable}
            </h1>
            <button className=" max-h-10 rounded-xl border border-solid border-[#00000033] p-1 px-3 text-base text-black sm:px-6 sm:py-2">
              Xem tất cả
            </button>
          </div>
          <div className="relative mt-[1.125rem] max-w-[66.75rem]">
            {showPreviousButton && (
              <button
                onClick={previous}
                className="absolute -left-2 top-[50%] z-20 flex h-8 w-8 -translate-y-[50%] items-center justify-center rounded-full bg-white shadow-btn-slide duration-200 ease-in-out hover:scale-105 sm:h-[3.125rem] sm:w-[3.125rem] md:-left-5"
              >
                <GrFormPrevious className="text-4xl" />
              </button>
            )}
            <Slider ref={sliderRef} {...settings}>
              {isMobile
                ? newArrSlideMobi.map((item: ProjectItem[], index: number) => (
                    <SliderCourseComponent
                      key={index}
                      infoProject={item}
                      styleCss={styleCss}
                    />
                  ))
                : infoProject.map((item, index) => (
                    <SliderCourseComponent
                      key={index}
                      infoProject={item}
                      styleCss={styleCss}
                    />
                  ))}
            </Slider>
            <button
              onClick={() => next()}
              className="absolute -right-2 top-[50%] z-20 flex h-8 w-8 -translate-y-[50%] items-center justify-center rounded-full bg-white  shadow-btn-slide duration-200 ease-in-out hover:scale-105 sm:h-[3.125rem] sm:w-[3.125rem] md:-right-5"
            >
              <GrFormNext className="text-4xl font-normal" />
            </button>
          </div>
        </div>
        <div className="shadow-primary hidden h-full w-1/4 border-l border-[#E7E7E780] bg-white pl-[2.625rem] sm:block">
          <button className="flex h-10 items-center justify-center gap-2.5 rounded-xl border border-solid border-[#00000033] px-6 py-2">
            <Icon />
            <span className="text-base text-black">Thống kê</span>
          </button>
          <div className="mt-7">
            <div className="relative mb-[1.125rem] h-[17.813rem] overflow-hidden rounded-lg bg-white p-7 shadow-border-full">
              <h3
                className="mb-2 text-xl font-semibold"
                style={{ color: styleCss.titleColor }}
              >
                Tổng dự án
              </h3>
              <p className="text-xs text-[#7E7E7E] first-letter:uppercase">
                {titleTable}
              </p>
              <ChartHalfPie
                totalProject={chartHalfPieData.totalProject}
                projectCount={chartHalfPieData.projectCount}
                color={chartHalfPieData.color}
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-lg bg-white p-7 shadow-border-full">
              <h3
                className="mb-2 text-xl font-semibold"
                style={{ color: styleCss.titleColor }}
              >
                Tổng sinh viên
              </h3>
              <p className="text-xs text-[#7E7E7E]">Tham gia dự án</p>
              <div className="flex items-center gap-[1.125rem]">
                <div className="flex">
                  <div
                    className="mt-[0.687rem] h-[1.563rem] w-3"
                    style={{ backgroundColor: chartHalfPieData.colorColumn[0] }}
                  ></div>
                  <div
                    className="mt-[0.375rem] h-[1.875rem] w-3"
                    style={{ backgroundColor: chartHalfPieData.colorColumn[1] }}
                  ></div>
                  <div
                    className="h-9 w-5"
                    style={{ backgroundColor: chartHalfPieData.colorColumn[2] }}
                  ></div>
                </div>
                <h2 className="text-[3.125rem] font-bold">
                  {chartHalfPieData.studentsCount}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Projects;
