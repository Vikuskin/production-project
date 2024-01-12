import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const {t} = useTranslation('mainPage');

  return <div>{t('MainPage')}</div>;
}

export default MainPage;
