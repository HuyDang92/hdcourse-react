import { Link } from 'react-router-dom';
import { useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import Button from 'components/Button';

const cx = className.bind(styles);
const Header = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  return (
    <header className="border-b-[1px] border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 text-org">
        <h1 className="text-4xl font-bold">
          <Link to="/">
            HD<span className="text-darkLight">Cours</span>
          </Link>
        </h1>
        <div
          className={`flex items-center overflow-hidden rounded-full border-2 ${
            isInputFocused ? 'border-orange-400' : 'border-gray-200'
          }`}
        >
          <IonIcon
            name="search"
            className={cx('px-4', 'py-3', 'pe-2', 'text-2xl', 'icon-search', 'hover:bg-gray-200')}
          />
          <input
            className={`${cx(
              'searchInput'
            )} w-80 rounded-full border-0 placeholder-gray-400 outline-none focus:border-transparent focus:ring-0`}
            type="text"
            name="nameSearch"
            id="nameSearch"
            placeholder="Tìm kiếm khóa học"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
        </div>
        <div className="flex items-center space-x-5">
          <IonIcon name="cart" className="text-2xl" />
          <Button rounded_full border>
            Đăng nhập
          </Button>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-200">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between">
          <nav className="flex">
            <div className="w-40 py-5  text-org hover:bg-slate-200">
              <div className="flex justify-between">
                <div className="item-center flex space-x-2">
                  <IonIcon name="cube" className="text-2xl" />
                  <h3 className="text-lg font-medium">Chủ đề</h3>
                </div>
                <IonIcon name="chevron-down" className="ps-5 text-2xl" />
              </div>
            </div>
            <div className="nav flex items-center space-x-5 ps-10 text-lg">
              <Link to={'/'}>Trang chủ</Link>
              <Link to={'/'}>Trang chủ</Link>
              <Link to={'/'}>Trang chủ</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
