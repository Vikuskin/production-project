import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';

import * as styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (email: string) => setEmail(email);
  const onChangePassword = (password: string) => setPassword(password);

  return (
    <div className={getClassNames(styles.loginForm, [className ?? ''])}>
      <AppInput
        data-testid="email-input"
        className={styles.loginInput}
        value={email}
        onChange={onChangeEmail}
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
      <AppButton className={styles.loginBtn} variant={AppButtonVariants.Clear}>
        {t('Login')}
      </AppButton>
    </div>
  );
};
