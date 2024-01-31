import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';

import * as styles from './EditableProfileCardHeader.module.scss';

import { updateProfileData } from '../../models/services/updateProfileData';
import { profileActions } from '../../models/slices/profileSlice';

interface IEditableProfileCardHeaderProps {
  profileReadonly: boolean;
  className?: string;
  avatar?: string;
}

export const EditableProfileCardHeader: FC<IEditableProfileCardHeaderProps> = memo(
  (props: IEditableProfileCardHeaderProps) => {
    const { className, avatar, profileReadonly } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const onSave = useCallback(() => dispatch(updateProfileData()), [dispatch]);
    const onEdit = useCallback(() => dispatch(profileActions.setReadonly(false)), [dispatch]);
    const onCancelEdit = useCallback(() => dispatch(profileActions.cancelEdit()), [dispatch]);

    return (
      <div className={getClassNames(styles.header, [className ?? ''])}>
        {avatar && <Avatar className={styles.avatarWrapper} src={avatar} />}
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
    );
  },
);
