// import page404 from 'assets/404page.svg';
import page404 from 'assets/404Page.mp4';
import { Link } from 'react-router-dom';

function NotFound() {
  // const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="thumb flex justify-center">
        {/* <img className=" h-[100vh] w-[100vw] object-contain" src={page404} alt="" /> */}
        <video src={page404} className="" loop autoPlay alt="404 Not Found"></video>
      </div>
      <button className="absolute bottom-0 left-[50%] -translate-x-[50%] rounded-sm border-2 border-gray-400 p-2 transition-all hover:border-gray-600">
        <Link to={'/'} className="uppercase text-gray-400 transition-all hover:text-gray-600">
          Trang chủ
        </Link>
      </button>
    </div>
  );
}

export default NotFound;
