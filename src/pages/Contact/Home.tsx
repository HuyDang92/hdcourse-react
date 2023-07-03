import { useEffect, useState } from 'react';
import { useFetchCategoriesQuery } from 'features/Home/home.service';
import className from 'classnames/bind';
import styles from './Home.module.css';

const cx = className.bind(styles);

const Home = () => {
  useEffect(() => {
    document.title = 'HDCourse'; // Thay đổi tiêu đề tại đây
  }, []);
  return (
    <div className="h-[100vh]">
      <div></div>
    </div>
  );
};

export default Home;
