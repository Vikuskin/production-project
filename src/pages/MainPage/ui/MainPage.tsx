import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('mainPage');

  return <div>{t('Main Page')}</div>;
};

export default MainPage;
