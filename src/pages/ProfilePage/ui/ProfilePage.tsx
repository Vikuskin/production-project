import React, { FC, ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import {
  EditableProfileCard,
  fetchProfileData,
  profileReducer,
  selectProfileError,
  selectProfileForm,
  selectProfileLoading,
} from '@/features/EditableProfileCard';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Text, TextAligns, TextVariants } from '@/shared/ui/Text';
import { PageLoader } from '@/widgets/PageLoader';
import { PageWrapper } from '@/widgets/PageWrapper';

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
        variant={TextVariants.Error}
        align={TextAligns.Center}
      />
    );
  } else if (profileForm) {
    content = <EditableProfileCard profileForm={profileForm} />;
  }

  return (
    <PageWrapper>
      <DynamicReducerLoader reducers={profileAsyncReducers} removeAfterUnmount>
        <section className={styles.profilePage}>{content}</section>
      </DynamicReducerLoader>
    </PageWrapper>
  );
};

export default memo(ProfilePage);
