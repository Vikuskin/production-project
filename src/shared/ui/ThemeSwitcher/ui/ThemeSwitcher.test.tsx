import { fireEvent, render } from '@testing-library/react';

import { Themes, useTheme } from 'app/providers/theme';
import { AppButtonVariants } from 'shared/ui/AppButton';

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
    expect(themeSwitcher).toHaveClass(AppButtonVariants.Clear);
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
});
