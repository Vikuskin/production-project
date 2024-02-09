import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select';

import { Country } from '../model/types/country';

interface ISelectCountryProps {
  value: Country;
  onChange: (value: Country) => void;
  readonly?: boolean;
  className?: string;
}

export const SelectCountry: FC<ISelectCountryProps> = memo((props: ISelectCountryProps) => {
  const { onChange, value, className, readonly } = props;
  const { t } = useTranslation();
  const onChangeHandler = useCallback((value: Country) => onChange(value), [onChange]);

  return (
    <Select
      className={className}
      label={t('Country')}
      enumOptions={Country}
      value={value}
      readonly={readonly}
      onChange={onChangeHandler}
    />
  );
});
