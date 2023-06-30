import config from 'config';
import { ComponentType } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp/SignUp';

interface RouteConfig {
  path: string;
  component: ComponentType;
  layout: ComponentType<any>;
}

const publicRoutes: RouteConfig[] = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: Login,
  },
  {
    path: config.routes.signup,
    component: SignUp,
    layout: SignUp,
  },
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };
