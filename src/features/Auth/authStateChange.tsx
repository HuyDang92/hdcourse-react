import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'firebase.jsx';
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { useCurrentUserMutation } from 'features/Auth/auth.service';
import axios from 'axios';

const AuthState = ({ children }: any) => {
  const dispatch = useDispatch();
  const [isToken, setIsToken] = useState<string | null>(null);
  // const { data, isFetching } = useCurrentUserMutation(isToken);

  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const { token } = await user.getIdTokenResult();
        console.log('Đã đăng nhập');
        axios.post('http://localhost:8000/api/current-user', {}, { headers: { token } });
      } else {
        console.log('Đã đăng xuất');
      }
    });
  }, []);

  return <>{children}</>;
};
export default AuthState;
