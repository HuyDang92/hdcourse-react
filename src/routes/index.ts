import configUser from 'config/UserRoutes';
import configAdmin from 'config/AdminRoutes';
import { ComponentType } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import AdminLayout from 'Layout/AdminLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp/SignUp';
import Profile from 'Admin/pages/Profile';
import Dashboard from 'Admin/pages/Dashboard';

interface RouteConfig {
  path: string;
  component: ComponentType;
  layout: ComponentType<any>;
}

const publicRoutes: RouteConfig[] = [
  {
    path: configUser.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: configUser.routes.login,
    component: Login,
    layout: Login,
  },
  {
    path: configUser.routes.signup,
    component: SignUp,
    layout: SignUp,
  },
];

const privateRoutes: RouteConfig[] = [
  {
    path: configAdmin.routes.admin,
    component: Dashboard,
    layout: AdminLayout,
  },
  {
    path: configAdmin.routes.profile,
    component: Profile,
    layout: AdminLayout,
  },
];

export { publicRoutes, privateRoutes };
