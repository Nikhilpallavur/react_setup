import React, { useState } from 'react';
import {
  BUTTON_TEXT,
  CARD_HEADER_TEXT,
  INPUT_TEXT,
  LOCAL_STORAGE_KEYS,
  ROUTE_NAME,
} from '../../constants';
import { BUTTON_CLASS_NAME, FONT, GRADIENT_BG } from '../../styles';
import { CustomButton, CustomInput } from '../../components';
import LinkButton from '../../components/common/button/linkButton';
import Data from '../../utils/data/userData.json';
import { isEmail, isNonEmptyString, storeLocalData } from '../../utils';
import { useNavigate } from 'react-router-dom';

import { APP_THEME } from '../../theme';
import toast from 'react-hot-toast';
import { setAppTheme, ThemeDataType } from '../../lib/redux/slices/themeSlice';
import { useAppDispatch } from '../../lib/redux/hooks';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [selectedTheme] = useState<ThemeDataType | null>(APP_THEME[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmail(userId) && isNonEmptyString(password) && selectedTheme) {
      dispatch(setAppTheme(selectedTheme));
      storeLocalData({ storageKey: LOCAL_STORAGE_KEYS.appTheme, value: selectedTheme });
      storeLocalData({ storageKey: LOCAL_STORAGE_KEYS.token, value: Data.token });
      storeLocalData({
        storageKey: LOCAL_STORAGE_KEYS.userData,
        value: Data.userData,
      });
      storeLocalData({
        storageKey: LOCAL_STORAGE_KEYS.permission,
        value: Data.permissionData,
      });
      storeLocalData({
        storageKey: LOCAL_STORAGE_KEYS.selectedPath,
        value: ROUTE_NAME.dashboard,
      });
      navigate(ROUTE_NAME.dashboard);
    } else {
      toast.error('Please select all mandatory felids');
    }

    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`"w-full px-[2rem] py-9 text-[.9rem] sm:max-w-md sm:rounded-card-radius sm:px-9 sm:shadow-[15px_15px_20px_#ffffff_inset,15px_15px_20px_#cbd5e1]`}
    >
      <div className='flex flex-col items-center'>
        <div className={`mb-10 sm:mb-5 ${FONT.cardHeaderTextSmall}`}>{CARD_HEADER_TEXT.login}</div>
      </div>
      <div className='mb-3 sm:mb-6'>
        <label htmlFor='userId' className={`block text-gray-700 ${FONT.contentText}`}>
          {INPUT_TEXT.userId}
        </label>
        <CustomInput
          onChange={(e) => setUserId(e.target.value)}
          required
          value={userId}
          type='email'
        />
      </div>
      <div>
        <label htmlFor='password' className={`${FONT.contentText} block text-gray-700`}>
          {INPUT_TEXT.password}
        </label>
        <CustomInput onChange={(e) => setPassword(e.target.value)} required value={password} />
      </div>
      <div className='mb-4 sm:mb-8'>
        <LinkButton type='button' title={BUTTON_TEXT.forgotPassword} />
      </div>
      <div className='mb-10 sm:mb-4'>
        <div className='flex items-start'>
          <div>
            <input
              type='checkbox'
              checked={isAccepted}
              onChange={(e) => setIsAccepted(e.target.checked)}
              className='form-checkbox'
              required
            />
          </div>
          <div className={`ml-2 ${FONT.contentText}`}>
            I accept the{' '}
            <a href='#' className='text-blue-600'>
              terms of use
            </a>{' '}
            and{' '}
            <a href='#' className='text-blue-600'>
              privacy policy
            </a>
          </div>
        </div>
      </div>
      <CustomButton
        className={`${BUTTON_CLASS_NAME.commonButton} ${GRADIENT_BG.gradientToLeft} text-white`}
        buttonText={BUTTON_TEXT.login}
      />
    </form>
  );
};

const App: React.FC = () => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-app-bg-color'>
      <LoginForm />
    </div>
  );
};

export default App;
