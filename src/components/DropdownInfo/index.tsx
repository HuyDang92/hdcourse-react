import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Button from 'components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { IUserInfo } from 'types/User';
import { useSignOut } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
interface IChildProps {
  data: IUserInfo;
  role?: string;
}
const DropdownInfo: React.FC<IChildProps> = ({ data, role }) => {
  const navigate = useNavigate();
  const { signout } = useSignOut();

  const userCre = useSelector((state: RootState) => state.auth.currentUser);
  const slug = userCre && userCre.email.split('@')[0];

  const handleLogOut = async () => {
    await signout();
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[22rem] origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-2 py-2">
            <Menu.Item>
              <div className="flex items-center space-x-3 p-3">
                <img
                  className="h-14 w-14 rounded-full object-cover"
                  src={data.photoURL}
                  alt="avt"
                />
                <div className="">
                  <h3 className="text-lg font-semibold text-darkLight">{data.displayName}</h3>
                  <div className="text-gray-400">{data.email}</div>
                </div>
              </div>
            </Menu.Item>
            {role === 'admin' ? (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/admin"
                    target="_blank"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'text-md block px-4 py-3'
                    )}
                  >
                    Quản lí trang web
                  </a>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`/user/${slug}`}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'text-md block px-4 py-3'
                    )}
                  >
                    Trang cá nhân
                  </Link>
                )}
              </Menu.Item>
            )}
            <hr />
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/user/${slug}`}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Khóa học của tôi
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Danh sách yêu thích
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Giỏ hàng
                </Link>
              )}
            </Menu.Item>
            <hr />
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Thông báo
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Tin nhắn
                </Link>
              )}
            </Menu.Item>
            <hr />
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/user/edit-profile"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Chỉnh sửa hồ sơ
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/user/edit-profile"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Cài đặt tài khoản
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'text-md block px-4 py-3'
                  )}
                >
                  Trở giúp
                </Link>
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
