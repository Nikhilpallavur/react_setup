import { LOCAL_STORAGE_KEYS, ROUTE_NAME } from '../../constants';

export const logOut = () => {
  if (typeof window !== 'undefined') {
    // localStorage.clear(); // TODO: this is the actual one
    localStorage.removeItem(LOCAL_STORAGE_KEYS.token);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.userData);
    window.location.href = ROUTE_NAME.login;
  }
  return '';
};
