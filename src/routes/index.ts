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
import CourseOverView from 'pages/CourseOverView/CourseOverView';
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword';
import Lectures from 'pages/Lectures/Lectures';
import Cart from 'pages/Cart/Cart';
import Intructors from 'pages/Intructors/Intructors';
import Message from 'pages/Message/Message';
import ListCouses from 'Admin/pages/ListCourses/ListCourses';

interface RouteConfig {
  path: string;
  component: ComponentType;
  layout: ComponentType<any> | null;
}

const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: '/forgotPassword',
    component: ForgotPassword,
    layout: ForgotPassword,
  },
  {
    path: '/login',
    component: Login,
    layout: null,
  },
  {
    path: '/signup',
    component: SignUp,
    layout: null,
  },
  {
    path: '/intructors/:name',
    component: Intructors,
    layout: DefaultLayout,
  },
  {
    path: '/message',
    component: Message,
    layout: DefaultLayout,
  },
  {
    path: '/cart',
    component: Cart,
    layout: DefaultLayout,
  },
  {
    path: '/categories/:keywords',
    component: Categories,
    layout: DefaultLayout,
  },
  {
    path: '/categories/:nameCat',
    component: Categories,
    layout: DefaultLayout,
  },
  {
    path: '/categories/:nameCat/:nameSubCat',
    component: Categories,
    layout: DefaultLayout,
  },
  {
    path: '/categories/:nameCat/:nameSubCat/:nameCatC3',
    component: Categories,
    layout: DefaultLayout,
  },
  {
    path: '/user/:nameuser/:active',
    component: ProfileUser,
    layout: DefaultLayout,
  },
  {
    path: '/user/edit-profile',
    component: SettingAccount,
    layout: DefaultLayout,
  },
  {
    path: '/course/:nameCourse/:idCourse',
    component: CourseOverView,
    layout: DefaultLayout,
  },
  {
    path: '/course/:nameCourse/lecture/:idLeature',
    component: Lectures,
    layout: null,
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
    component: ListCouses,
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
