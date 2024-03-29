import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { AppButton } from './AppButton';

import { AppButtonSizes } from '../enums/appButtonSizes';
import { AppButtonVariants } from '../enums/appButtonVariants';

describe('AppButton', () => {
  it('renders without crashing', () => {
    render(<AppButton>Test Button</AppButton>);
  });

  it('renders with the correct variant', () => {
    const { getByTestId } = render(<AppButton variant={AppButtonVariants.Outline}>Test Button</AppButton>);
    const button = getByTestId('button');

    expect(button).toHaveClass(AppButtonVariants.Outline);
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

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <AppButton variant={AppButtonVariants.Clear} onClick={onClickMock}>
        Click Me
      </AppButton>,
    );
    const button = getByTestId('button');

    await user.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders disabled button', async () => {
    const { getByTestId } = render(
      <AppButton variant={AppButtonVariants.Clear} disabled>
        Click Me
      </AppButton>,
    );
    const button = getByTestId('button');

    expect(button).toHaveClass('disabled');
  });

  it('renders with size class when size is passed', () => {
    const { getByTestId } = render(<AppButton variant={AppButtonVariants.Clear} size={AppButtonSizes.SizeM} />);
    const button = getByTestId('button');

    expect(button).toHaveClass('sizeM');
  });
});
