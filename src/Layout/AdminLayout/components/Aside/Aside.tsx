import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import Button from 'components/Button';
import logo from 'assets/logo/logo.svg';

const Aside = () => {
  return (
    <aside className="w-60">
      <div className="">
        <Link to="/">
          <div className=" flex space-x-4 ">
            <img src={logo} className="w-7" alt="logo" />
            <p>
              <h2 className="text-2xl font-semibold text-org">
                HD<span>Course</span>
              </h2>
              <span className="text-sm font-semibold text-org">Admin</span>
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
