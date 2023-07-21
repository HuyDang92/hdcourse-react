import { useParams } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import BreadcrumbComponent from './components/Breakcrumb';
import { Radio, Checkbox, Button } from '@material-tailwind/react';
import { useFetchCategoriesQuery } from 'features/Category/category.service';
import CourseComponents from 'components/Course';
import Pagination from 'components/Panination';
import { ICourse } from 'types/Home';

const data: ICourse[] = [
  {
    thumb: 'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
    title: 'Course 2',
    author: 'Author 2',
    rating: 4.0,
    ratingCount: 50,
    price: 19.99,
    description: 'Course 2 description',
    tree: false,
    totalLecture: 8,
    totalStudent: 300,
    totalTimeVideo: 90,
    createdAt: new Date('2022-03-01'),
    updatedAt: new Date('2022-04-01'),
  },
  {
    thumb: 'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
    title: 'Course 3',
    author: 'Author 3',
    rating: 4.8,
    ratingCount: 200,
    price: 39.99,
    description: 'Course 3 description',
    tree: true,
    totalLecture: 12,
    totalStudent: 800,
    totalTimeVideo: 150,
    createdAt: new Date('2022-05-01'),
    updatedAt: new Date('2022-06-01'),
  },
  {
    thumb: 'https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&uid=R54452486&semt=sph',
    title: 'Course 4',
    author: 'Author 4',
    rating: 4.2,
    ratingCount: 80,
    price: 24.99,
    description: 'Course 4 description',
    tree: false,
    totalLecture: 6,
    totalStudent: 200,
    totalTimeVideo: 60,
    createdAt: new Date('2022-07-01'),
    updatedAt: new Date('2022-08-01'),
  },
];

const Categories = () => {
  const { nameCat, nameSubCat } = useParams();
  const catName = nameCat && nameCat.replace(/-/g, ' ');
  const subCatName = nameSubCat && nameSubCat.replace(/-/g, ' ');

  const categories = useFetchCategoriesQuery();

  return (
    <div className="mx-auto max-w-7xl text-darkLight">
      <section className="my-4">
        <BreadcrumbComponent nameCat={subCatName ? subCatName : catName} />
      </section>
      <section>
        <h1 className="text-2xl font-extrabold ">
          Tất cả các khóa học <span className="uppercase">{subCatName ? subCatName : catName}</span>
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
          <p className="">100 kết quả</p>
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
                categories.data?.map((item: any, index: number) => {
                  return <Checkbox key={index} id="topic" label={item.name} />;
                  // item.submenu.map((data: any, subIndex: number) => {
                  // });
                })}
            </div>
          </div>
        </div>
        <div className="w-[80%]">
          <div className=" grid h-fit grid-cols-3 gap-3">
            {data.map((item, index) => (
              <CourseComponents key={index} data={item} />
            ))}
          </div>
          <div className="my-10 flex justify-center">
            <Pagination />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
