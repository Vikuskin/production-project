import { fireEvent, render, within } from '@testing-library/react';

import i18n from 'app/providers/i18n/i18nForTests';
import { Themes, useTheme } from 'app/providers/theme';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

import { Sidebar } from './Sidebar';

jest.mock('app/providers/theme', () => ({
  ...jest.requireActual('app/providers/theme'),
  useTheme: jest.fn(),
}));

describe('Sidebar', () => {
  const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;
  const mockToggleTheme = jest.fn();

  beforeEach(() => {
    mockUseTheme.mockReturnValue({ theme: Themes.Light, toggleTheme: mockToggleTheme });
  });

  it('renders without crashing', () => {
    renderWithTranslation(<Sidebar />);
  });

  it('renders with the correct class and passed className', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = render(<Sidebar className={mockClassName} />);
    const sidebar = getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('sidebar', mockClassName);
  });

  it('toggles collapsed state on button click', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = render(<Sidebar className={mockClassName} />);
    const sidebar = getByTestId('sidebar');
    const button = within(sidebar).getByTestId('sidebar-toggle-btn');

    fireEvent.click(button);

    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(button);

    expect(sidebar).not.toHaveClass('collapsed');
  });

  it('calls toggleTheme function on click', () => {
    const { getByTestId } = render(<Sidebar />);
    const themeSwitcher = getByTestId('theme-switcher');

    fireEvent.click(themeSwitcher);

    expect(mockToggleTheme).toHaveBeenCalled();
  });

  describe('toggle language', () => {
    let langSwitcher: HTMLElement;
    let prevLang: string;
    let expectedLang: string;

    beforeEach(() => {
      const { getByTestId } = render(<Sidebar />);

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
