import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import TabsProfile from './components/TabsProfile';
import { IconButton } from '@material-tailwind/react';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';

const ProfileUser = () => {
  const userCre = useSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    document.title = 'Trang cá nhân';
  }, []);
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="relative my-5 px-5 xl:px-0">
        <div className="cover ">
          <img
            className="h-[15vh] md:h-[20vh] xl:h-[30vh] w-full rounded-3xl object-cover"
            src="https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
            alt=""
          />
          <div className="bg-blur-lg relative mx-4 md:mx-10 translate-y-[-50%] rounded-2xl bg-white bg-opacity-70 p-3 md:p-5 shadow-border-blur backdrop-blur-lg">
            <div className="flex items-center justify-between">
              <div className="info flex items-center space-x-5">
                <img
                  className="md:h-24 h-16 w-16 md:w-24 rounded-xl object-cover shadow-border-blur"
                  src={userCre?.photoURL}
                  alt=""
                />
                <p>
                  <p className="text-xl md:text-3xl font-bold">{userCre?.displayName}</p>
                  <p>Học viên</p>
                </p>
              </div>
              <Link to={'/user/edit-profile'}>
                <IconButton color="white">
                  <IonIcon name="pencil" className="text-xl" />
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="-translate-y-10">
          <TabsProfile />
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
