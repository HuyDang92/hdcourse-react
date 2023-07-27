// import * as React from 'react';
import IonIcon from '@reacticons/ionicons';
import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import { Open, Active, Title, subTitle } from 'features/Admin/Aside.slice';

const section = [
  {
    name: 'Section 1',
    lectures: [
      { name: 'Overview', to: '/admin' },
      { name: 'Chi tiết', to: '/' },
    ],
  },
  {
    name: 'Section 2',
    lectures: [
      { name: 'Danh mục', to: '/admin/manager-category' },
      { name: 'Khóa học', to: '/admin/manager-course' },
      { name: 'Người dùng', to: '/admin/manager-user' },
      { name: 'Bài viết', to: '/admin/manager-blog' },
    ],
  },
  {
    name: 'Section 3',
    lectures: [
      { name: 'Danh mục', to: '/admin/manager-category' },
      { name: 'Khóa học', to: '/admin/manager-course' },
      { name: 'Người dùng', to: '/admin/manager-user' },
      { name: 'Bài viết', to: '/admin/manager-blog' },
    ],
  },
  {
    name: 'Section 4',
    lectures: [
      { name: 'Danh mục', to: '/admin/manager-category' },
      { name: 'Khóa học', to: '/admin/manager-course' },
      { name: 'Người dùng', to: '/admin/manager-user' },
      { name: 'Bài viết', to: '/admin/manager-blog' },
    ],
  },
];

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

const ContentCourses = () => {
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
      {section.map((item, index) => (
        <Accordion key={index} open={openState === index + 1} className="">
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`rounded-lg border-b-0 bg-gray-200 p-3`}
          >
            <div className="flex w-full items-center justify-between text-darkLight">
              <div className="flex items-center">
                <p className="justify-start px-3 text-lg">{item.name}</p>
              </div>
              <div className="flex items-center space-x-5">
                <p className="text-[15px]">9 bài giảng</p>
                <IonIcon
                  name="chevron-down-outline"
                  className={`${openState === index + 1 && 'rotate-180'} transition-all`}
                />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="ps-5">
            <ul className="text-[1rem] font-medium text-gray-400">
              {item.lectures.map((nav, index) => (
                <li
                  key={index}
                  className="my-1 flex items-center justify-between rounded-lg p-3 text-darkLight transition-all hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <IonIcon name="play-circle-outline" className="text-xl text-org" />
                    <span>{nav.name}</span>
                  </div>
                  <p className="text-gray-500">11:20</p>
                </li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
};
export default ContentCourses;
