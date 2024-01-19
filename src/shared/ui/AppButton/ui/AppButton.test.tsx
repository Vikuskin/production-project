import { fireEvent, render } from '@testing-library/react';

import { AppButton, AppButtonVariants } from './AppButton';

describe('AppButton', () => {
  it('renders without crashing', () => {
    render(<AppButton variant={AppButtonVariants.Clear}>Test Button</AppButton>);
  });

  it('renders with the correct variant', () => {
    const { getByTestId } = render(<AppButton variant={AppButtonVariants.Clear}>Test Button</AppButton>);
    const button = getByTestId('button');

    expect(button).toHaveClass(AppButtonVariants.Clear);
  });

  it('renders additional className when provided', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = render(
      <AppButton variant={AppButtonVariants.Clear} className={mockClassName}>
        Test Button
      </AppButton>,
    );
    const button = getByTestId('button');

    expect(button).toHaveClass(mockClassName);
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <AppButton variant={AppButtonVariants.Clear} onClick={onClickMock}>
        Click Me
      </AppButton>,
    );
    const button = getByTestId('button');

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
