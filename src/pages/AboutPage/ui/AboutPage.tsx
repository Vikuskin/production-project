import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('aboutPage');

  return <div>{t('About Page')}</div>;
};

export default AboutPage;
