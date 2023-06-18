import React from 'react';
import { Icon } from 'assets/icons';
import ItemProject from './components/ItemProject';
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChartHalfPie from 'components/Chart/ChartHalfPie';

interface ChartHalfPieProps {
  projectCount: number;
  totalProject: number;
  color: string[];
}

interface InfoProjectProps {
  title: string;
  titleColor: string;
  colorColumn: string[];
  linearGradient: string;
  showProgress: boolean;
}

interface ProjectsProps {
  infoProject: InfoProjectProps;
  chartHalfPieData: ChartHalfPieProps;
}

const Projects: React.FC<ProjectsProps> = ({
  infoProject,
  chartHalfPieData,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [showPreviousButton, setShowPreviousButton] = useState(true);

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
    <div className="flex max-h-[32.5rem] w-full flex-col gap-8 bg-white md:flex-row">
      <div className="w-3/4 rounded-lg bg-white">
        <div className="flex justify-between">
          <h1 className="text-medium text-[1.875rem] font-bold">
            Dự án {infoProject.title}
          </h1>
          <button className=" max-h-10 rounded-xl border border-solid border-[#00000033] px-6 py-2 text-base text-black">
            Xem tất cả
          </button>
        </div>
        <div className="relative mt-[1.125rem] max-w-[66.75rem]">
          {showPreviousButton && (
            <button
              onClick={previous}
              className="absolute left-5 top-[50%] z-20 flex h-[3.125rem] w-[3.125rem] -translate-y-[50%] items-center justify-center rounded-full bg-white shadow-btn-slide duration-200 ease-in-out hover:scale-105 md:-left-5"
            >
              <GrFormPrevious className="text-4xl" />
            </button>
          )}
          <Slider ref={sliderRef} {...settings}>
            <div>
              <div className="grid grid-cols-3 gap-5 p-2">
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  titleColor={infoProject.titleColor}
                  linearGradient={infoProject.linearGradient}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-5 p-2">
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
                <ItemProject
                  subject="Bộ môn CNTT HCM"
                  title="Nâng cao kỹ năng phân tích kế hoạch DN website..."
                  linearGradient={infoProject.linearGradient}
                  titleColor={infoProject.titleColor}
                  showProgress={infoProject.showProgress}
                />
              </div>
            </div>
          </Slider>
          <button
            onClick={() => next()}
            className="absolute right-5 top-[50%] z-20 flex h-[3.125rem] w-[3.125rem] -translate-y-[50%] items-center justify-center  rounded-full bg-white shadow-btn-slide duration-200 ease-in-out hover:scale-105 md:-right-5"
          >
            <GrFormNext className="text-4xl font-normal" />
          </button>
        </div>
      </div>
      <div className="shadow-primary h-full w-1/4 border-l border-[#E7E7E780] bg-white pl-[2.625rem]">
        <button className="flex h-10 items-center justify-center gap-2.5 rounded-xl border border-solid border-[#00000033] px-6 py-2">
          <Icon />
          <span className="text-base text-black">Thống kê</span>
        </button>
        <div className="mt-7">
          <div className="relative mb-[1.125rem] h-[17.813rem] overflow-hidden rounded-lg bg-white p-7 shadow-border-full">
            <h3
              className="mb-2 text-xl font-semibold"
              style={{ color: infoProject.titleColor }}
            >
              Tổng dự án
            </h3>
            <p className="text-xs text-[#7E7E7E] first-letter:uppercase">
              {infoProject.title}
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
              style={{ color: infoProject.titleColor }}
            >
              Tổng sinh viên
            </h3>
            <p className="text-xs text-[#7E7E7E]">Tham gia dự án</p>
            <div className="flex items-center gap-[1.125rem]">
              <div className="flex">
                <div
                  className="mt-[0.687rem] h-[1.563rem] w-3"
                  style={{ backgroundColor: infoProject.colorColumn[0] }}
                ></div>
                <div
                  className="mt-[0.375rem] h-[1.875rem] w-3"
                  style={{ backgroundColor: infoProject.colorColumn[1] }}
                ></div>
                <div
                  className="h-9 w-5"
                  style={{ backgroundColor: infoProject.colorColumn[2] }}
                ></div>
              </div>
              <h2 className="text-[3.125rem] font-bold">536</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
