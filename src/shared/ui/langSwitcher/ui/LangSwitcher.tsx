import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton, ButtonVariants } from 'shared/ui/AppButton';

interface LangSwitcherProps {
  className?: string;
}

export const LOCAL_STORAGE_KEY_LANG = 'lang';

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleTranslate = () => {
    const choosedLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(choosedLanguage);
    localStorage.setItem(LOCAL_STORAGE_KEY_LANG, choosedLanguage);
  };

  return (
    <AppButton
      data-testid="lang-switcher"
      className={className}
      variant={ButtonVariants.Clear}
      onClick={toggleTranslate}
    >
      {t('Language')}
    </AppButton>
  );
};
