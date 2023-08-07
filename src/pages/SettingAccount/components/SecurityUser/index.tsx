import { Input } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';

const EditProfile = () => {
  const userCre = useSelector((state: RootState) => state.auth.currentUser);

  useEffect(() => {
    document.title = 'Trang cá nhân';
  }, []);
  return (
    <div className="">
      <div className="relative my-3">
        <form>
          {/* <div className="bg-blur-lg relative space-y-10 rounded-2xl bg-white p-5 px-10 shadow-border-blur">
            <h1 className="text-lg font-bold uppercase">Thông tin cơ bản</h1>
            <div className="info relative flex items-center justify-between space-x-5">
              <div className="flex items-center space-x-5 ">
                <img
                  className="h-32 w-32 rounded-full object-cover shadow-border-blur"
                  src={userCre?.photoURL}
                  alt=""
                />
                <div className="text-xl font-bold">
                  <h3>Avatar</h3>
                  <p className="text-lg font-medium">
                    Nên là ảnh vuông, chấp nhận các tệp: <br /> JPG, PNG hoặc GIF.
                  </p>
                </div>
              </div>
              <div className="">
                <input className="w-64 border-[1px]" type="file" placeholder="Đổi ảnh avatar" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="w-full">
                <h3 className="text-xl font-bold">Họ tên</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  value={userCre?.displayName}
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">Email</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg border-0 bg-blue-gray-100 text-lg font-medium"
                  value={userCre?.email}
                  disabled
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">SDT</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  value={userCre?.phoneNumber}
                  placeholder="Thêm số điện thoại"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">Bio</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  value={userCre?.phoneNumber}
                  placeholder="Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của bạn."
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button border rounded_md primary>
                Lưu
              </Button>
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
