// import * as React from 'react';
import IonIcon from '@reacticons/ionicons';
import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

const navDashboard = [
  { name: 'Overview', to: '/admin' },
  { name: 'Chi tiết', to: '/' },
];
const navManager = [
  { name: 'Danh mục', to: '/admin/manager-category' },
  { name: 'Khóa học', to: '/admin/manager-course' },
  { name: 'Người dùng', to: '/admin/manager-user' },
  { name: 'Bài viết', to: '/admin/manager-blog' },
];
const navProfile = [{ name: 'Trang cá nhân', to: '/admin/profile' }];

export default function DropdownMenu() {
  const [open, setOpen] = useState<number>(1);
  const [active, setActive] = useState<number>(1);
  
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
    setActive(active === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} className="mb-2">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`rounded-xl border-b-0 p-3  ${active === 1 ? 'shadow-border-full' : ''}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-3">
              <IonIcon
                name="grid"
                className={`"me-4 rounded-md p-3 text-lg text-gray-500 shadow-border-blur  ${
                  active === 1 && 'bg-gradient-to-br from-org to-amber-400 text-white'
                }`}
              />
              <p className="justify-start text-lg">Thống kê</p>
            </div>
            <IonIcon name="chevron-down-outline" />
          </div>
        </AccordionHeader>
        <AccordionBody className="ps-5">
          <ul className="ps-5 text-[1rem] font-medium text-gray-400">
            {navDashboard.map((nav, index) => (
              <li key={index} className="list-disc p-3 text-gray-900">
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? 'font-semibold text-org' : 'text-gray-500 '
                  }
                  to={nav.to}
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`rounded-xl border-b-0 p-3  ${active === 2 ? 'shadow-border-full' : ''}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-3">
              <IonIcon
                name="file-tray-stacked"
                className={`"me-4 rounded-md p-3 text-lg text-gray-500 shadow-border-blur  ${
                  active === 2 && 'bg-gradient-to-br from-org to-amber-400 text-white'
                }`}
              />
              <p className="justify-start text-lg">Quản lí</p>
            </div>
            <IonIcon name="chevron-down-outline" />
          </div>
        </AccordionHeader>
        <AccordionBody className="ps-5">
          <ul className="ps-5 text-[1rem] font-medium text-gray-400">
            {navManager.map((nav, index) => (
              <li key={index} className="list-disc p-3 text-gray-900">
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? 'font-semibold text-org' : 'text-gray-500 '
                  }
                  to={nav.to}
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="mb-2">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`rounded-xl border-b-0 p-3  ${active === 3 ? 'shadow-border-full' : ''}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-3">
              <IonIcon
                name="person-circle"
                className={`"me-4 rounded-md p-3 text-lg text-gray-500 shadow-border-blur  ${
                  active === 3 && 'bg-gradient-to-br from-org to-amber-400 text-white'
                }`}
              />
              <p className="justify-start text-lg">Profile</p>
            </div>
            <IonIcon name="chevron-down-outline" />
          </div>
        </AccordionHeader>
        <AccordionBody className="ps-5">
          <ul className="ps-5 text-[1rem] font-medium text-gray-400">
            {navProfile.map((nav, index) => (
              <li key={index} className="list-disc p-3 text-gray-900">
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? 'font-semibold text-org' : 'text-gray-500 '
                  }
                  to={nav.to}
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
