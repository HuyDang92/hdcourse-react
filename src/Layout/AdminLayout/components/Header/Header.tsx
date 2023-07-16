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
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import Notification from 'components/Notification';
const Aside = () => {
  const currentUserAdmin = useSelector((state: RootState) => state.auth.currentUser);
  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    if (!currentUserAdmin) {
      setUserData(null);
    } else {
      setUserData(currentUserAdmin);
    }
  }, []);
  return (
    <header className="flex justify-between pb-5">
      <Breadcrumbs />
      <div className="flex items-center space-x-5 text-gray-500">
        <InputSearch />
        <IonIcon name="settings-outline" className="text-2xl" />
        <Notification />
        {/* <Badge color="info" badgeContent={2}>
          <IonIcon name="notifications" className="text-2xl" />
        </Badge> */}
        <DropdownInfo data={userData} />
      </div>
    </header>
  );
};

export default Aside;
