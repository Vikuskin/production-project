import { render } from '@testing-library/react';

import { Select } from './Select';

describe('Select component', () => {
  const options = [
    { value: 'option1', content: 'Option 1' },
    { value: 'option2', content: 'Option 2' },
    { value: 'option3', content: 'Option 3' },
  ];
  const onChangeMock = jest.fn();
  const defaultProps = {
    label: 'Select an option',
    options: options,
    className: 'custom-class',
    onChange: onChangeMock,
    value: 'option1',
    readonly: false,
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
