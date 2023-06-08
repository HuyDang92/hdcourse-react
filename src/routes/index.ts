import config from '../config';
import { ComponentType } from 'react';

import Home from '../pages/Home';

interface RouteConfig {
  path: string;
  component: ComponentType;
}

const publicRoutes: RouteConfig[] = [
  {
    path: config.routes.home,
    component: Home,
  },
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };
