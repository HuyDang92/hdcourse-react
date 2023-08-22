import React from 'react';
import { Drawer, IconButton, List, ListItem, ListItemPrefix } from '@material-tailwind/react';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import logo from 'assets/logo/logo.svg';
import ButtonComponents from 'components/Button';
import DropdownMobile from '../DropdownMobile';
import InputSearch from 'components/InputSearch';

interface IChildProps {
  login?: boolean;
}

const MenuMobile: React.FC<IChildProps> = ({ login }) => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div
        className={` bottom-0 left-0 right-0 top-0 z-50 bg-black bg-opacity-50 ${
          !open ? 'hidden' : 'fixed'
        }`}
      ></div>
      <IonIcon
        name="menu-outline"
        onClick={openDrawer}
        className="rounded-full p-2 text-2xl text-org transition-all hover:bg-gray-100"
      />
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <h1 className="flex space-x-2 text-3xl font-bold text-org">
            <img src={logo} className="w-7" alt="logo" />
            <Link to="/">
              HD<span className="text-darkLight">Course</span>
            </Link>
          </h1>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </IconButton>
        </div>

        <List className="space-y-2 px-5">
          <div className="block md:hidden">
            <InputSearch />
          </div>
          <DropdownMobile openParent={open} />
          <ListItem>
            <ListItemPrefix>
              <IonIcon name="help-circle" />
            </ListItemPrefix>
            Trợ giúp
          </ListItem>
          {!login && (
            <div className="space-y-3">
              <Link to="/login">
                <ButtonComponents width_full rounded_full border>
                  Đăng nhập
                </ButtonComponents>
              </Link>{' '}
              <br />
              <Link to="/signup">
                <ButtonComponents width_full rounded_full primary>
                  Đăng ký
                </ButtonComponents>
              </Link>
            </div>
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
};
export default MenuMobile;
