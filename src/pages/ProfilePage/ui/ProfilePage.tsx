import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();

  return <div className={getClassNames(styles.profilePage, [className ?? ''])}>{t('Profile')}</div>;
};

export default ProfilePage;
