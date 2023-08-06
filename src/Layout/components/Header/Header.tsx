import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import IonIcon from '@reacticons/ionicons';
import ButtonComponents from 'components/Button';
import InputSearch from 'components/InputSearch';
import logo from 'assets/logo/logo.svg';
import Dropdown from './components/Dropdown';
import DropdownInfo from '../../../components/DropdownInfo';
import Notification from '../../../components/Notification';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { Tooltip, Button } from '@material-tailwind/react';

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
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
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // state user info
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const [userData, setUserData] = useState<any>({});
  const [role, setRole] = useState<string>('none');

  useEffect(() => {
    if (!currentUser) {
      setUserData(null);
    } else {
      if (currentUser.role === 'admin') {
        setRole('admin');
      } else {
        setRole('user');
      }
      setUserData(currentUser);
    }
  }, [currentUser]);
  const userCre = useSelector((state: RootState) => state.auth.currentUser);
  const slug = userCre && userCre.email.split('@')[0];
  return (
    <header
      className={`border-b-[1px] border-gray-200 bg-white shadow-md transition-all ${
        isNavbarVisible ? 'sticky top-0 z-30' : 'block'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3 ">
        <div className="flex items-center space-x-5">
          <h1 className="flex space-x-2 text-3xl font-bold text-org">
            <img src={logo} className="w-7" alt="logo" />
            <Link to="/">
              HD<span className="text-darkLight">Course</span>
            </Link>
          </h1>
          <Dropdown />
          <InputSearch />
        </div>
        {userData !== null ? (
          <div className="flex items-center space-x-6 text-org">
            <div className="flex items-center space-x-3">
              <Link to={`/user/${slug}/wishList`}>
                <Tooltip
                  className="border border-blue-gray-50 bg-white px-4 py-3 text-org shadow-xl shadow-black/10"
                  content="Dánh sách yêu thích"
                  placement="bottom"
                >
                  <Button className="bg-white p-0 shadow-none hover:shadow-none">
                    <IonIcon
                      name="heart-outline"
                      className="rounded-full p-2 text-2xl text-org transition-all hover:bg-gray-100"
                    />
                  </Button>
                </Tooltip>
              </Link>
              <Tooltip
                className="border border-blue-gray-50 bg-white px-4 py-3 text-org shadow-xl shadow-black/10"
                content="Giỏ hàng"
                placement="bottom"
              >
                <Button className="bg-white p-0 shadow-none hover:shadow-none">
                  <IonIcon
                    name="cart-outline"
                    className="rounded-full p-2 text-2xl text-org transition-all hover:bg-gray-100"
                  />
                </Button>
              </Tooltip>
              <Notification />
            </div>
            <DropdownInfo data={userData} role={role} />
          </div>
        ) : (
          <div className="flex items-center space-x-4 text-org">
            <IonIcon name="cart-outline" className="icon__hover text-3xl" />
            <Link to="/login">
              <ButtonComponents rounded_full border>
                Đăng nhập
              </ButtonComponents>
            </Link>
            <Link to="/signup">
              <ButtonComponents rounded_full primary>
                Đăng ký
              </ButtonComponents>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
