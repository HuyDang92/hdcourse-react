import { ComponentType } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import AdminLayout from 'Layout/AdminLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp/SignUp';
import Profile from 'Admin/pages/Profile';
import Dashboard from 'Admin/pages/Dashboard';
import Categories from 'pages/Categories/Categories';

interface RouteConfig {
  path: string;
  component: ComponentType;
  layout: ComponentType<any>;
}

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
];

const privateRoutes: RouteConfig[] = [
  {
    path: '/admin',
    component: Dashboard,
    layout: AdminLayout,
  },
  {
    path: '/admin/profile',
    component: Profile,
    layout: AdminLayout,
  },
];

export { publicRoutes, privateRoutes };
