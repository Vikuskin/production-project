import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/providers/StoreProvider';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import { Text, TextVariants } from 'shared/ui/Text';

import * as styles from './LoginForm.module.scss';

import {
  selectLoginError,
  selectLoginIsLoading,
  selectLoginName,
  selectLoginPassword,
} from '../../model/selectors/selectLoginForm';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginFormActions } from '../../model/slices/loginFormSlice';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const username = useSelector(selectLoginName);
  const password = useSelector(selectLoginPassword);
  const isLoading = useSelector(selectLoginIsLoading);
  const error = useSelector(selectLoginError);
  const dispatch = useAppDispatch();
  const onChangeUsername = useCallback((value: string) => dispatch(loginFormActions.setUsername(value)), [dispatch]);
  const onChangePassword = useCallback((value: string) => dispatch(loginFormActions.setPassword(value)), [dispatch]);
  const onLoginClick = useCallback(
    () => dispatch(loginByUsername({ username, password })),
    [dispatch, password, username],
  );

  return (
    <div className={getClassNames(styles.loginForm, [className ?? ''])}>
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
      <AppButton
        onClick={onLoginClick}
        className={styles.loginBtn}
        variant={AppButtonVariants.Clear}
        disabled={isLoading}
      >
        {t('Login')}
      </AppButton>
    </div>
  );
});
