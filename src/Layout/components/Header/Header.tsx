import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import IonIcon from '@reacticons/ionicons';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import Button from 'components/Button';
import logo from 'assets/logo/logo.svg';
import Dropdown from './components/Dropdown';
import DropdownInfo from './components/DropdownInfo';
const cx = className.bind(styles);
const navigation = [
  { name: 'Trang chủ', to: '/' },
  { name: 'Giới thiệu', to: '/introduce' },
  { name: 'Liên hệ', to: '/contact' },
];

const Header = () => {
  // sticky header
  const [isInputFocused, setInputFocused] = useState<boolean>(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  // state user info
  const [userData, setUserData] = useState<any>({});

  // sticky header
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

  useEffect(() => {
    const getUserInfo = localStorage.getItem('userInfo');
    if (getUserInfo !== null) {
      const userInfo = JSON.parse(getUserInfo);
      setUserData(userInfo);
    } else {
      setUserData(null);
    }
  }, []);

  return (
    <header
      className={`border-b-[1px] border-gray-200 bg-white shadow-md transition-all ${
        isNavbarVisible ? 'sticky top-0' : 'block'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3 ">
        <div className="flex items-center space-x-5">
          <h1 className="flex space-x-2 text-3xl font-bold text-org">
            <img src={logo} className="w-7" alt="logo" />
            <Link to="/">
              HD<span className="text-darkLight">Cours</span>
            </Link>
          </h1>
          <Dropdown />
          <div
            className={`flex items-center overflow-hidden rounded-full border-2 ${
              isInputFocused ? 'border-org' : 'border-gray-200'
            }`}
          >
            <IonIcon
              name="search"
              className={cx(
                'px-3',
                'py-2',
                'pe-2',
                'text-2xl',
                'text-gray-400',
                'icon-search',
                'transition-all',
                'hover:text-org',
                'hover:bg-gray-200',
                `${isInputFocused ? 'text-org' : ''}`
              )}
            />
            <input
              className={`${cx(
                'searchInput'
              )} w-80 rounded-full border-0 font-medium text-darkLight placeholder-gray-400 outline-none focus:border-transparent focus:ring-0`}
              type="text"
              name="nameSearch"
              id="nameSearch"
              placeholder="Tìm kiếm khóa học"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </div>
        </div>
        {userData !== null ? (
          <div className="flex items-center space-x-3 text-org">
            <IonIcon name="cart" className="text-3xl" />
            <IonIcon name="notifications" className="text-3xl" />
            <DropdownInfo data={userData} />
          </div>
        ) : (
          <div className="flex items-center space-x-3 text-org">
            <IonIcon name="cart" className="text-3xl" />
            <Link to="/login">
              <Button rounded_full border>
                Đăng nhập
              </Button>
            </Link>
            <Link to="/signup">
              <Button rounded_full primary>
                Đăng ký
              </Button>
            </Link>
          </div>
        )}
      </div>
      {/* <div className="border-t-[1px] border-gray-200">
        <div className=" mx-auto flex max-w-7xl items-center justify-between">
          <nav className="flex">
            <div className="py-3">
              <Dropdown />
            </div>
            <div className="nav flex items-center space-x-5 ps-10 text-lg">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'text-org' : '')}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
