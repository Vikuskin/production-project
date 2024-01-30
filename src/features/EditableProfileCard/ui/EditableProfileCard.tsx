import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/useAppDispatch';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';

import * as styles from './EditableProfileCard.module.scss';

import { selectProfileForm, selectProfileReadonly } from '../models/selectors/selectProfile';
import { fetchProfileData } from '../models/services/fetchProfileData';
import { updateProfileData } from '../models/services/updateProfileData';
import { profileActions } from '../models/slices/profileSlice';

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const profileForm = useAppSelector(selectProfileForm);
  const profileReadonly = useAppSelector(selectProfileReadonly);
  const onEdit = useCallback(() => dispatch(profileActions.setReadonly(false)), [dispatch]);
  const onCancelEdit = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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
  const onSave = useCallback(() => dispatch(updateProfileData()), [dispatch]);

  return (
    profileForm && (
      <div className={getClassNames('', [className ?? ''])}>
        <div className={styles.header}>
          {profileForm.avatar && <Avatar className={styles.avatarWrapper} src={profileForm.avatar} />}
          <Text title={t('Profile')} text="" />
          {profileReadonly ? (
            <AppButton data-testid="edit-btn" variant={AppButtonVariant.Outline} onClick={onEdit}>
              {t('Edit')}
            </AppButton>
          ) : (
            <>
              <AppButton data-testid="cancel-btn" variant={AppButtonVariant.OutlineDanger} onClick={onCancelEdit}>
                {t('Cancel')}
              </AppButton>
              <AppButton
                data-testid="save-btn"
                className={styles.editBtn}
                variant={AppButtonVariant.Outline}
                onClick={onSave}
              >
                {t('Save')}
              </AppButton>
            </>
          )}
        </div>
        <ProfileCard
          className={styles.form}
          profileData={profileForm}
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
    )
  );
};
