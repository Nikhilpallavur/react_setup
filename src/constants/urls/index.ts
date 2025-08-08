import { ICONS } from '../../assets';

export const ROUTE_NAME = {
  login: '/login',
  dashboard: '/',
  users: '/users',
  createUser: '/users/create',
  profile: '/profile',
  language: '/profile/language',
  products: '/products',
};

export const SIDEBAR_ITEMS = [
  {
    name: 'Dashboard',
    path: ROUTE_NAME.dashboard,
    image: ICONS.dashboard,
  },
  {
    name: 'Products',
    path: ROUTE_NAME.products,
    image: ICONS.dashboard,
  },
  {
    name: 'User',
    path: ROUTE_NAME.users,
    image: ICONS.dashboard,
  },
];
