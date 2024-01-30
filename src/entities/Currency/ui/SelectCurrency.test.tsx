import { render } from '@testing-library/react';

import { SelectCurrency } from './SelectCurrency';

import { Currency } from '../model/types/currency';

describe('SelectCurrency', () => {
  const onChangeMock = jest.fn();
  const defaultProps = {
    onChange: onChangeMock,
    value: Currency.USD,
    className: 'custom-class',
    readonly: false,
  };

  it('renders with the correct props', () => {
    const { getByText } = render(<SelectCurrency {...defaultProps} />);
    const select = getByText('Currency');
    const optionUS = getByText('USD');

    expect(select).toBeInTheDocument();
    expect(optionUS).toBeInTheDocument();
  });
});
