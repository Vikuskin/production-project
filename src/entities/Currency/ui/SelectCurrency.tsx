import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select';

import { Currency } from '../model/types/currency';

interface ISelectCurrencyProps {
  value: Currency;
  onChange: (value: Currency) => void;
  readonly?: boolean;
  className?: string;
}

export const SelectCurrency: FC<ISelectCurrencyProps> = memo((props: ISelectCurrencyProps) => {
  const { onChange, value, className, readonly } = props;
  const { t } = useTranslation();
  const onChangeHandler = useCallback((value: Currency) => onChange(value), [onChange]);

  return (
    <Select
      className={className}
      label={t('Currency')}
      enumOptions={Currency}
      value={value}
      readonly={readonly}
      onChange={onChangeHandler}
    />
  );
});
