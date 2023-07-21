import { Fragment, useState } from 'react';
import { Button, Input, Radio } from '@material-tailwind/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loading from '../../../../../components/Loading';
import { useCreateUserMutation } from 'features/Auth/auth.service';
import { useDispatch } from 'react-redux';
import { addUserState } from '../../../../../features/Admin/Manager.slice';

interface SignUp {
  name: string;
  phone?: string;
  email: string;
  password: string;
  repassword: string;
  role: string;
}

const AddUser = ({ setOpen, sendMess }: any) => {
  const dispatch = useDispatch();
  const [errServer, setErrServer] = useState<any>(undefined);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [addUserAdmin, isPending] = useCreateUserMutation();
  // const { addUserById } = useAddUser();

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      repassword: '',
      role: 'user',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Tên không được bỏ trống').min(3, 'Tên ít nhất 4 ký tự'),
      email: Yup.string()
        .required('Email không được bỏ trống')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không đúng'),
      password: Yup.string()
        .required('Mật khẩu không được bỏ trống')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          'Tối thiểu 6 ký tự, ít nhất 1 chữ cái và 1 số'
        ),
      repassword: Yup.string()
        .required('Xác nhận mật khẩu không được bỏ trống')
        .oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp'),
    }),
    onSubmit: async (value: SignUp, { resetForm }) => {
      dispatch(addUserState(true));
      try {
        const userInfo = {
          displayName: value.name,
          email: value.email,
          password: value.password,
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/hdcourse-10020.appspot.com/o/courses%2FavtDefault.jpg?alt=media&token=f8fcab19-4e95-40bf-a2df-71014acafa51',
          phoneNumber: value.phone,
          active: false,
          role: value.role,
        };
        const result = await addUserAdmin(userInfo);
        resetForm();
        sendMess(true, 'Thêm người dùng thành công');
        setOpen(false);
        dispatch(addUserState(false));
      } catch (err: any) {
        const { status } = err;
        setErrServer(status);
      }
    },
  });
  return (
    <div className="">
      {isPending.isLoading && <Loading> Đang xử lí ... </Loading>}
      <h1 className="mb-5 text-lg font-bold uppercase">Thêm người dùng</h1>
      {errServer !== undefined && (
        <small className="py-2 text-[12px] text-red-600">Email đã được đăng ký</small>
      )}
      <form onSubmit={formik.handleSubmit} className="mt-2 w-full">
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <Input
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              size="lg"
              label="Họ tên"
            />
            {isSubmitted && formik.errors.name && (
              <small className="text-[12px] text-red-600">{formik.errors.name}</small>
            )}
          </div>
          <div>
            <Input
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
              size="lg"
              label="Số điện thoại"
            />
          </div>
          <div>
            <Input
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              size="lg"
              label="Email"
            />
            {isSubmitted && formik.errors.email && (
              <small className="text-[12px] text-red-600">{formik.errors.email}</small>
            )}
          </div>

          <div>
            <Input
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              type="password"
              size="lg"
              label="Mật khẩu"
            />
            {isSubmitted && formik.errors.password && (
              <small className="text-[12px] text-red-600">{formik.errors.password}</small>
            )}
          </div>
          <div>
            <Input
              value={formik.values.repassword}
              onChange={formik.handleChange}
              name="repassword"
              type="password"
              size="lg"
              label="Xác nhận mật khẩu"
            />
            {isSubmitted && formik.errors.repassword && (
              <small className="text-[12px] text-red-600">{formik.errors.repassword}</small>
            )}
          </div>
          <div className="flex space-x-3">
            <Radio
              id="admin"
              name="role"
              label="Admin"
              value="admin"
              onChange={formik.handleChange}
            />
            <Radio
              id="user"
              name="role"
              label="User"
              value="user"
              onChange={formik.handleChange}
              checked
            />
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Button variant="text" color="orange" onClick={() => setOpen(false)} className="mr-1">
            <span>Hủy</span>
          </Button>
          <Button onClick={() => setIsSubmitted(true)} className="bg-org" type="submit">
            Thêm
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
