import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BackButton } from 'shared/ui/BackButton';
import { ReloadButton } from 'shared/ui/ReloadButton';

import * as styles from './ErrorPage.module.scss';

interface IErrorPageProps {
  text: string;
}

const ErrorPage: FC<IErrorPageProps> = ({ text }) => {
  const { t } = useTranslation('errorPage');

  return (
    <div className={styles.pageError}>
      <div className={styles.container}>
        <p className={styles.text}>{t(text)}</p>

        <span className={styles.handle}></span>
      </div>
      <ReloadButton className={styles.buttonReload} />
      <BackButton className={styles.buttonBack} />
    </div>
  );
};

export default ErrorPage;
