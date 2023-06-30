import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import IonIcon from '@reacticons/ionicons';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import Button from 'components/Button';
import logo from 'assets/logo/logo.svg';
import Dropdown from 'components/Dropdown';
const cx = className.bind(styles);
const Header = () => {
  const [isInputFocused, setInputFocused] = useState<boolean>(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setIsNavbarVisible(true); // Cuộn lên, hiển thị navbar
      } else {
        setIsNavbarVisible(false); // Cuộn xuống, ẩn navbar
      }
      setPrevScrollPos(currentScrollPos);
      console.log(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`border-b-[1px] border-gray-200 bg-white shadow-lg transition-all ${
        isNavbarVisible ? 'sticky top-0' : 'block'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3 text-org">
        <h1 className="flex space-x-2 text-4xl font-bold">
          <img src={logo} className="w-7" alt="logo" />
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
          <Link to="/login">
            <Button rounded_full border>
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-200">
        <div className=" mx-auto flex max-w-7xl items-center justify-between">
          <nav className="flex">
            <div className="py-3">
              <Dropdown />
            </div>
            <div className="nav flex items-center space-x-5 ps-10 text-lg">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-org' : '')}>
                Trang chủ
              </NavLink>
              <NavLink to="/introduce" className={({ isActive }) => (isActive ? 'text-org' : '')}>
                Giới thiệu
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-org' : '')}>
                Liên hệ
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
