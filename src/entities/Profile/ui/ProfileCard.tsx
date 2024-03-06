import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { AppInput } from '@/shared/ui/AppInput';
import { ListBox } from '@/shared/ui/ListBox';

import * as styles from './ProfileCard.module.scss';

import { Country } from '../model/enums/country';
import { Currency } from '../model/enums/currency';
import { IProfileData } from '../model/interfaces/profileData';

interface ProfileCardProps {
  profileForm: Partial<IProfileData>;
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
    profileForm,
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
        value={profileForm.firstName!}
        placeholder={t('First name')}
        onChange={onChangeFirstName}
        readonly={readonly}
      />
      <AppInput
        value={profileForm.lastName!}
        placeholder={t('Last name')}
        onChange={onChangeLastName}
        readonly={readonly}
      />
      <AppInput
        onChange={onChangeUsername}
        value={profileForm.username!}
        placeholder={t('Username')}
        readonly={readonly}
      />
      <AppInput onChange={onChangeAvatar} value={profileForm.avatar!} placeholder={t('Avatar')} readonly={readonly} />
      <AppInput onChange={onChangeAge} value={profileForm.age!} placeholder={t('Age')} readonly={readonly} />
      <ListBox
        label={t('Currency')}
        className={styles.input}
        value={profileForm.currency!}
        onChange={onChangeCurrency}
        readonly={readonly}
        enumOptions={Currency}
      />
      <ListBox
        label={t('Country')}
        className={styles.input}
        value={profileForm.country!}
        onChange={onChangeCountry}
        readonly={readonly}
        enumOptions={Country}
      />
      <AppInput onChange={onChangeCity} value={profileForm.city!} placeholder={t('City')} readonly={readonly} />
    </div>
  );
};
