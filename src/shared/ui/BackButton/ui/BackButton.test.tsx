import { fireEvent, render } from '@testing-library/react';
import { BackButton } from './BackButton';
import { ButtonVariants } from 'shared/ui/AppButton';

describe('BackButton', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<BackButton />);
    const backButton = getByTestId('back-button');

    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveClass(ButtonVariants.Clear);
  });

  it('calls window.history.back() on click', () => {
    const { getByTestId } = render(<BackButton />);
    const backButton = getByTestId('back-button');
    const originalBack = window.history.back;

    window.history.back = jest.fn();

    fireEvent.click(backButton);

    expect(window.history.back).toHaveBeenCalled();

    window.history.back = originalBack;
  });

  it('renders with custom class name', () => {
    const mockClassName = 'custom-class';
    const { container } = render(<BackButton className={mockClassName} />);
    const backButton = container.querySelector('.custom-class');

    expect(backButton).toBeInTheDocument();
  });
});
