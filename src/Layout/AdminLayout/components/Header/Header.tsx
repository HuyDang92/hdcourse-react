import IonIcon from '@reacticons/ionicons';
import Breadcrumbs from './components/Breadcrumbs';
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
        <DropdownInfo data={userData} />
      </div>
    </header>
  );
};

export default Aside;
