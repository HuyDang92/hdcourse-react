import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'firebase.jsx';
import { onIdTokenChanged } from 'firebase/auth';
import { login, logout } from './auth.slice';
import { useAddUser, useGetOneUserQuery } from 'hooks/useAuth';

const AuthState = ({ children }: any) => {
  const dispatch = useDispatch();
  const { getOneUserById } = useGetOneUserQuery();
  const { addUserById } = useAddUser();

  useEffect(() => {
    const handleAuthStateChanged = async (user: any) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        const userInfo = { uid, displayName, email, photoURL };

        try {
          const idTokenResult = await user.getIdTokenResult();
          const { token } = idTokenResult;
          // Lấy token trả về
          if (displayName && email && photoURL) {
            const userExists = await getOneUserById(uid);
            // Gọi id user
            const userSetInfo = { ...userInfo, role: 'user' };
            const userStateNew = { ...userInfo, role: 'user', accessToken: token };
            if (userExists) {
              // Nếu người dùng cũ thì lấy role sẵn từ database
              const userStateOld = { ...userInfo, role: userExists.role, accessToken: token };
              dispatch(login(userStateOld));
            }
            if (!userExists) {
              // Nếu người dùng mới thì lấy role mặc định là user
              await addUserById(userSetInfo, uid);
              dispatch(login(userStateNew));
            }
          }
        } catch (error) {
          console.error('Lỗi khi lấy Access Token:', error);
          return;
        }
      } else {
        dispatch(logout());
      }
    };

    return onIdTokenChanged(auth, handleAuthStateChanged);
  }, []);

  return <>{children}</>;
};
export default AuthState;
