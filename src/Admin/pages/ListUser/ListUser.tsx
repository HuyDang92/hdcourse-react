import { useEffect, useState } from 'react';
import TableList from 'Admin/components/TableList';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { CardHeader, CardBody, CardFooter, Input, Typography } from '@material-tailwind/react';
import DialogComponent from '../../components/Dialog';
import AddUser from './components/AddUser';
import { useGetAllUser } from 'hooks/useAuth';
import { IUserInfo } from 'types/User';
import PaginationAdmin from '../../components/Pagination';
import Loading from 'Admin/components/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ListCategory = () => {
  useEffect(() => {
    document.title = 'Danh sách danh mục';
  }, []);
  const [mess, setMess] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>('');
  const [userData, setUserData] = useState<Omit<IUserInfo, 'accessToken'>[]>([]);
  const [filteredData, setFilteredData] = useState<Omit<IUserInfo, 'accessToken'>[]>([]);

  const handleToast = (value: any, title: string) => {
    setMess(value);
    toast.success(title, {
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
  const { getAllUser, isPending, error } = useGetAllUser();

  useEffect(() => {
    getAllUser().then((data) => {
      if (data) {
        setUserData(data);
        setFilteredData(data);
      }
    });
  }, []);

  const handleSearchData = (value: string) => {
    if (value) {
      const filteredData = userData.filter((user) => user.email.includes(value));
      setFilteredData(filteredData);
    } else {
      setFilteredData(userData); // Gán lại filteredData bằng userData ban đầu
    }
  };

  return (
    <div className="">
      <ToastContainer />

      <div className="h-full w-full rounded-2xl shadow-border-full">
        <CardHeader floated={false} shadow={false} className="rounded-none p-5 pb-0 pt-8">
          <div className="flex items-start justify-between gap-8">
            <div className="">
              <Typography variant="h4" color="blue-gray">
                Danh sách người dùng
              </Typography>
              <div className="flex items-center space-x-3">
                <select name="" className="mt-5 rounded-lg border-2 border-gray-200" id="">
                  <option value="">5</option>
                  <option value="">10</option>
                  <option value="">15</option>
                  <option value="">20</option>
                </select>
                <p className="mt-3 text-lg font-medium">Số mục mỗi trang</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <div className="w-full md:w-72">
                <Input
                  label="Tìm kiếm user theo email"
                  onChange={(value) => handleSearchData(value.target.value)}
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>

              <DialogComponent add={true} remove={false} detail={false}>
                <AddUser sendMess={handleToast} setOpen />
              </DialogComponent>
            </div>
          </div>
        </CardHeader>
        <CardBody className='p-0'>{!isPending ? <TableList data={filteredData} /> : <Loading />}</CardBody>
        <CardFooter className='flex justify-center'>
          <PaginationAdmin />
        </CardFooter>
      </div>
    </div>
  );
};

export default ListCategory;
