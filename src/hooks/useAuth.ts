import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
  signInWithEmailAndPassword,
  User,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from 'firebase.jsx';
import { auth, provider } from 'firebase.jsx';
import { useState } from 'react';

export const useVerificationEmail = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsPending] = useState<boolean>(false);

  const verificationEmail = async (auth: User, url: string) => {
    setIsPending(true);
    try {
      await sendEmailVerification(auth, {
        url: url,
        handleCodeInApp: true,
      });
      setIsPending(false);
      return { message: 'Đã gửi email xác nhận! Vui lòng kiểm tra trong hộp thư' };
    } catch (err: any) {
      setError(err);
      setIsPending(false);
    }
  };
  return { verificationEmail, isLoading, error };
};

export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);

  const signup = async (email: string, password: string, displayName: string) => {
    setIsPending(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (!userCredential) {
        throw new Error('Đăng ký thất bại!');
      } else {
        await updateProfile(userCredential.user, {
          displayName: displayName,
          photoURL:
            'https://res.cloudinary.com/dbppi7qw4/image/upload/v1690097671/users_avatar/yvwnylf4e3svysfexxgi.jpg',
        });

        await sendEmailVerification(userCredential.user, {
          url: 'http://localhost:3000/login',
          handleCodeInApp: true,
        });

        setError(null);
        setIsPending(false);
        setVerifyEmail(true);
        return userCredential.user;
      }
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      console.log(errorCode, errorMessage);
      setError(errorCode);
      setIsPending(false);
    }
  };
  return { signup, isPending, verifyEmail, error };
};
export const useSignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const signin = async (email: string, password: string) => {
    setError(null);
    setIsPending(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential) {
        throw new Error('Đăng nhập thất bại!');
      }
      setError(null);
      setIsPending(false);
      return userCredential.user;
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      setError(errorCode);
      setIsPending(false);
    }
  };
  return { signin, isPending, error };
};

export const useSignInWithGoogle = () => {
  const [errorGG, setError] = useState<string | null>(null);

  const signInGoogle = async () => {
    setError(null);

    try {
      const userCredential = await signInWithPopup(auth, provider);

      if (!userCredential) {
        throw new Error('Đăng nhập thất bại!');
      }
      setError(null);

      return userCredential.user;
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      setError(errorCode);
    }
  };
  return { signInGoogle, errorGG };
};
export const useResetPassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const resetPassword = async (email: string, url: string) => {
    setError(null);
    setIsPending(true);

    try {
      await sendPasswordResetEmail(auth, email, {
        url: url,
        handleCodeInApp: true,
      });
      setError(null);
      setSuccess(true);
      setIsPending(false);
      return { mess: 'Đã gửi email đặt lại mật khẩu' };
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      setIsPending(false);
      setError(errorCode);
      setSuccess(false);
    }
  };
  return { resetPassword, isPending, isSuccess, error };
};
export const useSignOut = () => {
  const [error, setError] = useState<string | null>(null);

  const signout = async () => {
    setError(null);

    try {
      await signOut(auth);
      setError(null);
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      setError(errorCode);
    }
  };
  return { signout, error };
};
export const useUpdateActiveUser = () => {
  const [error, setError] = useState<string | null>(null);

  const updateActiveUserById = async (idUser: string) => {
    setError(null);

    try {
      const userDocRef = doc(db, 'users', idUser);
      // Set the "capital" field of the city 'DC'
      await updateDoc(userDocRef, {
        active: true,
      });
    } catch (err: any) {
      const errorCode = err.code;
      setError(errorCode);
    }
  };
  return { updateActiveUserById, error };
};
