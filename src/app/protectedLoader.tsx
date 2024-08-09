import { redirect } from 'react-router-dom';
import { LOCAL_STORAGE_KEYS, ROUTE_NAME } from '../constants';
import { fetchLocalData } from '../utils';

export function protectedLoader() {
  // If the user is not logged in and tries to access `/protected`, we redirect them to `/login`
  const token = fetchLocalData<string>(LOCAL_STORAGE_KEYS.token);
  if (!token) {
    return redirect(ROUTE_NAME.login);
  }
  return null;
}
