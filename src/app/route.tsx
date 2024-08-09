import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login';
import MainLayout from '../layout/mainLayout';
import { ROUTE_NAME } from '../constants';
import HomePage from '../pages/Home';
import { protectedLoader } from './protectedLoader';

const AppRoutes = createBrowserRouter([
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
        Component: HomePage,
      },
    ],
  },
]);
export default AppRoutes;
