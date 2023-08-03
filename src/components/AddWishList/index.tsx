import { IconButton, Spinner } from '@material-tailwind/react';
import IonIcon from '@reacticons/ionicons';
import { useAddWishListMutation, useGetWishListQuery } from 'features/Auth/auth.service';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'stores/store';

interface IChildProps {
  data: any;
}

const AddWishList: React.FC<IChildProps> = ({ data }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const idUser = useSelector((state: RootState) => state.auth.currentUser);
  const [addWishList, result] = useAddWishListMutation();
  const wishLists = useGetWishListQuery(idUser?.uid);

  useEffect(() => {
    if (wishLists.data) {
      // Nếu đã fetch dữ liệu thành công
      const existingIndex = wishLists.data.find((item: any) => item.id === data?.idCourse);
      setIsFavorite(existingIndex !== undefined);
    }
  }, [wishLists.data, data?.idCourse]);

  const handleIsFavorite = async () => {
    if (!idUser) {
      navigate('/login');
    } else {
      const arg = { idUser: idUser.uid, idCourse: data?.idCourse };
      await addWishList(arg);
      setIsFavorite((cur) => !cur);
    }
  };

  return (
    <IconButton
      variant={isFavorite ? undefined : 'outlined'}
      size="lg"
      color={isFavorite ? 'orange' : 'orange'}
      onClick={handleIsFavorite}
      className="rounded-full"
    >
      {result.isLoading ? <Spinner /> : <IonIcon name="heart" className={`pt-2 text-xl`} />}
    </IconButton>
  );
};

export default AddWishList;
