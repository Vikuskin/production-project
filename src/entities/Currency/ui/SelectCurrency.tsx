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

const currencyOptions = (Object.keys(Currency) as Array<keyof typeof Currency>).map((key) => ({
  value: Currency[key],
  content: Currency[key],
}));

export const SelectCurrency: FC<ISelectCurrencyProps> = memo((props: ISelectCurrencyProps) => {
  const { onChange, value, className, readonly } = props;
  const { t } = useTranslation();
  const onChangeHandler = useCallback((value: string) => onChange(value as Currency), [onChange]);

  return (
    <Select
      className={className}
      label={t('Currency')}
      options={currencyOptions}
      value={value}
      readonly={readonly}
      onChange={onChangeHandler}
    />
  );
});
