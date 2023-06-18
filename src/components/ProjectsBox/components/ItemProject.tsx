import {
  SubjectBlueIcon,
  SubjectOrageIcon,
  StudentBlueIcon,
} from 'assets/icons';

interface ItemProjectProps {
  title: string;
  titleColor: string;
  subject: string;
  linearGradient: string;
  showProgress: boolean;
}

const ItemProject = ({
  title,
  subject,
  linearGradient,
  titleColor,
  showProgress,
}: ItemProjectProps) => {
  return (
    <div className="h-[13.75rem] rounded-lg bg-white drop-shadow-box-course">
      <div className="flex items-center gap-2 px-4 py-2">
        {showProgress ? <SubjectOrageIcon /> : <SubjectBlueIcon />}
        <p className="text-[0.625rem] font-bold" style={{ color: titleColor }}>
          {subject}
        </p>
      </div>
      <div
        className="max-h-20 p-4 text-base font-bold text-white"
        style={{ background: linearGradient }}
      >
        <h3>{title}</h3>
      </div>
      <div className="flex -translate-y-7 items-center justify-between p-4">
        <div className="flex items-center gap-2.5">
          <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-white">
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs">Hoàng Lộc SV</p>
            <p className="text-[0.5rem]">hoangloc@fpt.edu.vn</p>
          </div>
        </div>
        {showProgress ? (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-xs font-bold text-white"
            style={{ background: titleColor }}
          >
            80%
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex -translate-y-6 px-4">
        <div className="flex items-center gap-1">
          <StudentBlueIcon />
          <p className="text-[0.625rem] text-[#3B82F6B2]">58 Sinh viên</p>
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
