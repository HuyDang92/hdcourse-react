import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import IonIcon from '@reacticons/ionicons';
import EditProfile from './components/EditProfile';
import SecurityUser from './components/SecurityUser';
import { ToastContainer, toast } from 'react-toastify';

export default function Example() {
  const userCre = useSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    document.title = 'Trang cá nhân';
  }, []);

  const data = [
    {
      label: 'Cài đặt tài khoản',
      icon: 'person-circle-outline',
      value: 'settingAccount',
      Comp: EditProfile,
    },
    {
      label: 'Cài đặt thông báo',
      icon: 'notifications-outline',
      value: 'settingNoti',
      Comp: SecurityUser,
    },
    {
      label: 'Bảo mật',
      icon: 'shield-half-outline',
      value: 'security',
      Comp: SecurityUser,
    },
  ];

  return (
    <div className="mx-auto mb-5 max-w-7xl text-darkLight">
      <h1 className="my-10 text-3xl font-semibold">Cài đặt</h1>
      <Tabs value="settingAccount" orientation="vertical">
        <TabsHeader className="w-60 bg-gray-200 p-2">
          {data.map(({ label, value }) => (
            <Tab className="justify-start p-3 text-lg" key={value} value={value}>
              <div className="flex items-center justify-start space-x-3">
                <IonIcon name="person-circle-outline" />
                <span>{label}</span>
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, Comp }) => (
            <TabPanel key={value} value={value} className="py-0">
              <Comp />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
