import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { selectUserAuthData } from 'entities/User';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
import { Avatar } from 'shared/ui/Avatar';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

import * as styles from './EditableProfileCardHeader.module.scss';

import { updateProfileData } from '../../models/services/updateProfileData';
import { profileActions } from '../../models/slices/profileSlice';

interface IEditableProfileCardHeaderProps {
  profileReadonly: boolean;
  profileId?: string;
  className?: string;
  avatar?: string;
}

export const EditableProfileCardHeader: FC<IEditableProfileCardHeaderProps> = memo(
  (props: IEditableProfileCardHeaderProps) => {
    const { className, avatar, profileReadonly, profileId } = props;
    const user = useAppSelector(selectUserAuthData);
    const isProfileBelongUser = user?.id === profileId;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const onSave = useCallback(() => dispatch(updateProfileData()), [dispatch]);
    const onEdit = useCallback(() => dispatch(profileActions.setReadonly(false)), [dispatch]);
    const onCancelEdit = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);

    if (!isProfileBelongUser) {
      return (
        <HStack className={getClassNames(styles.header, [className ?? ''])} justify="start">
          {avatar && <Avatar src={avatar} />}
          <Text title={t('Profile')} text="" />
        </HStack>
      );
    }

    return (
      <HStack className={getClassNames(styles.header, [className ?? ''])}>
        {avatar && <Avatar src={avatar} />}
        <Text title={t('Profile')} text="" />
        {profileReadonly ? (
          <AppButton data-testid="edit-btn" variant={AppButtonVariants.Outline} onClick={onEdit}>
            {t('Edit')}
          </AppButton>
        ) : (
          <>
            <AppButton data-testid="cancel-btn" variant={AppButtonVariants.OutlineDanger} onClick={onCancelEdit}>
              {t('Cancel')}
            </AppButton>
            <AppButton
              data-testid="save-btn"
              className={styles.editBtn}
              variant={AppButtonVariants.Outline}
              onClick={onSave}
            >
              {t('Save')}
            </AppButton>
          </>
        )}
      </HStack>
    );
  },
);
