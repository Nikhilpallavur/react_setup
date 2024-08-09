import { RouterProvider } from 'react-router-dom';
import AppRoutes from './route';

export default function App() {
  return <RouterProvider router={AppRoutes} fallbackElement={<span>Initial Load...</span>} />;
}
