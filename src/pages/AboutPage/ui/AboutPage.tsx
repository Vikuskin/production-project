import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from 'shared/ui/PageWrapper';

const AboutPage: FC = () => {
  const { t } = useTranslation('aboutPage');

  return <PageWrapper>{t('About Page')}</PageWrapper>;
};

export default memo(AboutPage);
