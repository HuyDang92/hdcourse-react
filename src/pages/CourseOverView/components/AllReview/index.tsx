import IonIcon from '@reacticons/ionicons';
import { Fragment, useState } from 'react';
import { Dialog, DialogBody, Input, Progress, Rating } from '@material-tailwind/react';
import ReviewCourse from '../ReviewCourse';
import Button from 'components/Button';
import { useGetRatingCouseQuery } from 'features/Course/course.service';

interface IChildProps {
  data: any;
  children: any;
}

const AllReview: React.FC<IChildProps> = ({ data, children }) => {
  const [open, setOpen] = useState(false);
  const [limitCourse, setLimitCourse] = useState<boolean>(false);
  const datareview = useGetRatingCouseQuery(data.idCourse);

  const handleOpenDialog = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <div onClick={handleOpenDialog} className="">
        {children}
      </div>
      <Dialog size="xl" className="rounded-2xl p-2" open={open} handler={() => setOpen(!open)}>
        <DialogBody>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Học viên đánh giá</h1>
            <IonIcon
              onClick={() => setOpen(false)}
              name="close"
              className="rounded-lg bg-blue-gray-100 p-2 text-lg"
            />
          </div>
          <div className="flex p-2 font-medium">
            <div className="w-1/4 font-semibold">
              <div className="flex items-center space-x-3 py-5">
                <Rating unratedColor="orange" ratedColor="orange" value={4} readonly />
                <span>4.9/5.0</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5">5</span>
                <IonIcon name="star" className="pe-2 text-xl text-org" />
                <Progress color="orange" value={85} />
                <span className="w-5">85%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5">4</span>
                <IonIcon name="star" className="pe-2 text-xl text-org" />
                <Progress color="orange" value={15} />
                <span className="w-5">15%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5">3</span>
                <IonIcon name="star" className="pe-2 text-xl text-org" />
                <Progress color="orange" value={5} />
                <span className="w-5">5%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5">2</span>
                <IonIcon name="star" className="pe-2 text-xl text-org" />
                <Progress color="orange" value={5} />
                <span className="w-5">5%</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5">1</span>
                <IonIcon name="star" className="pe-2 text-xl text-org" />
                <Progress color="orange" value={1} />
                <span className="w-5">1%</span>
              </div>
              <div className="py-5">
                <Input
                  label="Tìm kiếm đánh giá"
                  icon={<IonIcon name="search" className="pe-2 text-xl text-org" />}
                />
              </div>
            </div>
            <div className="max-h-[80vh] w-3/4 overflow-y-scroll ps-14">
              {!datareview.isFetching &&
                datareview.data?.map((item: any, index: any) => (
                  <ReviewCourse key={index} data={item} />
                ))}
              <div onClick={() => setLimitCourse(!limitCourse)} className="pt-5 text-center">
                <Button rounded_md border>
                  <p className="flex items-center space-x-4">
                    <span>{!limitCourse ? 'Xem thêm' : 'Ẩn bớt'}</span>
                    {/* <span>{courses.isFetching && <Spinner />}</span> */}
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};
export default AllReview;
