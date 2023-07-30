import { useParams } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import BreadcrumbComponent from './components/Breakcrumb';
import { Radio, Checkbox, Button } from '@material-tailwind/react';
import { useGetAllDataByIdCatQuery } from 'features/Course/course.service';
import CourseComponents from 'components/Course';
import Pagination from 'components/Panination';
import { ICourse } from 'types/Home';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { useState } from 'react';
import LoadingLocal from 'components/LoadingLocal';
import { useGetAllCatLevelThreeQuery } from 'features/Category/category.service';
import SkeletonComp from 'components/Skeleton';

const Categories = () => {
  const nameCat = useSelector((state: RootState) => state.categoriesState.nameCatgory);
  const nameCatC2 = useSelector((state: RootState) => state.categoriesState.nameCatgoryC2);
  const nameCatC3 = useSelector((state: RootState) => state.categoriesState.nameCatgoryC3);

  const [pageSize, setPageSize] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const categories = useGetAllCatLevelThreeQuery();
  const idCategory = useSelector((state: RootState) => state.categoriesState.idCatgory);
  const { data, isFetching, isSuccess } = useGetAllDataByIdCatQuery({
    idCategory,
    pageSize,
    currentPage,
  });
  console.log(data);
  const handleTitle = () => {
    if (nameCat && nameCatC2 && nameCatC3) {
      return nameCatC3;
    } else if (nameCat && nameCatC2 && !nameCatC3) {
      return nameCatC2;
    } else {
      return nameCat;
    }
  };
  return (
    <div className="mx-auto max-w-7xl text-darkLight">
      <section className="my-4">
        <BreadcrumbComponent nameCat={nameCat} nameCatC2={nameCatC2} nameCatC3={nameCatC3} />
      </section>
      <section>
        <h1 className="text-2xl font-extrabold ">
          Tất cả các khóa học <span className="uppercase">{handleTitle()}</span>
        </h1>
        <div className="my-10 flex items-center justify-between space-x-3 text-lg font-bold">
          <div className="flex space-x-3">
            <div className="flex cursor-pointer items-center space-x-3 border-2 border-gray-500 px-4 py-3">
              <IonIcon name="filter" />
              <p>Bộ lọc</p>
            </div>
            <select className="flex w-60 items-center space-x-3 border-2 border-gray-500 px-4 py-3">
              <option value="">Sắp xếp theo</option>
              <option value="">Phổ biến nhất</option>
              <option value="">Đánh giá cao nhất</option>
              <option value="">Mới nhất</option>
            </select>
          </div>
          <p className="">{data?.totalCourseCount} kết quả</p>
        </div>
      </section>
      <section className="flex">
        <div className="w-[25%] space-y-10 ">
          <div className="filter-1">
            <h3 className="mb-3 text-lg font-bold">Giá</h3>
            <div className="flex flex-col ">
              <Checkbox id="free" label="Miễn phí" />
              <Checkbox id="fee" label="Trả phí" />
            </div>
          </div>
          <div className="filter-2">
            <h3 className="mb-3 text-lg font-bold">Xếp hạng</h3>
            <div className="flex flex-col">
              <Radio id="4.5" name="type" label="Từ 4.5 sao trở lên" />
              <Radio id="4" name="type" label="Từ 4.0 sao trở lên" />
              <Radio id="3.5" name="type" label="Từ 3.5 sao trở lên" />
              <Radio id="3" name="type" label="Từ 3.0 sao trở lên" />
            </div>
          </div>
          <div className="filter-3">
            <h3 className="mb-3 text-lg font-bold">Thời lượng video</h3>
            <div className="flex flex-col">
              <Checkbox id="rank_1" label="Từ 0-1 giờ" />
              <Checkbox id="rank_3" label="Từ 1-3 giờ" />
              <Checkbox id="rank_6" label="Từ 3-6 giờ" />
              <Checkbox id="rank_17" label="Từ 6-17 giờ" />
              <Checkbox id="rank_more_17" label="Hơn 17 giờ" />
            </div>
          </div>
          <div className="filter-3">
            <h3 className="mb-3 text-lg font-bold">Chủ đề</h3>
            <div className="flex flex-col">
              {!categories.isFetching &&
                categories?.data?.map((item: any, index: number) => {
                  return <Checkbox key={index} id="topic" label={item.name} />;
                  // item.submenu.map((data: any, subIndex: number) => {
                  // });
                })}
            </div>
          </div>
        </div>
        <div className="w-[80%]">
          <h1 className="text-center text-2xl font-bold text-gray-300">
            {!isFetching && data?.totalCourseCount == 0 && 'Không tìm thấy khóa học'}
          </h1>
          <div className={`${!isFetching && 'grid h-fit grid-cols-3 gap-3'}`}>
            {isFetching ? (
              <SkeletonComp />
            ) : (
              data?.data?.map((item: ICourse, index: number) => {
                return <CourseComponents key={index} data={item} />;
              })
            )}
          </div>
          <div className="my-10 flex justify-center">
            {!isFetching && data?.totalCourseCount !== 0 && (
              <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={data?.totalPage}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
