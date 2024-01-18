import { fireEvent, render } from '@testing-library/react';

import { Themes, useTheme } from 'app/providers/theme';
import { ButtonVariants } from 'shared/ui/AppButton';

import { ThemeSwitcher } from './ThemeSwitcher';

jest.mock('app/providers/theme', () => ({
  ...jest.requireActual('app/providers/theme'),
  useTheme: jest.fn(),
}));

describe('ThemeSwitcher', () => {
  const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

  it('renders with default props', () => {
    mockUseTheme.mockReturnValue({ theme: Themes.Light, toggleTheme: jest.fn() });

    const { getByTestId } = render(<ThemeSwitcher />);
    const themeSwitcher = getByTestId('theme-switcher');

    expect(themeSwitcher).toBeInTheDocument();
    expect(themeSwitcher).toHaveClass(ButtonVariants.Clear);
  });

  it('calls toggleTheme function on click', () => {
    const mockToggleTheme = jest.fn();

    mockUseTheme.mockReturnValue({ theme: Themes.Light, toggleTheme: mockToggleTheme });

    const { getByTestId } = render(<ThemeSwitcher />);
    const themeSwitcher = getByTestId('theme-switcher');

    fireEvent.click(themeSwitcher);

    expect(mockToggleTheme).toHaveBeenCalled();
  });

  it('applies custom class name', () => {
    mockUseTheme.mockReturnValue({ theme: Themes.Light, toggleTheme: jest.fn() });

    const { container } = render(<ThemeSwitcher className="custom-class" />);
    const themeSwitcher = container.querySelector('.custom-class');

    expect(themeSwitcher).toBeInTheDocument();
  });

  it('renders light icon when theme is dark', () => {
    mockUseTheme.mockReturnValue({ theme: Themes.Light, toggleTheme: jest.fn() });

    const { getByTestId } = render(<ThemeSwitcher />);
    const lightIcon = getByTestId('light-icon');

    expect(lightIcon).toBeInTheDocument();
  });

  it('renders dark icon when theme is light', () => {
    mockUseTheme.mockReturnValue({ theme: Themes.Dark, toggleTheme: jest.fn() });

    const { getByTestId } = render(<ThemeSwitcher />);
    const darkIcon = getByTestId('dark-icon');

    expect(darkIcon).toBeInTheDocument();
  });
});
