import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'firebase.jsx';
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { login, logout } from './auth.slice';
import { useAddUserMutation, useGetUserByIdMutation } from 'features/Auth/auth.service';

const AuthState = ({ children }: any) => {
  const dispatch = useDispatch();
  const [getOneUserById] = useGetUserByIdMutation();
  const [addUserById] = useAddUserMutation();
  // const { addUserById } = useAddUser();

  useEffect(() => {
    const handleAuthStateChanged = async (user: any) => {
      if (user && user.emailVerified === false) {
        return;
      }
      if (user) {
        const userInfo = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          active: user.emailVerified,
        };
        try {
          // Lấy token trả về
          const token = await user.getIdToken();

          if (user.displayName && user.email && user.photoURL) {
            const { data }: any = await getOneUserById({ uid: user.uid });
            if (data) {
              // Nếu người dùng cũ thì lấy role sẵn từ database
              const userStateOld = { ...userInfo, role: data.role, accessToken: token };
              dispatch(login(userStateOld));
            } else {
              // Nếu người dùng mới thì lấy role mặc định là user
              const userSetInfo = {
                ...userInfo,
                role: 'user',
              };
              await addUserById(userSetInfo);
              const userStateNew = { ...userInfo, role: 'user', accessToken: token };
              dispatch(login(userStateNew));
            }
          }
        } catch (error) {
          console.error('Lỗi đăng nhập:', error);
          return;
        }
      } else {
        dispatch(logout());
      }
    };

    return onAuthStateChanged(auth, handleAuthStateChanged);
  }, []);

  return <>{children}</>;
};
export default AuthState;
