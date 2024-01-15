import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  const { t } = useTranslation('notFoundPage');

  return <div className={styles.notFound}>{t('Page not found')}</div>;
};

export default NotFoundPage;
