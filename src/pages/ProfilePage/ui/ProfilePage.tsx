import React, { FC, ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard, profileReducer } from 'features/EditableProfileCard';
import {
  selectProfileError,
  selectProfileForm,
  selectProfileLoading,
} from 'features/EditableProfileCard/models/selectors/selectProfile';
import { fetchProfileData } from 'features/EditableProfileCard/models/services/fetchProfileData';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text';
import { PageLoader } from 'widgets/PageLoader';

import * as styles from './ProfilePage.module.scss';

const profileAsyncReducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const profileError = useAppSelector(selectProfileError);
  const profileIsLoading = useAppSelector(selectProfileLoading);
  const profileForm = useAppSelector(selectProfileForm);
  let content: ReactElement | null = null;

  useInitialEffect(() => id && dispatch(fetchProfileData(id)));

  if (profileIsLoading) {
    content = <PageLoader />;
  } else if (profileError) {
    content = (
      <Text
        title={t(`${profileError.status}_error`)}
        text={t(profileError.message)}
        variant={TextVariant.Error}
        align={TextAlign.Center}
      />
    );
  } else if (profileForm) {
    content = <EditableProfileCard profileForm={profileForm} />;
  }

  return (
    <DynamicReducerLoader reducers={profileAsyncReducers} removeAfterUnmount>
      <div className={styles.profilePage}>{content}</div>
    </DynamicReducerLoader>
  );
};

export default memo(ProfilePage);
