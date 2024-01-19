import { fireEvent, render } from '@testing-library/react';

import i18n from 'app/providers/i18n/i18nForTests';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { AppButtonVariants } from 'shared/ui/AppButton';

import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
  it('renders without crashing', () => {
    renderWithTranslation(<LangSwitcher />);
  });

  it('renders with the correct button class and passed className', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = render(<LangSwitcher className={mockClassName} />);
    const langSwitcher = getByTestId('lang-switcher');

    expect(langSwitcher).toBeInTheDocument();
    expect(langSwitcher).toHaveClass(mockClassName, AppButtonVariants.Clear);
  });

  describe('toggle language', () => {
    let langSwitcher: HTMLElement;
    let prevLang: string;
    let expectedLang: string;

    beforeEach(() => {
      const { getByTestId } = render(<LangSwitcher />);

      langSwitcher = getByTestId('lang-switcher');
      prevLang = JSON.parse(JSON.stringify(i18n.language));
      expectedLang = prevLang === 'ru' ? 'en' : 'ru';
    });

    it('toggles en lang to ru', () => {
      i18n.language = 'en';
      fireEvent.click(langSwitcher);

      const resultLang = i18n.language;

      expect(resultLang).not.toBe(prevLang);
      expect(resultLang).toBe(expectedLang);
    });

    it('toggles ru lang to en', () => {
      i18n.language = 'ru';
      fireEvent.click(langSwitcher);

      const resultLang = i18n.language;

      expect(resultLang).not.toBe(prevLang);
      expect(resultLang).toBe(expectedLang);
    });
  });
});
