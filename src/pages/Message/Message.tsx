import { useEffect, useState } from 'react';
import background from 'assets/bglogin.png';
import Button from 'components/Button';
import Loading from 'components/Loading';
import { useSelector } from 'react-redux';
import IonIcon from '@reacticons/ionicons';
import { RootState } from 'stores/store';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';

const Message = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    document.title = 'Tin nhắn';
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <div className="mx-auto my-5 max-w-7xl rounded-2xl p-5 text-darkLight shadow-border-full">
      <h1 className="pb-5 text-2xl font-bold">Tin nhắn</h1>
      <div className="flex">
        <div className="w-[30%] pe-5 text-center text-lg font-medium">
          <Input
            label="Tìm kiếm đánh giá"
            icon={<IonIcon name="search" className="pe-2 text-xl text-org" />}
          />
          <p className="py-5 text-gray-400">Bạn không có tin nhắn nào</p>
        </div>
        <div className="w-[70%] border-l-2 ps-5 text-center text-lg font-medium">
          <p className="py-5 text-gray-400">
            Ghi danh vào khóa học có trả phí để bật tính năng nhắn tin trực tiếp với giảng viên.
          </p>
          <Link to="/">
            <Button border rounded_md>
              Xem khóa học
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
