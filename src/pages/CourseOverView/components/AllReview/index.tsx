import IonIcon from '@reacticons/ionicons';
import { Fragment, useState } from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';

interface IChildProps {
  data: any;
  children: any;
}
const AllReview: React.FC<IChildProps> = ({ data, children }) => {
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <div onClick={handleOpenDialog} className="">
        {children}
      </div>
      <Dialog size="lg" className="rounded-2xl p-2" open={open} handler={() => setOpen(!open)}>
        <DialogBody>
          <div className="">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Tất cả đánh giá</h1>
              <IonIcon
                onClick={() => setOpen(false)}
                name="close"
                className="rounded-lg bg-blue-gray-100 p-2 text-lg"
              />
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};
export default AllReview;
