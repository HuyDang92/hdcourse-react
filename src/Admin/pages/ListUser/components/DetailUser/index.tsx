import { Fragment, useState } from 'react';
import { Avatar, Button } from '@material-tailwind/react';
import { IUserInfo } from 'types/User';

interface IChildProps {
  data: Omit<IUserInfo, 'accessToken'>;
  setOpen: any;
}
const DetailUser: React.FC<IChildProps> = ({ data, setOpen }) => {
  const handleDetailUser = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <h1 className="mb-5 text-lg font-bold uppercase">Thông tin người dùng</h1>
      <div className="space-y-5">
        <div className="flex items-center space-x-3 rounded-2xl border-2 p-4">
          <Avatar src={data.photoURL} alt="avatar" withBorder={true} className="h-20 w-20" />
          <div>
            <p className="text-3xl font-bold">{data.displayName}</p>
            <p className="text-xl font-semibold">{data.email}</p>
          </div>
        </div>
        <div className="rounded-2xl border-2 p-4 font-medium">
          <div className="space-y-5">
            <p className="flex justify-between">
              Tên: <span>{data.displayName}</span>
            </p>
            <p className="flex justify-between">
              Email: <span>{data.email}</span>
            </p>
            <p className="flex justify-between">
              SDT: <span>{data.phoneNumber ? `${data.phoneNumber}` : 'Chưa có'}</span>
            </p>
            <p className="flex justify-between">
              Vai trò: <span className="uppercase">{data.role}</span>
            </p>
            <p className="flex justify-between">
              Trạng thái:
              <span className="">{data.active ? 'Đã xác thực' : 'Chưa xác thực'}</span>
            </p>
            {/* <p className="flex justify-between">
              Ngày tham gia:
              <span className="uppercase">
                {new Date(data.createdAt?.toDate()).toLocaleString()}
              </span>
            </p>
            <p className="flex justify-between">
              Ngày chỉnh sửa mới nhất:
              <span className="uppercase">
                {new Date(data.updatedAt?.toDate()).toLocaleString()}
              </span>
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <Button variant="text" color="orange" onClick={handleDetailUser} className="mr-1">
          <span>Đóng</span>
        </Button>
      </div>
    </div>
  );
};
export default DetailUser;
