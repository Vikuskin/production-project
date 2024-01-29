import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import { Text } from 'shared/ui/Text';

import * as styles from './ProfileCard.module.scss';

import { IProfileData } from '../models/types/profile';

interface ProfileCardProps {
  profileData: IProfileData;
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className, profileData }) => {
  const { t } = useTranslation('profile');

  return (
    <div className={getClassNames(styles.card, [className ?? ''])}>
      <div className={styles.header}>
        <Text title={t('Profile')} text="" />
        <AppButton variant={AppButtonVariant.Outline}>{t('Edit')}</AppButton>
      </div>
      <div className={styles.form}>
        <AppInput value={profileData?.firstName} placeholder={t('First name')} />
        <AppInput value={profileData?.lastName} placeholder={t('Last name')} />
        <AppInput value={profileData?.username} placeholder={t('Username')} />
        <AppInput value={profileData?.age} placeholder={t('Age')} />
        <AppInput value={profileData?.currency} placeholder={t('Currency')} />
        <AppInput value={profileData?.country} placeholder={t('Country')} />
        <AppInput value={profileData?.city} placeholder={t('City')} />
      </div>
    </div>
  );
};
