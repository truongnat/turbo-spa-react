import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { homeLoader } from '../loader';

export const homeRoute: RouteObject[] = [
  {
    path: pathRouter.HomePage,
    index: true,
    lazy: () => import('../containers/HomePage'),
    loader: homeLoader,
  },
];
