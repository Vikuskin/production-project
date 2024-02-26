import React, { ChangeEvent, ReactElement, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Select.module.scss';

import { getSelectOptions } from '../lib/getSelectOptions';

interface ISelectProps<T extends string> {
  label: string;
  enumOptions: { [key: string]: string };
  value: T;
  onChange: (value: T) => void;
  className?: string;
  readonly?: boolean;
}

const typedMemo: <T>(c: T) => T = memo;

export const Select = typedMemo(<T extends string>(props: ISelectProps<T>) => {
  const { t } = useTranslation();
  const { label, enumOptions, className, onChange, value, readonly } = props;
  const optionsList = useMemo<ReactElement[]>(() => {
    const options = getSelectOptions(enumOptions);

    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {t(option.content)}
      </option>
    ));
  }, [enumOptions, t]);
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value as T);

  return (
    <div className={getClassNames(styles.selectWrapper, [className ?? ''], { [styles.readonly]: !!readonly })}>
      <select disabled={readonly} onChange={onChangeSelect} className={styles.select} value={value}>
        {optionsList}
      </select>
      <span className={styles.label}>{label}</span>
      <span className={styles.focusBg}></span>
    </div>
  );
});
