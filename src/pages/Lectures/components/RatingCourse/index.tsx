import IonIcon from '@reacticons/ionicons';
import { Fragment, useState } from 'react';
import { Button, Dialog, DialogBody, Rating, Typography } from '@material-tailwind/react';

interface IChildProps {
  children: any;
}
const RatingCourse: React.FC<IChildProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [rated, setRated] = useState(4);

  const handleOpenDialog = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
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
            <Rating value={4} onChange={(value) => setRated(value)} />
            <Typography color="blue-gray" className="font-medium">
              {rated}.0
            </Typography>
          </div>
          <textarea
            rows={5}
            defaultValue={''}
            className="w-full rounded-xl border-2 border-gray-500 p-4 font-medium text-darkLight"
            placeholder="Nhập nội dung"
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
            <Button color="orange" className="w-32">
              Xác nhận
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};
export default RatingCourse;
