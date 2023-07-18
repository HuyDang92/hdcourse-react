import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'firebase.jsx';
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { login, logout } from './auth.slice';
import { useAddUser, useGetOneUserQuery } from 'hooks/useAuth';
import { Timestamp } from 'firebase/firestore';

const AuthState = ({ children }: any) => {
  const dispatch = useDispatch();
  const { getOneUserById } = useGetOneUserQuery();
  const { addUserById } = useAddUser();

  useEffect(() => {
    const handleAuthStateChanged = async (user: any) => {
      if (user) {
        const { uid, displayName, email, photoURL, phoneNumber, emailVerified } = user;
        const currentDate = Timestamp.now();
        const userInfo = {
          uid,
          displayName,
          email,
          photoURL,
          phoneNumber,
          active: emailVerified,
        };
        try {
          // Lấy token trả về
          const idTokenResult = await user.getIdToken();
          const { token } = idTokenResult;
          if (displayName && email && photoURL) {
            const userExists = await getOneUserById(uid);
            if (userExists) {
              // Nếu người dùng cũ thì lấy role sẵn từ database
              const userStateOld = { ...userInfo, role: userExists.role, accessToken: token };

              dispatch(login(userStateOld));
            } else {
              // Nếu người dùng mới thì lấy role mặc định là user
              const userSetInfo = {
                ...userInfo,
                role: 'user',
                createdAt: currentDate,
                updatedAt: currentDate,
              };
              await addUserById(userSetInfo, uid);
              const userStateNew = { ...userInfo, role: 'user', accessToken: token };
              dispatch(login(userStateNew));
            }
            // if (!userExists) {
            // }
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
