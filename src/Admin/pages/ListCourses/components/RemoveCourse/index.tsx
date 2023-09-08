import { Fragment, useState } from 'react';
import { Button, Input, Radio } from '@material-tailwind/react';
import { useDeleteUserMutation } from 'features/Auth/auth.service';
import Loading from '../../../../../components/Loading';
import { useDispatch } from 'react-redux';
import { deleteUserState } from '../../../../../features/Admin/Manager.slice';

const RemoveUser = ({ data, setOpen, sendMess }: any) => {
  const dispatch = useDispatch();

  const [deleteUser, isPending] = useDeleteUserMutation();

  const handleCancel = () => {
    setOpen(false);
  };
  const handleRemoveUser = async () => {
    dispatch(deleteUserState(true));
    const result = await deleteUser(data.uid);
    if (result) {
      sendMess(true, 'Xóa người dùng thành công!');
      setOpen(false);
      dispatch(deleteUserState(false));
    }
  };

  return (
    <div className="">
      {isPending.isLoading && <Loading> Đang xử lí ... </Loading>}
      <h1 className="mb-5 text-lg font-bold uppercase">Xóa người dùng</h1>
      <p>Bạn chắc chán muốn xóa người dùng này (xóa vĩnh viễn)</p>
      <div className="mt-5 flex justify-end">
        <Button variant="text" color="orange" onClick={handleCancel} className="mr-1">
          <span>Hủy</span>
        </Button>
        <Button onClick={handleRemoveUser} className="bg-org">
          Xóa
        </Button>
      </div>
    </div>
  );
};
export default RemoveUser;
