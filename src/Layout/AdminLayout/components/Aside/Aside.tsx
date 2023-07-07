import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import logo from 'assets/logo/logo.svg';
import DropdownMenu from './components/DropdownMenu';
const Aside = () => {
  return (
    <aside className="h-[100vh]">
      <div className="border-b-[1px] pb-5">
        <Link to="/">
          <div className=" flex space-x-4 ">
            <img src={logo} className="w-7" alt="logo" />
            <div>
              <h2 className="text-2xl font-semibold text-org">
                HD<span>Course</span>
              </h2>
              <span className="text-sm font-semibold text-org">Admin</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="pt-5">
        <h2 className="p-5 pt-0 text-gray-600 font-bold">MENU</h2>
        <DropdownMenu />
      </div>
    </aside>
  );
};

export default Aside;
