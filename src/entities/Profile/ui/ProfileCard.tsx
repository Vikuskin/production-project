import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Country, SelectCountry } from 'entities/Country';
import { Currency, SelectCurrency } from 'entities/Currency';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppInput } from 'shared/ui/AppInput';

import * as styles from './ProfileCard.module.scss';

import { IProfileData } from '../model/types/profileData';

interface ProfileCardProps {
  profileData: Partial<IProfileData>;
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
  onChangeCity: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeUsername: (value: string) => void;
  onChangeAvatar: (value: string) => void;
  onChangeCurrency: (value: Currency) => void;
  onChangeCountry: (value: Country) => void;
  readonly?: boolean;
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    profileData,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
    className,
    readonly,
  } = props;
  const { t } = useTranslation('profile');

  return (
    <div className={getClassNames(styles.profileForm, [className ?? ''])}>
      <AppInput
        value={profileData.firstName!}
        placeholder={t('First name')}
        onChange={onChangeFirstName}
        readonly={readonly}
      />
      <AppInput
        value={profileData.lastName!}
        placeholder={t('Last name')}
        onChange={onChangeLastName}
        readonly={readonly}
      />
      <AppInput
        onChange={onChangeUsername}
        value={profileData.username!}
        placeholder={t('Username')}
        readonly={readonly}
      />
      <AppInput onChange={onChangeAvatar} value={profileData.avatar!} placeholder={t('Avatar')} readonly={readonly} />
      <AppInput onChange={onChangeAge} value={profileData.age!} placeholder={t('Age')} readonly={readonly} />
      <SelectCurrency
        className={styles.input}
        value={profileData.currency!}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <SelectCountry
        className={styles.input}
        value={profileData.country!}
        onChange={onChangeCountry}
        readonly={readonly}
      />
      <AppInput onChange={onChangeCity} value={profileData.city!} placeholder={t('City')} readonly={readonly} />
    </div>
  );
};
