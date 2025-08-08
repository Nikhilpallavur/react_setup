import { fetchLocalData } from './localStorage';
import { LOCAL_STORAGE_KEYS } from '../../constants';
import { userDataItem } from '../../types';

export const fetchUserDataFromLocalStore = (): userDataItem | null => {
  try {
    const userDataJson = fetchLocalData<userDataItem>(LOCAL_STORAGE_KEYS.userData);
    if (userDataJson) {
      return userDataJson;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
  return null;
};
