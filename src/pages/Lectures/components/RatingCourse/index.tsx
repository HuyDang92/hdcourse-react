import IonIcon from '@reacticons/ionicons';
import { Fragment, useState } from 'react';
import { Button, Dialog, DialogBody, Rating, Typography } from '@material-tailwind/react';
import { useRatingCourseMutation } from 'features/Course/course.service';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { toast } from 'react-toastify';
import Loading from 'components/Loading';

interface IChildProps {
  setUserRated?: any;
  children: any;
}
const RatingCourse: React.FC<IChildProps> = ({ setUserRated, children }) => {
  const [open, setOpen] = useState(false);
  const [rated, setRated] = useState(5);
  const idCourse = useSelector((state: RootState) => state.courseState.idCourse);
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const [content, setContent] = useState<string>('');

  const [addRating, result] = useRatingCourseMutation();

  const handleOpenDialog = () => {
    setOpen(!open);
  };
  const handleRating = async () => {
    const data = {
      idUser: user?.uid,
      idCourse: idCourse,
      avatar: user?.photoURL,
      name: user?.displayName,
      content: content,
      rating: rated,
    };
    await addRating(data);
    setOpen(!open);
    setUserRated(true);
  };
  return (
    <Fragment>
      {result.isLoading && <Loading />}
      <div onClick={handleOpenDialog} className="">
        {children}
      </div>
      <Dialog size="sm" className="rounded-2xl p-2" open={open} handler={() => setOpen(!open)}>
        <DialogBody>
          <div className="flex justify-between">
            <h1 className="text-xl font-medium">Đánh giá khóa học</h1>
            <IonIcon
              onClick={() => setOpen(false)}
              name="close"
              className="rounded-lg bg-blue-gray-100 p-2 text-lg"
            />
          </div>
          <div className="flex items-center gap-2 py-2">
            <Rating value={rated} onChange={(value) => setRated(value)} />
            <Typography color="blue-gray" className="font-medium">
              {rated}.0
            </Typography>
          </div>
          <textarea
            rows={5}
            defaultValue={''}
            className="w-full rounded-xl border-2 border-gray-500 p-4 font-medium text-darkLight"
            placeholder="Nhập nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="space-x-2">
            <Button
              onClick={() => setOpen(false)}
              variant="outlined"
              color="orange"
              className="w-32"
            >
              Hủy
            </Button>
            <Button onClick={handleRating} color="orange" className="w-32">
              Xác nhận
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};
export default RatingCourse;
