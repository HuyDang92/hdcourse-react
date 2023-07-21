import { log } from 'console';
import { ComponentType } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import AdminLayout from 'Layout/AdminLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp/SignUp';
import Profile from 'Admin/pages/Profile';
import Dashboard from 'Admin/pages/Dashboard';
import Categories from 'pages/Categories/Categories';
import ListUser from 'Admin/pages/ListUser';
import ListCategory from 'Admin/pages/ListCategory';
import ProfileUser from 'pages/ProfileUser';
import SettingAccount from 'pages/SettingAccount/SettingAccount';

interface RouteConfig {
  path: string;
  component: ComponentType;
  layout: ComponentType<any>;
}
// const getLocal = localStorage.getItem('persist:root');
// const auth = getLocal && JSON.parse(getLocal);
// const isLogin = JSON.parse(auth.auth);
// console.log(isLogin);

const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: '/login',
    component: Login,
    layout: Login,
  },
  {
    path: '/signup',
    component: SignUp,
    layout: SignUp,
  },
  {
    path: '/course/:nameCat',
    component: Categories,
    layout: DefaultLayout,
  },
  {
    path: '/course/:nameCat/:nameSubCat',
    component: Categories,
    layout: DefaultLayout,
  },
  {
    path: '/user/:nameuser',
    component: ProfileUser,
    layout: DefaultLayout,
  },
  {
    path: '/user/edit-profile',
    component: SettingAccount,
    layout: DefaultLayout,
  },
];

const privateRoutes: RouteConfig[] = [
  {
    path: '/admin',
    component: Dashboard,
    layout: AdminLayout,
  },
  {
    path: '/admin/manager-category',
    component: ListUser,
    layout: AdminLayout,
  },
  {
    path: '/admin/manager-course',
    component: ListUser,
    layout: AdminLayout,
  },
  {
    path: '/admin/manager-blog',
    component: ListUser,
    layout: AdminLayout,
  },
  {
    path: '/admin/manager-user',
    component: ListUser,
    layout: AdminLayout,
  },
  {
    path: '/admin/profile',
    component: Profile,
    layout: AdminLayout,
  },
];

export { publicRoutes, privateRoutes };
