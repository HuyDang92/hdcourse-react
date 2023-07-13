import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { IUserInfo } from 'types/User';
import { useDispatch } from 'react-redux';
import { useSignOut } from 'hooks/useAuth';
import { logout } from 'features/Auth/auth.slice';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
interface IChildProps {
  data: IUserInfo;
}
const DropdownInfo: React.FC<IChildProps> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signout, error } = useSignOut();

  const handleLogOut = async () => {
    await signout();
    dispatch(logout);
    localStorage.removeItem('userInfo');
    navigate('/login');
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex border-0">
          <img className="h-8 w-8 rounded-full object-cover" src={data.photoURL} alt="avt" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <div className="flex items-center space-x-3 px-4 py-2">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={data.photoURL}
                  alt="avt"
                />
                <div className="s">
                  <h3 className="text-lg font-semibold text-darkLight">{data.displayName}</h3>
                  <span></span>
                </div>
              </div>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Trang cá nhân
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Cài đặt
                </a>
              )}
            </Menu.Item>
            <div onClick={handleLogOut} className="px-4 py-2">
              <Button width_full primary rounded_md>
                Đăng xuất
              </Button>
            </div>
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'text-md block w-full px-4 py-2 text-left'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default DropdownInfo;
