import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { EditableProfileCard, profileReducer } from 'features/EditableProfileCard';
import { selectProfileError, selectProfileLoading } from 'features/EditableProfileCard/models/selectors/selectProfile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text';
import { PageLoader } from 'widgets/PageLoader';

import * as styles from './ProfilePage.module.scss';

const profileAsyncReducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage: FC = () => {
  const { t } = useTranslation();
  const profileError = useAppSelector(selectProfileError);
  const profileIsLoading = useAppSelector(selectProfileLoading);

  return (
    <DynamicModuleLoader reducers={profileAsyncReducers} removeAfterUnmount>
      <div className={styles.profilePage}>
        {profileIsLoading && <PageLoader data-testid="page-loader" />}
        {profileError ? (
          <Text
            title={t(`${profileError.status}_error`)}
            text={t(profileError.message)}
            variant={TextVariant.Error}
            align={TextAlign.Center}
          />
        ) : (
          <EditableProfileCard />
        )}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
