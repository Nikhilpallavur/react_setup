import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import type { Router } from '@remix-run/router';
import Login from '../pages/login';
import MainLayout from '../layout/mainLayout';
import { ROUTE_NAME } from '../constants';
import Dashboard from '../pages/dashboard';
import ProfilePage from '../pages/profile';
import { protectedLoader } from './protectedLoader';
import UserPage from '../pages/User';
import ProductsPage from '../pages/products';
import LanguageSettingsPage from '../pages/profile/language';
import CreateUserPage from '../pages/User/createUser';

const routes: RouteObject[] = [
  {
    id: 'root',
    path: ROUTE_NAME.login,
    Component: Login,
  },
  {
    path: ROUTE_NAME.dashboard,
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: protectedLoader,
        Component: Dashboard,
      },
      {
        path: ROUTE_NAME.products,
        loader: protectedLoader,
        Component: ProductsPage,
      },
      {
        path: ROUTE_NAME.users,
        loader: protectedLoader,
        Component: UserPage,
      },
      {
        path: ROUTE_NAME.createUser,
        loader: protectedLoader,
        Component: CreateUserPage,
      },
      {
        path: ROUTE_NAME.profile,
        loader: protectedLoader,
        Component: ProfilePage,
      },
      {
        path: ROUTE_NAME.language,
        loader: protectedLoader,
        Component: LanguageSettingsPage,
      },
    ],
  },
];

const AppRoutes: Router = createBrowserRouter(routes);

export default AppRoutes;
