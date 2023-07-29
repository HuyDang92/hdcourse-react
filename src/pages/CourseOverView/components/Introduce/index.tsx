import IonIcon from '@reacticons/ionicons';
import { Fragment, useState } from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';

interface IChildProps {
  data: any;
  children: any;
}
const Introduce: React.FC<IChildProps> = ({ data, children }) => {
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
              <h4 className="text-lg font-medium">Giới thiệu khóa học</h4>
              <IonIcon
                onClick={() => setOpen(false)}
                name="close"
                className="rounded-lg bg-blue-gray-100 p-2 text-lg"
              />
            </div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <iframe
              src="https://www.youtube.com/embed/8GDI3IvCFZM"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-[70vh] w-full pt-3"
            />
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};
export default Introduce;