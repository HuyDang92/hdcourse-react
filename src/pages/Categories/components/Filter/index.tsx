import React, { useState } from 'react';
import { Drawer, Button, Typography, IconButton, Checkbox, Radio } from '@material-tailwind/react';

export function Filter({ children }: any) {
  const [open, setOpen] = React.useState(false);
  const [free, setFree] = useState<number | null>(null);

  return (
    <React.Fragment>
      <div onClick={() => setOpen(!open)}> {children}</div>
      <Drawer open={open} onClose={() => setOpen(!open)} className="p-4">
        <div className="filter-1">
          <h3 className="mb-3 text-lg font-bold">Giá</h3>
          <div className="flex flex-col ">
            <Checkbox
              id="free"
              label="Miễn phí"
              checked={free === 1}
              onChange={() => setFree(1)} // Chọn miễn phí, đặt giá trị là 1
            />
            <Checkbox
              id="fee"
              label="Trả phí"
              checked={free === 0}
              onChange={() => setFree(0)} // Chọn trả phí, đặt giá trị là 0
            />
          </div>
        </div>
        <div className="filter-2">
          <h3 className="mb-3 text-lg font-bold">Xếp hạng</h3>
          <div className="flex flex-col">
            <Radio id="4.5" name="type" label="Từ 4.5 sao trở lên" />
            <Radio id="4" name="type" label="Từ 4.0 sao trở lên" />
            <Radio id="3.5" name="type" label="Từ 3.5 sao trở lên" />
            <Radio id="3" name="type" label="Từ 3.0 sao trở lên" />
          </div>
        </div>
        <div className="filter-3">
          <h3 className="mb-3 text-lg font-bold">Thời lượng video</h3>
          <div className="flex flex-col">
            <Checkbox id="rank_1" label="Từ 0-1 giờ" />
            <Checkbox id="rank_3" label="Từ 1-3 giờ" />
            <Checkbox id="rank_6" label="Từ 3-6 giờ" />
            <Checkbox id="rank_17" label="Từ 6-17 giờ" />
            <Checkbox id="rank_more_17" label="Hơn 17 giờ" />
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
