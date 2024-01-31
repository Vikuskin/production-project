import { render } from '@testing-library/react';
import React from 'react';

import { SelectCountry } from './SelectCountry';

import { Country } from '../model/types/country';

describe('SelectCountry', () => {
  const onChangeMock = jest.fn();
  const defaultProps = {
    onChange: onChangeMock,
    value: Country.USA,
    className: 'custom-class',
    readonly: false,
  };

  it('renders with the correct props', () => {
    const { getByText } = render(<SelectCountry {...defaultProps} />);
    const select = getByText('Country');
    const optionUS = getByText('United States');

    expect(select).toBeInTheDocument();
    expect(optionUS).toBeInTheDocument();
  });
});
