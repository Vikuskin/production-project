import { RenderOptions, render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import i18n from 'app/providers/i18n/i18nForTests';

export const renderWithTranslation = (component: ReactNode, options?: Omit<RenderOptions, 'queries'>) => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>, { ...options });
};
