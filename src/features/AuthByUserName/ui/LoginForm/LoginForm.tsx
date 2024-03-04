import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { AppButton } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import { VStack } from 'shared/ui/Stack';
import { Text, TextVariants } from 'shared/ui/Text';

import * as styles from './LoginForm.module.scss';

import {
  selectLoginError,
  selectLoginIsLoading,
  selectLoginName,
  selectLoginPassword,
} from '../../model/selectors/selectLoginForm';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginFormActions, loginFormReducer } from '../../model/slices/loginFormSlice';

interface LoginFormProps {
  onClose: () => void;
  className?: string;
}

const loginAsyncReducers: ReducersList = {
  loginForm: loginFormReducer,
};
const LoginForm: FC<LoginFormProps> = memo(({ className, onClose }: LoginFormProps) => {
  const { t } = useTranslation();
  const username = useAppSelector(selectLoginName);
  const password = useAppSelector(selectLoginPassword);
  const isLoading = useAppSelector(selectLoginIsLoading);
  const error = useAppSelector(selectLoginError);
  const dispatch = useAppDispatch();
  const onChangeUsername = useCallback((value: string) => dispatch(loginFormActions.setUsername(value)), [dispatch]);
  const onChangePassword = useCallback((value: string) => dispatch(loginFormActions.setPassword(value)), [dispatch]);
  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUsername({ username, password }));

    res.meta.requestStatus === 'fulfilled' && onClose();
  }, [dispatch, onClose, password, username]);

  return (
    <DynamicReducerLoader reducers={loginAsyncReducers} removeAfterUnmount>
      <VStack className={getClassNames('', [className ?? ''])}>
        {error && <Text title={t(`${error.status}_error`)} text={t(error.message)} variant={TextVariants.Error} />}
        <AppInput
          data-testid="username-input"
          className={styles.loginInput}
          value={username}
          onChange={onChangeUsername}
          placeholder={t('Username')}
          autoFocus={true}
        />
        <AppInput
          data-testid="password-input"
          className={styles.loginInput}
          value={password}
          onChange={onChangePassword}
          placeholder={t('Password')}
        />
        <AppButton onClick={onLoginClick} className={styles.loginBtn} disabled={isLoading}>
          {t('Login')}
        </AppButton>
      </VStack>
    </DynamicReducerLoader>
  );
});

export default LoginForm;
