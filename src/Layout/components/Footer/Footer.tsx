import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import './Footer.scss';
import Button from 'components/Button';
import logo from 'assets/logo/logo.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#252831] py-10 text-white ">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div>
          <h3 className="mb-7 flex space-x-4 text-xl uppercase tracking-[0.2rem] text-org">
            <img src={logo} className="w-7" alt="logo" /> <p>Thông tin</p>
          </h3>
          <ul className="listFooter space-y-4">
            <li className="flex space-x-2">
              <IonIcon name="location-sharp" className="text-2xl" />
              <span>FPT Folytechnic, Quận 12, HCM</span>
            </li>
            <li className="flex space-x-2">
              <IonIcon name="call-sharp" className="text-2xl" />
              <span>0932690371</span>
            </li>
            <li className="flex space-x-2">
              <IonIcon name="mail-sharp" className="text-2xl" />
              <span>huydhps25063@fpt.edu.vn</span>
            </li>
          </ul>
          <ul className="listIconFooter mt-5 flex space-x-2">
            <li className="rounded-lg border-2 border-white p-2 pb-0">
              <IonIcon name="logo-twitter" className="text-2xl" />
            </li>
            <li className="rounded-lg border-2 border-white p-2 pb-0">
              <IonIcon name="logo-facebook" className="text-2xl" />
            </li>
            <li className="rounded-lg border-2 border-white p-2 pb-0">
              <IonIcon name="logo-instagram" className="text-2xl" />
            </li>
            <li className="rounded-lg border-2 border-white p-2 pb-0">
              <IonIcon name="logo-linkedin" className="text-2xl" />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="center mb-7 text-xl uppercase tracking-[0.2rem] text-org">Khóa học</h3>
          <ul className="listFooter space-y-4">
            <li className="flex space-x-2">
              <IonIcon name="chevron-forward-sharp" className="text-2xl" />
              <span>Lập trình</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="center mb-7 text-xl uppercase tracking-[0.2rem] text-org">
            Nhận bảng tin
          </h3>
          <p className="mb-3">
            Đăng ký với email của bạn để tham gia danh sách gửi thư của chúng tôi
          </p>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Email"
              className="rounded-lg p-3 text-black focus:border-darkLight focus:ring-0"
            />
            <Button rounded_md primary>
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t-[1px] border-dotted border-gray-300 pt-10 text-center">
        <p>
          © <span className="text-org">HDCourse</span>. All Rights Reserved. Designed by
          <span className="text-org">Đặng Huỳnh Huy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
