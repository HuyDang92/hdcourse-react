import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';

const ProfileUser = () => {
  const userCre = useSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    document.title = 'Trang cá nhân';
  }, []);
  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative my-5">
        <div className="cover ">
          <img
            className="h-[30vh] w-full rounded-3xl object-cover"
            src="https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
            alt=""
          />
          <div className="bg-blur-lg relative mx-10 translate-y-[-50%] rounded-2xl bg-white bg-opacity-70 p-5 shadow-border-blur backdrop-blur-lg">
            <div className="info flex items-center space-x-5">
              <img className="rounded-xl shadow-border-blur w-24 h-24 object-cover" src={userCre?.photoURL} alt="" />
              <p className="text-3xl font-bold">{userCre?.displayName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
