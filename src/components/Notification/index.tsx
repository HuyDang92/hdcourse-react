import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import { IUserInfo } from 'types/User';
import Badge from '@mui/material/Badge';
import IonIcon from '@reacticons/ionicons';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
// interface IChildProps {
//   data: IUserInfo;
// }
const Notification: React.FC = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onClick={() => setClicked(!clicked)}>
        <Menu.Button className="inline-flex border-0">
          <Badge color="info" badgeContent={2}>
            <IonIcon
              name={`${clicked ? 'notifications' : 'notifications-outline'}`}
              className="rounded-full p-1 text-2xl transition-all hover:bg-gray-200"
            />
          </Badge>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div onClick={() => setClicked(!clicked)} className="py-1">
            <Menu.Item>
              <div className="flex items-center justify-between space-x-3 border-b-[1px] px-4 py-3">
                <p>Thông báo</p>
                <IonIcon name="settings-outline" className="text-2xl" />
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
                  Không có thông báo nào
                </a>
              )}
            </Menu.Item>

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
export default Notification;
