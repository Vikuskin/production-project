import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCard } from 'entities/Profile';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextVariant } from 'shared/ui/Text';
import { PageLoader } from 'widgets/PageLoader';

import { selectProfileData, selectProfileError, selectProfileLoading } from '../models/selectors/selectProfile';
import { fetchProfileData } from '../models/services/fetchProfileData';
import { profileReducer } from '../models/slices/profileSlice';

interface EditableProfileCardProps {
  className?: string;
}

const profileAsyncReducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const profileError = useAppSelector(selectProfileError);
  const profileIsLoading = useAppSelector(selectProfileLoading);
  const profileData = useAppSelector(selectProfileData);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={getClassNames('', [className ?? ''])}>
      <DynamicModuleLoader reducers={profileAsyncReducers} removeAfterUnmount>
        {profileIsLoading && <PageLoader />}
        {profileError && (
          <Text title={t(`${profileError.status}_error`)} text={t(profileError.message)} variant={TextVariant.Error} />
        )}
        {profileData && <ProfileCard profileData={profileData} />}
      </DynamicModuleLoader>
    </div>
  );
};
