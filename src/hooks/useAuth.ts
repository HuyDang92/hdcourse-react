import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import {
  collection,
  setDoc,
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  startAt,
  startAfter,
  endBefore,
} from 'firebase/firestore';
import { db } from 'firebase.jsx';
import { auth, provider } from 'firebase.jsx';
import { useEffect, useState } from 'react';
import { IUserInfo } from 'types/User';

export const useVerificationEmail = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);

  const verificationEmail = async (auth: User, url: string) => {
    try {
      await sendEmailVerification(auth, {
        url: url,
        handleCodeInApp: true,
      });
      setIsPending(true);
      return { message: 'Đã gửi email xác nhận! Vui lòng kiểm tra trong hộp thư' };
    } catch (err: any) {
      setError(err);
      setIsPending(false);
    }
  };
  return { verificationEmail, isPending, error };
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
            'https://firebasestorage.googleapis.com/v0/b/hdcourse-10020.appspot.com/o/courses%2FavtDefault.jpg?alt=media&token=f8fcab19-4e95-40bf-a2df-71014acafa51',
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
      // console.log(userCredential);

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
export const useGetOneUserQuery = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [errorU, setError] = useState<string | null>(null);

  const getOneUserById = async (idUser: string) => {
    setIsPending(true);
    setError(null);

    try {
      const docRef = doc(db, 'users', idUser);
      const docSnap = await getDoc(docRef);
      setError(null);
      setIsPending(false);

      return docSnap.data();
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      setError(errorCode);
    }
  };
  return { getOneUserById, isPending, errorU };
};

export const useAddUser = () => {
  const [errorA, setError] = useState<string | null>(null);

  const addUserById = async (data: Omit<IUserInfo, 'accessToken'>, idUser: string) => {
    setError(null);

    try {
      const docRef = doc(db, 'users', idUser);

      await setDoc(docRef, {
        ...data,
      });
    } catch (err: any) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      setError(errorCode);
    }
  };
  return { addUserById, errorA };
};
