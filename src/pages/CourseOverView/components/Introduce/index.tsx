import IonIcon from '@reacticons/ionicons';
import { Fragment, useState } from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';
import VideosComponent from 'components/Videos';

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
    data && (
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
              {data.source && <VideosComponent data={{ source: data.source, thumb: data.thumb }} />}
            </div>
          </DialogBody>
        </Dialog>
      </Fragment>
    )
  );
};
export default Introduce;
