import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  endBefore,
} from 'firebase/firestore';
import { db } from 'firebase.jsx';
import { useEffect, useState } from 'react';
import { IUserInfo } from 'types/User';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';

// export const useGetAllUser = () => {
//   const [isPending, setIsPending] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const getAllUser = async (collectionName: string) => {
//     setError(null);
//     try {
//       const usersRef = collection(db, collectionName);
//       const querySnapshot = await getDocs(usersRef);
//       let users: Omit<IUserInfo, 'accessToken'>[] = [];
//       querySnapshot.forEach((doc) => {
//         const { ...userInfo } = doc.data() as Omit<IUserInfo, 'accessToken'>;
//         users.push(userInfo);
//       });
//       setIsPending(false);

//       return users;
//     } catch (err: any) {
//       const errorCode = err.code;
//       const errorMessage = err.message;
//       console.log(errorCode, errorMessage);
//       setError(errorCode);
//       setIsPending(false);
//     }
//   };
//   return { getAllUser, isPending, error };
// };

export const usePagination = (collectionName: string, pageSize: number, totalSize: number) => {
  const totalPages = Math.ceil(totalSize / pageSize);
  const addUserState = useSelector((state: RootState) => state.manager.addUserPending);
  const deleteUserState = useSelector((state: RootState) => state.manager.deleteUserPending);
  const [_userData, setData] = useState<Omit<IUserInfo, 'accessToken'>[]>([]);
  const [_startAfter, setStartAfter] = useState<any | null>(null);
  const [_startBefore, setStartBefore] = useState<any | null>(null);
  const [saveLastItem, setSaveLastItem] = useState<any | null>(null);
  const [saveFirstItem, seSaveFirstItem] = useState<any | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);
        const collectionRef = collection(db, collectionName);
        let queryCollection = query(collectionRef, orderBy('createdAt', 'asc'), limit(pageSize));
        if (_startAfter) {
          queryCollection = query(
            collectionRef,
            orderBy('createdAt'),
            startAfter(_startAfter),
            limit(pageSize)
          );
        }
        if (_startBefore) {
          queryCollection = query(
            collectionRef,
            orderBy('createdAt'),
            endBefore(_startBefore),
            limit(pageSize)
          );
        }

        const snapshot = await getDocs(queryCollection);
        let users: Omit<IUserInfo, 'accessToken'>[] = [];
        snapshot.forEach((doc) => {
          const { ...userInfo } = doc.data() as Omit<IUserInfo, 'accessToken'>;
          users.push(userInfo);
        });
        setData(users);

        const lastVisible = snapshot.docs[snapshot.docs.length - 1];
        const firstVisible = snapshot.docs[0];
        if (lastVisible) {
          setSaveLastItem(lastVisible);
        }
        if (firstVisible) {
          seSaveFirstItem(firstVisible);
        }

        setIsPending(false);
      } catch (error: any) {
        setError(error);
        setIsPending(false);
      }
    };

    fetchData();
  }, [collectionName, pageSize, !addUserState, !deleteUserState, _startAfter, _startBefore]);

  const goToPreviousPage = (): void => {
    setStartBefore(saveFirstItem);
  };

  const goToNextPage = (): void => {
    setStartAfter(saveLastItem);
  };

  return {
    _userData,
    isPending,
    totalPages,
    error,
    goToPreviousPage,
    goToNextPage,
  };
};
