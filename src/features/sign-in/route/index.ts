import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';

export const signInRoute: RouteObject[] = [
  {
    path: pathRouter.SignInPage,
    index: true,
    lazy: () => import('../containers/SignInPage'),
  },
];
