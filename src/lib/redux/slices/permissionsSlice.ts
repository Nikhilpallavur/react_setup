import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLocalData, storeLocalData } from '../../../utils';
import { LOCAL_STORAGE_KEYS } from '../../../constants';

// Define the structure for permissions data
export interface ModulePermissions {
  view: boolean;
  edit: boolean;
  list: boolean;
  add: boolean;
  delete: boolean;
}

export interface Module {
  permissions: ModulePermissions;
  name: number;
}

export interface PermissionData {
  role: string;
  roleType?: number;
  modules: Module[];
}

// Initial state
const initialState: PermissionData = {
  role: '',
  modules: [],
  roleType: 1,
};

// Redux slice
const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    setPermissions: (state, action: PayloadAction<PermissionData>) => {
      // Update state and store to local storage
      state.role = action.payload.role;
      state.roleType = action.payload.roleType;
      state.modules = action.payload.modules;
      storeLocalData({
        storageKey: LOCAL_STORAGE_KEYS.permission,
        value: action.payload,
      });
    },
    initializePermissions: (state) => {
      const storedPermissions = fetchLocalData<PermissionData>(LOCAL_STORAGE_KEYS.permission);
      if (storedPermissions) {
        state.role = storedPermissions.role;
        state.roleType = storedPermissions.roleType;
        state.modules = storedPermissions.modules;
      }
    },
  },
});

// Export actions
export const { setPermissions, initializePermissions } = permissionsSlice.actions;

// Export reducer
export default permissionsSlice.reducer;
