import { within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import i18n from '@/app/providers/i18n/i18nForTests';
import { Themes } from '@/shared/enums/themes';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { AppButtonVariants } from '@/shared/ui/AppButton';

import { Sidebar } from './Sidebar';

jest.mock('shared/lib/hooks/useTheme', () => ({
  ...jest.requireActual('shared/lib/hooks/useTheme'),
  useTheme: jest.fn(),
}));

describe('Sidebar', () => {
  const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;
  const mockToggleTheme = jest.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    mockUseTheme.mockReturnValue({ theme: Themes.Light, toggleTheme: mockToggleTheme });
  });

  it('renders without crashing', () => {
    componentRender(<Sidebar />);
  });

  it('renders with the correct class and passed className', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = componentRender(<Sidebar className={mockClassName} />, {
      initialState: { user: { authData: null } },
    });
    const sidebar = getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('sidebar', mockClassName);
  });

  it('toggles collapsed class on button click', async () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = componentRender(<Sidebar className={mockClassName} />, {
      initialState: { user: { authData: null } },
    });
    const sidebar = getByTestId('sidebar');
    const button = within(sidebar).getByTestId('sidebar-collapse-btn');

    await user.click(button);

    expect(sidebar).not.toHaveClass('collapsed');
    expect(button).toHaveClass(AppButtonVariants.Clear);

    await user.click(button);

    expect(sidebar).toHaveClass('collapsed');
  });

  it('calls toggleTheme function on click', async () => {
    const { getByText } = componentRender(<Sidebar />, { initialState: { user: { authData: null } } });
    const Themewitcher = getByText('Theme');

    await user.click(Themewitcher);

    expect(mockToggleTheme).toHaveBeenCalled();
  });

  describe('toggle language', () => {
    let langSwitcher: HTMLElement;
    let prevLang: string;
    let expectedLang: string;

    beforeEach(() => {
      const { getByText } = componentRender(<Sidebar />, { initialState: { user: { authData: null } } });

      langSwitcher = getByText('Language');
      prevLang = JSON.parse(JSON.stringify(i18n.language));
      expectedLang = prevLang === 'ru' ? 'en' : 'ru';
    });

    it('toggles en lang to ru', async () => {
      i18n.language = 'en';
      await user.click(langSwitcher);

      const resultLang = i18n.language;

      expect(resultLang).not.toBe(prevLang);
      expect(resultLang).toBe(expectedLang);
    });

    it('toggles ru lang to en', async () => {
      i18n.language = 'ru';
      await user.click(langSwitcher);

      const resultLang = i18n.language;

      expect(resultLang).not.toBe(prevLang);
      expect(resultLang).toBe(expectedLang);
    });
  });

  it('renders login button when auth data is not exist', async () => {
    const { getByText, getByTestId } = componentRender(<Sidebar />, {
      initialState: { user: { authData: null } },
    });
    const loginBtn = getByText('Login');

    await user.click(loginBtn);

    const authModal = getByTestId('Modal.content');

    expect(loginBtn).toBeInTheDocument();
    expect(authModal).toBeInTheDocument();
  });

  it('renders logout button when auth data is exist', () => {
    const { getByText } = componentRender(<Sidebar />, {
      initialState: { user: { authData: { id: '1', username: 'test' } } },
    });
    const loginBtn = getByText('Logout');

    expect(loginBtn).toBeInTheDocument();
  });
});
