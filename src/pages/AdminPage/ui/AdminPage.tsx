import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from 'widgets/PageWrapper';

import * as styles from './AdminPage.module.scss';

const AdminPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className={styles.adminPage}>{t('Admin panel')}</div>
    </PageWrapper>
  );
};

export default AdminPage;
