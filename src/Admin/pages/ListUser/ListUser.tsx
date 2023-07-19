import { useEffect, useState } from 'react';
import TableList from 'Admin/components/TableList';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { CardHeader, CardBody, CardFooter, Input, Typography } from '@material-tailwind/react';
import DialogComponent from '../../components/Dialog';
import AddUser from './components/AddUser';
import { useGetAllUser, usePagination } from 'hooks/useGetData';
import { IUserInfo } from 'types/User';
import PaginationAdmin from '../../components/Pagination';
import Loading from 'Admin/components/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListCategory = () => {
  const [mess, setMess] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number>(3);
  const [userData, setUserData] = useState<Omit<IUserInfo, 'accessToken'>[]>([]);
  const [filteredData, setFilteredData] = useState<Omit<IUserInfo, 'accessToken'>[]>([]);
  const { getAllUser } = useGetAllUser();
  const { data, isPending, totalPages, goToPreviousPage, goToNextPage } = usePagination(
    'users',
    selectedValue,
    userData.length
  );

  useEffect(() => {
    getAllUser('users').then((data) => {
      if (data) {
        setUserData(data);
      }
    });
  }, []);
  useEffect(() => {
    document.title = 'Danh sách danh mục';
    if (!isPending) {
      setFilteredData(data);
    }
  }, [!isPending]);

  const handleSearchData = (value: string) => {
    if (value) {
      const filteredData = userData.filter((user) => user.email.includes(value));
      setFilteredData(filteredData);
    } else {
      setFilteredData(data); // Gán lại filteredData bằng userData ban đầu
    }
  };
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
  const handleSelectChange = (event: any) => {
    const newValue = parseInt(event.target.value); // Chuyển đổi giá trị từ chuỗi sang số
    setSelectedValue(newValue); // Cập nhật giá trị khi có thay đổi trong phần tử <select>
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
                <select
                  name="pageSize"
                  className="mt-5 rounded-lg border-2 border-gray-200"
                  id=""
                  value={selectedValue.toString()} // Chuyển đổi giá trị từ số sang chuỗi khi đặt vào phần tử <select>
                  onChange={handleSelectChange} // Bắt sự kiện khi có thay đổi trong phần tử <select>
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
                <p className="mt-3 text-lg font-medium">Số mục mỗi trang</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <div className="w-full md:w-72">
                <Input
                  label="Tìm kiếm người dùng theo email"
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
        <CardBody className="p-0">
          {!isPending ? <TableList data={filteredData} /> : <Loading />}
        </CardBody>
        <CardFooter className="flex justify-center">
          <PaginationAdmin
            totalPages={totalPages}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
        </CardFooter>
      </div>
    </div>
  );
};

export default ListCategory;
