import { useEffect, useState } from 'react';

import className from 'classnames/bind';
import styles from './Home.module.css';

const cx = className.bind(styles);

const Home = () => {
  return (
    <div className="mx-auto w-full px-4 text-white 2xl:container xl:px-10">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
