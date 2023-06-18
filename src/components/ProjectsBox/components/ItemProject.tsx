import {
  SubjectBlueIcon,
  SubjectOrageIcon,
  StudentBlueIcon,
} from 'assets/icons';
import { ProjectItem } from 'types/Project';

interface ItemProjectProps {
  data: ProjectItem;
  styleCss: {
    titleColor: string;
    linearGradient: string;
    showProgress: boolean;
  };
}

const ItemProject = ({ data, styleCss }: ItemProjectProps) => {
  return (
    <div className="h-[13.75rem] rounded-lg bg-white drop-shadow-box-course">
      <div className="flex items-center gap-2 px-4 py-2">
        {styleCss.showProgress ? <SubjectOrageIcon /> : <SubjectBlueIcon />}
        <p
          className="text-[0.625rem] font-bold"
          style={{ color: styleCss.titleColor }}
        >
          {data.department.name}
        </p>
      </div>
      <div
        className="h-20 p-4 text-base font-bold text-white"
        style={{ background: styleCss.linearGradient }}
      >
        <h3 className="line-clamp-2">{data.description}</h3>
      </div>
      <div className="flex -translate-y-7 items-center justify-between p-4">
        <div className="flex items-center gap-2.5">
          <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-white">
            <img
              src={
                data.manager.avatar ||
                'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
              }
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs">{data.manager.name}</p>
            <p className="text-[0.5rem]">{data.manager.email}</p>
          </div>
        </div>
        {styleCss.showProgress ? (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-xs font-bold text-white"
            style={{ background: styleCss.titleColor }}
          >
            {data.progress}%
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex -translate-y-6 px-4">
        <div className="flex items-center gap-1">
          <StudentBlueIcon />
          <p className="text-[0.625rem] text-[#3B82F6B2]">
            {data.countStudents} Sinh viên
          </p>
        </div>
        <div className="ml-auto">
          <button className="max-h-8 max-w-[6.375rem] rounded-lg border border-[#0000000A] bg-[#F6F6F6] px-4 py-2 text-[0.625rem]">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemProject;
