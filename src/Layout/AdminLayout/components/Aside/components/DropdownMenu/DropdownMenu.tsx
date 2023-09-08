// import * as React from 'react';
import IonIcon from '@reacticons/ionicons';
import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { Open, Active, Title, subTitle } from 'features/Admin/Aside.slice';

const navDashboard = [{ name: 'Overview', to: '/admin' }];
const navManager = [
  { name: 'Danh mục', to: '/admin/manager-category' },
  { name: 'Khóa học', to: '/admin/manager-course' },
  { name: 'Người dùng', to: '/admin/manager-user' },
  { name: 'Bài viết', to: '/admin/manager-blog' },
];
const navProfile = [{ name: 'Trang cá nhân', to: '/admin/profile' }];

export default function DropdownMenu() {
  const dispatch = useDispatch();
  const activeState = useSelector((state: RootState) => state.asideAdmin.active);
  const openState = useSelector((state: RootState) => state.asideAdmin.open);

  const handleOpen = (value: any) => {
    dispatch(Open(openState === value ? 0 : value));
    dispatch(Active(activeState === value ? 0 : value));
  };
  const handleTitle = (title: string, subT: string) => {
    dispatch(Title(title));
    dispatch(subTitle(subT));
  };

  return (
    <Fragment>
      <Accordion open={openState === 1} className="mb-2">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`rounded-xl border-b-0 p-3  ${activeState === 1 ? 'shadow-border-full' : ''}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-3">
              <IonIcon
                name="grid"
                className={`"me-4 rounded-md p-3 text-lg text-gray-500 shadow-border-blur  ${
                  activeState === 1 && 'bg-gradient-to-br from-org to-amber-400 text-white'
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
                  onClick={() => handleTitle(nav.name, 'Thống kê')}
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
      <Accordion open={openState === 2} className="mb-2">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`rounded-xl border-b-0 p-3  ${activeState === 2 ? 'shadow-border-full' : ''}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-3">
              <IonIcon
                name="file-tray-stacked"
                className={`"me-4 rounded-md p-3 text-lg text-gray-500 shadow-border-blur  ${
                  activeState === 2 && 'bg-gradient-to-br from-org to-amber-400 text-white'
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
                  onClick={() => handleTitle(nav.name, 'Quản lí')}
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
      <Accordion open={openState === 3} className="mb-2">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`rounded-xl border-b-0 p-3  ${activeState === 3 ? 'shadow-border-full' : ''}`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-3">
              <IonIcon
                name="person-circle"
                className={`"me-4 rounded-md p-3 text-lg text-gray-500 shadow-border-blur  ${
                  activeState === 3 && 'bg-gradient-to-br from-org to-amber-400 text-white'
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
              <li
                onClick={() => handleTitle(nav.name, 'Profile')}
                key={index}
                className="list-disc p-3 text-gray-900"
              >
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
