import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { EditableProfileCard, profileReducer } from 'features/EditableProfileCard';
import { selectProfileError, selectProfileLoading } from 'features/EditableProfileCard/models/selectors/selectProfile';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
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
  let content;

  if (profileIsLoading) {
    content = <PageLoader data-testid="page-loader" />;
  } else if (profileError) {
    content = (
      <Text
        title={t(`${profileError.status}_error`)}
        text={t(profileError.message)}
        variant={TextVariant.Error}
        align={TextAlign.Center}
      />
    );
  } else {
    content = <EditableProfileCard />;
  }

  return (
    <DynamicReducerLoader reducers={profileAsyncReducers} removeAfterUnmount>
      <div className={styles.profilePage}>{content}</div>
    </DynamicReducerLoader>
  );
};

export default memo(ProfilePage);
