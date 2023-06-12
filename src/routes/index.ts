import config from 'config';
import { ComponentType } from 'react';
import DefaultLayout from 'Layout/DefaultLayout';
import Home from 'pages/Home';

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
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };
