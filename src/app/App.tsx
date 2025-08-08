import { RouterProvider } from 'react-router-dom';
import AppRoutes from './route';

import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useAppDispatch } from '../lib/redux/hooks';
import { initializePermissions } from '../lib/redux/slices/permissionsSlice';
import { initializeTheme } from '../lib/redux/slices/themeSlice';

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initializePermissions());
    dispatch(initializeTheme());
  }, [dispatch]);
  return (
    <div className='h-screen w-screen'>
      <Toaster position='top-center' />
      <RouterProvider router={AppRoutes} fallbackElement={<span>Initial Load...</span>} />
    </div>
  );
}
