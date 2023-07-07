import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import Button from 'components/Button';
import logo from 'assets/logo/logo.svg';
import avt from 'assets/avt/defautlAvt.jpg';
import Breadcrumbs from './components/Breadcrumbs';
import { Badge } from '@mui/material';
import InputSearch from 'components/InputSearch';
import DropdownInfo from 'components/DropdownInfo';
import { useEffect, useState } from 'react';
const Aside = () => {
  const [userData, setUserData] = useState<any>({});
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
    <header className="flex justify-between pb-5">
      <Breadcrumbs />
      <div className="flex items-center space-x-4 text-gray-500">
        <InputSearch />
        <IonIcon name="settings" className="text-3xl" />
        <Badge color="info" badgeContent={2}>
          <IonIcon name="notifications" className="text-3xl" />
        </Badge>
        <DropdownInfo data={userData} />
      </div>
    </header>
  );
};

export default Aside;
