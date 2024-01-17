import { fireEvent, render } from '@testing-library/react';

import { AppButton, ButtonVariants } from './AppButton';

describe('AppButton', () => {
  it('renders without crashing', () => {
    render(<AppButton variant={ButtonVariants.Clear}>Test Button</AppButton>);
  });

  it('renders with the correct variant', () => {
    const { getByTestId } = render(<AppButton variant={ButtonVariants.Clear}>Test Button</AppButton>);
    const button = getByTestId('button');

    expect(button).toHaveClass(ButtonVariants.Clear);
  });

  it('renders additional className when provided', () => {
    const mockClassName = 'custom-class';
    const { getByTestId } = render(
      <AppButton variant={ButtonVariants.Clear} className={mockClassName}>
        Test Button
      </AppButton>,
    );
    const button = getByTestId('button');

    expect(button).toHaveClass(mockClassName);
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <AppButton variant={ButtonVariants.Clear} onClick={onClickMock}>
        Click Me
      </AppButton>,
    );
    const button = getByTestId('button');

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
