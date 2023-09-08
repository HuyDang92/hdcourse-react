import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { CardBody, Chip, CardFooter, Avatar } from '@material-tailwind/react';
import { IUserInfo } from 'types/User';
import DialogComponent from '../../components/Dialog';
import DetailUser from '../../pages/ListUser/components/DetailUser';
import RemoveUser from '../../pages/ListUser/components/RemoveUser';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { orderBy } from 'lodash';

const TABLE_HEAD = ['#', 'Tên', 'Ảnh', 'Giảng viên', 'Mô tả', 'Hành động'];

interface IChildProps {
  data: any;
}
const TableListCourse: React.FC<IChildProps> = ({ data }) => {
  const [mess, setMess] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [funcSort, setFuncSort] = useState<Omit<IUserInfo, 'accessToken'>[]>(data);
  // useEffect(() => {
  //   setFuncSort(data);
  // }, [data]);
  // const handleSortData = (nameSort: string) => {
  //   let sortedData: Omit<IUserInfo, 'accessToken'>[];

  //   switch (nameSort) {
  //     case 'Người dùng':
  //       sortedData = toggle
  //         ? orderBy(data, ['displayName'], ['asc'])
  //         : orderBy(data, ['displayName'], ['desc']);
  //       break;
  //     case 'SDT':
  //       sortedData = toggle
  //         ? orderBy(data, [(user) => !user.phoneNumber, 'phoneNumber'], ['asc', 'asc'])
  //         : orderBy(data, [(user) => !user.phoneNumber, 'phoneNumber'], ['desc', 'desc']);
  //       break;
  //     case 'Trạng thái':
  //       sortedData = toggle
  //         ? orderBy(data, [(user) => user.active, 'name'], ['desc', 'asc'])
  //         : orderBy(data, [(user) => user.active, 'name'], ['asc', 'desc']);
  //       break;
  //     case 'Vai trò':
  //       sortedData = toggle
  //         ? orderBy(data, [(user) => (user.role === 'admin' ? 0 : 1), 'name'], ['asc', 'asc'])
  //         : orderBy(data, [(user) => (user.role === 'admin' ? 0 : 1), 'name'], ['desc', 'desc']);
  //       break;
  //     default:
  //       sortedData = data;
  //       break;
  //   }

  //   setToggle(!toggle);
  //   setFuncSort(sortedData);
  // };

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

  return (
    <div className="h-full w-full">
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <span
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((course: any, index: number) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={index}>
                  <td className={classes}>
                    <span color="blue-gray" className="font-normal">
                      {index + 1}
                    </span>
                  </td>
                  <td className={classes}>
                    <div className="flex w-52 flex-col line-clamp-2">
                      <span color="blue-gray" className="font-normal">
                        {course.title}
                      </span>
                      {/* <span color="blue-gray" className="font-normal opacity-70"></span> */}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <img src={course.thumb} alt={course.title} className="w-[5rem]" />
                      <div className="flex flex-col">
                        <span color="blue-gray" className="font-normal">
                          {course.displayName}
                        </span>
                        <span color="blue-gray" className="font-normal opacity-70">
                          {course.email}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className={classes}>
                    <span color="blue-gray" className="font-normal">
                      {course.author}
                    </span>
                  </td>
                  <td className={classes}>
                    <div className="w-52 line-clamp-2">{course.description}</div>
                  </td> 
                  <td className={classes}>
                    <DialogComponent add={false} remove={true} detail={false}>
                      <RemoveUser sendMess={handleToast} setOpen data={course} />
                    </DialogComponent>
                    <DialogComponent add={false} remove={false} detail={true}>
                      <DetailUser setOpen data={course} />
                    </DialogComponent>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </div>
  );
};
export default TableListCourse;
