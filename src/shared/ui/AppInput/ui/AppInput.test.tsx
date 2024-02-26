import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

import { AppInput } from './AppInput';

describe('AppInput', () => {
  const mockProps = {
    onChange: jest.fn(),
    value: 'testValue',
    type: 'text',
    placeholder: 'Enter text',
  };

  it('renders without crashing', () => {
    render(<AppInput {...mockProps} />);
  });

  it('renders input with correct props', () => {
    const { getByTestId } = render(<AppInput {...mockProps} />);
    const inputElement = getByTestId('input');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('value', 'testValue');
  });

  it('calls onChange when input value changes', async () => {
    const { getByTestId } = render(<AppInput {...mockProps} value={''} />);
    const inputElement = getByTestId('input');
    const user = userEvent.setup();
    const newInputText = 'text';

    await user.type(inputElement, newInputText);

    expect(mockProps.onChange).toHaveBeenCalledTimes(newInputText.length);
    expect(mockProps.onChange).toHaveBeenLastCalledWith(newInputText.slice(-1));
  });

  it('renders label with correct text', () => {
    const { getByText } = render(<AppInput {...mockProps} />);
    const labelElement = getByText('Enter text');

    expect(labelElement).toBeInTheDocument();
  });
});
