import { productsRoute } from 'features/products/route';

import { employeesRoute } from 'features/employees/route';
import { templatesRoute } from 'features/templates/route';
import { discussionsRoute } from 'features/discussions/route';
import { homeRoute } from 'features/home-page/route';
import { profileRoute } from 'features/profile-page/route';
import { tasksRoute } from 'features/tasks-page/route';
import type { RouteObject } from 'react-router-dom';

export const auth: RouteObject[] = [
  ...homeRoute,
  ...profileRoute,
  ...tasksRoute,
  ...discussionsRoute,
  ...templatesRoute,
  ...employeesRoute,
  ...productsRoute,
];
