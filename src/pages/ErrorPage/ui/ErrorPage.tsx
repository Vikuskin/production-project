import { FC } from 'react';
import * as styles from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ReloadButton } from 'shared/ui/ReloadButton';
import { BackButton } from 'shared/ui/BackButton';

interface ErrorPageProps {
  text: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ text }) => {
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
