import CryptoJS from 'crypto-js';
import { SECRET_KEY_LOCAL } from '../../app/config';

interface ModulePermission {
  view: boolean;
  edit: boolean;
  list: boolean;
  add: boolean;
  delete: boolean;
}

interface Module {
  permissions: ModulePermission;
  name: string;
}

export interface RolePermissionLocalStorage {
  _id: string;
  role: string;
  reportsToId: string;
  modules: Module[];
  isDelete: boolean;
  createdAt: string;
  updatedAt: string;
}

const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY_LOCAL).toString();
};

const decryptData = (data: string): string => {
  const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY_LOCAL);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const storeLocalData = <T>({ storageKey, value }: { storageKey: string; value: T }) => {
  if (typeof window !== 'undefined') {
    const encryptedValue = encryptData(JSON.stringify(value));
    localStorage.setItem(storageKey, encryptedValue);
  }
};

export const fetchLocalData = <T>(storageKey: string): T | null => {
  if (typeof window !== 'undefined') {
    const encryptedValue = localStorage.getItem(storageKey);
    if (encryptedValue) {
      try {
        return JSON.parse(decryptData(encryptedValue)) as T;
      } catch (e) {
        console.error('Failed to decrypt local data:', e);
      }
    }
  }
  return null;
};

export const clearLocalData = (storageKey: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(storageKey);
  }
};
