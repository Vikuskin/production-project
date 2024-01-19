import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import TranslationSvg from 'shared/assets/icons/translation.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';

import * as styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LOCAL_STORAGE_KEY_LANG = 'lang';

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggleTranslate = () => {
    const choosedLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(choosedLanguage);
    localStorage.setItem(LOCAL_STORAGE_KEY_LANG, choosedLanguage);
  };

  return (
    <AppButton
      className={getClassNames(styles.langSwitcher, [className ?? ''])}
      data-testid="lang-switcher"
      variant={AppButtonVariants.Clear}
      onClick={toggleTranslate}
    >
      <TranslationSvg className={styles.langIcon} />
      <span>{t('Language')}</span>
    </AppButton>
  );
};
