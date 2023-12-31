import { IInstructor } from 'types/Home';
import { useState } from 'react';

interface IChildProps {
  data: IInstructor;
}
const Description: React.FC<IChildProps> = ({ data }) => {
  const [extra, setExtra] = useState<boolean>(true);
  return (
    data && (
      <>
        <h1 className="text-2xl font-bold">Mô tả</h1>
        <ul className="space-y-4 font-medium">
          <li
            onClick={() => setExtra(!extra)}
            className={`${extra && 'h-24'} relative overflow-hidden pb-10 transition-all`}
          >
            <span dangerouslySetInnerHTML={{ __html: data?.description }} />
            <span className="absolute -bottom-0 left-0 right-0 cursor-pointer  bg-gradient-to-t from-[#fff] to-transparent py-6 text-center text-org">
              <span className="relative -bottom-7">{extra ? 'Xem thêm' : 'Ẩn bớt'}</span>
            </span>
          </li>
        </ul>
      </>
    )
  );
};
export default Description;
