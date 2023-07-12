import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth';
import { auth, provider } from 'firebase.jsx';
import { useState } from 'react';

export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);

  const signup = async (email: string, password: string, displayName: string) => {
    setError(null);
    setIsPending(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      if (!userCredential) {
        throw new Error('Đăng ký thất bại!');
      }
      await updateProfile(userCredential.user, {
        displayName: displayName,
        photoURL:
          'https://firebasestorage.googleapis.com/v0/b/hdcourse-10020.appspot.com/o/courses%2FavtDefault.jpg?alt=media&token=f8fcab19-4e95-40bf-a2df-71014acafa51',
      });
      await sendEmailVerification(userCredential.user, {
        url: 'http://localhost:3000/login',
        handleCodeInApp: true,
      });
      setError(null);
      setIsPending(false);
      setVerifyEmail(true);
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      setError(errorCode);
      setIsPending(false);
    }
  };
  return { signup, isPending, verifyEmail, error };
};
export const useSignUpWithGoogle = () => {
  const [errorGG, setError] = useState<string | null>(null);

  const signInGoogle = async () => {
    setError(null);

    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log(userCredential);

      if (!userCredential) {
        throw new Error('Đăng ký thất bại!');
      }
      setError(null);

      return userCredential.user;
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      setError(errorCode);
    }
  };
  return { signInGoogle, errorGG };
};
