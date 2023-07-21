import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { useUpdateProfileMutation } from 'features/Auth/auth.service';
import Loading from 'components/Loading';
import { toast } from 'react-toastify';

interface IProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  phoneNumber: string;
  role: string;
  active: boolean;
  accessToken: string;
}
const initialvalues = {
  displayName: '',
  email: '',
  photoURL: '',
  phoneNumber: '',
};
const EditProfile = () => {
  const userCre = useSelector((state: RootState) => state.auth.currentUser);
  const [formData, setFormData] = useState<any>(initialvalues);
  const [updateProfile, isPending] = useUpdateProfileMutation();

  useEffect(() => {
    document.title = 'Trang cá nhân';
    if (userCre) {
      setFormData(userCre); // Set the formData state once userCre is available
    }
  }, [userCre]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInfo = {
      uid: formData.uid,
      displayName: formData.displayName,
      photoURL:
        'https://firebasestorage.googleapis.com/v0/b/hdcourse-10020.appspot.com/o/courses%2FavtDefault.jpg?alt=media&token=f8fcab19-4e95-40bf-a2df-71014acafa51',
      phoneNumber: formData.phoneNumber,
    };
    await updateProfile(userInfo);
    toast.success('Chỉnh sửa thành công', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <div className="">
      {isPending.isLoading && <Loading />}
      <div className="relative my-3">
        <form onSubmit={handleSubmit}>
          <div className="bg-blur-lg relative space-y-10 rounded-2xl bg-white p-5 px-10 shadow-border-blur">
            <h1 className="text-lg font-bold uppercase">Thông tin cơ bản</h1>
            <div className="info relative flex items-center justify-between space-x-5">
              <div className="flex items-center space-x-5 ">
                <img
                  className="h-32 w-32 rounded-full object-cover shadow-border-blur"
                  src={formData?.photoURL}
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
                  value={formData?.displayName ?? ''}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">Email</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg border-0 bg-blue-gray-100 text-lg font-medium"
                  defaultValue={formData?.email ?? ''}
                  readOnly
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">SDT</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  value={formData?.phoneNumber ?? ''}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="Thêm số điện thoại"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">Bio</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  placeholder="Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của bạn."
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button border rounded_md primary>
                Lưu
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
