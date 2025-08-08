import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APP_THEME } from '../../../theme';
import { LOCAL_STORAGE_KEYS } from '../../../constants';
import { fetchLocalData, storeLocalData } from '../../../utils';

export interface ThemeDataType {
  name: string;
  image: string;
  backgroundColor: string;
  color: string;
  activeButtonBgColor: string;
  disableButtonBgColor: string;
  sideBarBgColor: string;
  sideBarFontColor: string;
  sideBarHoverColor: string;
}

const initialState: ThemeDataType = APP_THEME[0];

// Redux slice for theme
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setAppTheme: (_, action: PayloadAction<ThemeDataType>) => {
      storeLocalData({
        storageKey: LOCAL_STORAGE_KEYS.appTheme,
        value: action.payload,
      });
      return action.payload;
    },
    initializeTheme: () => {
      const storedAppTheme = fetchLocalData<ThemeDataType>(LOCAL_STORAGE_KEYS.appTheme);
      if (storedAppTheme) {
        return storedAppTheme;
      }
      return initialState;
    },
  },
});

// Export actions
export const { setAppTheme, initializeTheme } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
