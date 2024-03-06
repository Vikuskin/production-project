import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper';

const MainPage: FC = () => {
  const { t } = useTranslation('mainPage');

  return <PageWrapper>{t('Main Page')}</PageWrapper>;
};

export default memo(MainPage);
