import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { useUpdateProfileMutation } from 'features/Auth/auth.service';
import Loading from 'components/Loading';
import { toast } from 'react-toastify';
import { update } from 'features/Auth/auth.slice';
import { IUserInfo } from 'types/User';
type UserOmit = Omit<IUserInfo, 'createdAt' | 'updatedAt'>;

const initialvalues: UserOmit = {
  uid: '',
  displayName: '',
  email: '',
  photoURL: '',
  phoneNumber: '',
  role: '',
  active: true,
  // linkSocial: [],
  accessToken: '',
};
const EditProfile = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<UserOmit>(initialvalues);
  const [upload, setUpload] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const userCre = useSelector((state: RootState) => state.auth.currentUser);
  const [updateProfile, isPending] = useUpdateProfileMutation();

  useEffect(() => {
    document.title = 'Trang cá nhân';
    if (userCre) {
      setFormData(userCre); // Set the formData state once userCre is available
    }
  }, [userCre]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataFormat = new FormData();
    formDataFormat.append('uid', formData.uid);
    formDataFormat.append('displayName', formData.displayName);
    formDataFormat.append('phoneNumber', formData.phoneNumber);
    formDataFormat.append('photoURL', formData.photoURL);
    if (upload !== null) {
      formDataFormat.append('photoURLNew', upload);
    }
    try {
      console.log(formDataFormat);

      await updateProfile(formDataFormat).unwrap();
      dispatch(update(formData));
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
    } catch (err) {
      toast.error('Chỉnh sửa thất bại', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      console.log(err);
    }
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
                {imagePreviewUrl ? (
                  <img
                    className="h-32 w-32 rounded-full object-cover shadow-border-blur"
                    src={imagePreviewUrl}
                    alt="Preview"
                  />
                ) : (
                  <img
                    className="h-32 w-32 rounded-full object-cover shadow-border-blur"
                    src={formData?.photoURL}
                    alt=""
                  />
                )}
                <div className="text-xl font-bold">
                  <h3>Avatar</h3>
                  <p className="text-lg font-medium">
                    Nên là ảnh vuông, chấp nhận các tệp: <br /> JPG, PNG hoặc GIF.
                  </p>
                </div>
              </div>
              <div className="">
                <input
                  id="upload"
                  className="w-64 border-[1px]"
                  hidden
                  onChange={(event) => {
                    const selectedFile = event.target.files?.[0];
                    if (selectedFile) {
                      setUpload(selectedFile);

                      // Create a temporary URL for the selected image and set it as the image preview
                      const previewUrl = URL.createObjectURL(selectedFile);
                      setImagePreviewUrl(previewUrl);
                    }
                  }}
                  type="file"
                  placeholder="Đổi ảnh avatar"
                />
                <label
                  htmlFor="upload"
                  className="rounded-md bg-org px-4 py-3 text-white transition-all hover:border-[1px] hover:border-org hover:bg-white hover:text-org"
                >
                  Đổi ảnh
                </label>
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
              <div className="w-full">
                <h3 className="text-xl font-bold">Link Facebook</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  placeholder="Nhập link Facebook của bạn"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">Link Twitter</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  placeholder="Nhập link Twitter của bạn"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">Link LinkedIn</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  placeholder="Nhập link LinkedIn của bạn"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">Link YouTube</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  placeholder="Nhập link YouTube của bạn"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold">Link Website</h3>
                <input
                  type="text"
                  className="mt-3 w-full rounded-lg text-lg font-medium"
                  placeholder="Nhập link Website của bạn"
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
