import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorStatusCode } from '@/shared/enums/errorStatusCode';
import { BackButton } from '@/shared/ui/BackButton';
import { ReloadButton } from '@/shared/ui/ReloadButton';

import * as styles from './ErrorPage.module.scss';

interface IErrorPageProps {
  text: string;
  errorCode: ErrorStatusCode;
}

export const ErrorPage: FC<IErrorPageProps> = memo(({ text, errorCode }: IErrorPageProps) => {
  const { t } = useTranslation('errorPage');

  return (
    <div className={styles.pageError}>
      <div className={styles.container}>
        <p className={styles.text}>
          {errorCode} {t(text)}
        </p>

        <span className={styles.handle}></span>
      </div>
      <ReloadButton className={styles.buttonReload} />
      <BackButton className={styles.buttonBack} />
    </div>
  );
});
