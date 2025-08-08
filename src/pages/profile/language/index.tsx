import { useTranslation } from 'react-i18next';
import { CustomButton, MainHeader } from '../../../components';
import { BUTTON_CLASS_NAME, GRADIENT_BG, PADDING } from '../../../styles';

const LanguageSettingsPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`h-full w-full ${PADDING.horizontalPadding}`}>
      <MainHeader title={t('languageSettings')} className='mb-6' />

      <div className='flex max-w-md flex-col gap-4'>
        <CustomButton
          buttonText={t('english')}
          onClick={() => changeLanguage('en')}
          className={`${BUTTON_CLASS_NAME.commonButton} ${GRADIENT_BG.gradientToLeft} text-white`}
        />
        <CustomButton
          buttonText={t('hindi')}
          onClick={() => changeLanguage('hi')}
          className={`${BUTTON_CLASS_NAME.commonButton} ${GRADIENT_BG.gradientToLeft} text-white`}
        />
      </div>
    </div>
  );
};

export default LanguageSettingsPage;
