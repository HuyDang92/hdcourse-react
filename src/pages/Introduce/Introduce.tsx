import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import styles from './Introduce.module.css';

const cx = className.bind(styles);

const Introduce = () => {
  useEffect(() => {
    document.title = 'Giới thiệu'; // Thay đổi tiêu đề tại đây
  }, []);
  return (
    <div className="h-[100vh]">
      <div>Giới thiệu</div>
    </div>
  );
};

export default Introduce;
