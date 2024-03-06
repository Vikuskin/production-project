import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Country, Currency, IProfileData, ProfileCard } from '@/entities/Profile';
import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { Text, TextVariants } from '@/shared/ui/Text';

import * as styles from './EditableProfileCard.module.scss';

import { selectProfileReadonly, selectProfileValidationErrors } from '../../models/selectors/selectProfile';
import { profileActions } from '../../models/slices/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface IEditableProfileCardProps {
  profileForm: Partial<IProfileData>;
  className?: string;
}

export const EditableProfileCard: FC<IEditableProfileCardProps> = ({ className, profileForm }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const profileReadonly = useAppSelector(selectProfileReadonly);
  const profileValidationErrors = useAppSelector(selectProfileValidationErrors);
  const validationErrors = useMemo(
    () =>
      profileValidationErrors &&
      profileValidationErrors.map((error) => <Text variant={TextVariants.Error} key={error} text={t(error)} />),
    [profileValidationErrors, t],
  );
  const onChangeFirstName = useCallback(
    (value: string) => dispatch(profileActions.updateProfile({ firstName: value })),
    [dispatch],
  );
  const onChangeLastName = useCallback(
    (value: string) => dispatch(profileActions.updateProfile({ lastName: value })),
    [dispatch],
  );
  const onChangeAge = useCallback(
    (value: string) => {
      const valid = value.replace(/\D+/gm, '');

      dispatch(profileActions.updateProfile({ age: valid }));
    },
    [dispatch],
  );
  const onChangeCity = useCallback(
    (value: string) => dispatch(profileActions.updateProfile({ city: value })),
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value: string) => dispatch(profileActions.updateProfile({ avatar: value })),
    [dispatch],
  );
  const onChangeUsername = useCallback(
    (value: string) => dispatch(profileActions.updateProfile({ username: value })),
    [dispatch],
  );
  const onChangeCurrency = useCallback(
    (value: Currency) => dispatch(profileActions.updateProfile({ currency: value })),
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (value: Country) => dispatch(profileActions.updateProfile({ country: value })),
    [dispatch],
  );

  return (
    <div className={getClassNames('', [className ?? ''])}>
      <EditableProfileCardHeader
        profileId={profileForm.id}
        avatar={profileForm.avatar}
        profileReadonly={profileReadonly}
      />
      {validationErrors}
      <ProfileCard
        className={styles.form}
        profileForm={profileForm}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
        readonly={profileReadonly}
      />
    </div>
  );
};
