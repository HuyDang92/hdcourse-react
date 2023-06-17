import React from 'react';

interface ItemStatisticalProps {
  title: string;
  icon: string;
  plus?: number;
  count?: string;
  name?: string;
  colorIcon?: string;
  colorText?: string;
}

const ItemStatistical: React.FC<ItemStatisticalProps> = ({
  title,
  icon,
  plus,
  count,
  name,
  colorIcon,
  colorText,
}) => {
  return (
    <div className="w-1/5 rounded-xl bg-white p-9 shadow-border-full">
      <div className=" flex items-center gap-5">
        <div
          className="relative max-h-[3.125rem] max-w-[3.75rem] rounded-xl bg-yellow-200 bg-opacity-30 px-5 py-3"
          style={{ background: colorIcon }}
        >
          <img src={icon} alt="" />
        </div>
        <div className="text-base font-bold uppercase text-text-primary">
          {title}
        </div>
      </div>
      <div className=" flex items-center justify-start gap-5">
        <p
          className="max-h-[1.875rem] max-w-[3.75rem] rounded-xl p-2 text-[0.563rem] text-text-primary"
          style={{ background: colorIcon }}
        >
          <span className="font-bold" style={{ color: colorText }}>
            + {plus} Dự án
          </span>
        </p>
        <span
          className="text-bigger text-[3.125rem] font-bold"
          style={{ color: colorText }}
        >
          {count}
        </span>
      </div>
      <p className="text-center text-base font-medium text-text-primary">
        {name}
      </p>
    </div>
  );
};

export default ItemStatistical;
