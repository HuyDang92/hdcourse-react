import { useEffect, useState } from 'react';

import className from 'classnames/bind';
import styles from './Home.module.css';

const cx = className.bind(styles);

const Home = () => {
  useEffect(() => {
    document.title = 'HDCourse'; // Thay đổi tiêu đề tại đây
  }, []);
  return (
    <div className="">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
