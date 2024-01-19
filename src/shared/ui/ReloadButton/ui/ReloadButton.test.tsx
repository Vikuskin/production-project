import { fireEvent, render } from '@testing-library/react';

import { AppButtonVariants } from 'shared/ui/AppButton';

import { ReloadButton } from './ReloadButton';

describe('ReloadButton', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<ReloadButton />);
    const reloadButton = getByTestId('reload-button');

    expect(reloadButton).toBeInTheDocument();
    expect(reloadButton).toHaveClass(AppButtonVariants.Clear);
  });

  it('calls loaction.reload() on click', () => {
    const { reload: originalReload } = window.location;

    Object.defineProperty(window, 'location', {
      writable: true,
      value: { reload: jest.fn() },
    });

    const { getByTestId } = render(<ReloadButton />);
    const reloadButton = getByTestId('reload-button');

    fireEvent.click(reloadButton);

    expect(window.location.reload).toHaveBeenCalled();

    window.location.reload = originalReload;
  });

  it('renders with custom class name', () => {
    const mockClassName = 'custom-class';
    const { container } = render(<ReloadButton className={mockClassName} />);
    const reloadButton = container.querySelector('.custom-class');

    expect(reloadButton).toBeInTheDocument();
  });
});
