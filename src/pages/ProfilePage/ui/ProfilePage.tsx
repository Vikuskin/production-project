import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
  selectProfileData,
  selectProfileError,
  selectProfileLoading,
} from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextVariant } from 'shared/ui/Text';
import { PageLoader } from 'widgets/PageLoader';

const profileAsyncReducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const profileError = useAppSelector(selectProfileError);
  const profileIsLoading = useAppSelector(selectProfileLoading);
  const profileData = useAppSelector(selectProfileData);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={profileAsyncReducers} removeAfterUnmount>
      {profileIsLoading && <PageLoader />}
      {profileError && (
        <Text title={t(`${profileError.status}_error`)} text={t(profileError.message)} variant={TextVariant.Error} />
      )}
      {profileData && <ProfileCard profileData={profileData} />}
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
