import { render } from '@testing-library/react';

import { Select } from './Select';

import { getSelectOptions } from '../lib/getSelectOptions';

enum TestEnum {
  option1 = 'Option 1',
  option2 = 'Option 2',
  option3 = 'Option 3',
}

describe('Select component', () => {
  const options = getSelectOptions(TestEnum);
  const onChangeMock = jest.fn();
  const defaultProps = {
    label: 'Select an option',
    options: options,
    className: 'custom-class',
    onChange: onChangeMock,
    value: 'option1',
    readonly: false,
    enumOptions: TestEnum,
  };

  it('renders with the correct props', () => {
    const { getByText } = render(<Select {...defaultProps} />);
    const select = getByText('Select an option');
    const option1 = getByText('Option 1');
    const option2 = getByText('Option 2');
    const option3 = getByText('Option 3');

    expect(select).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });
});
