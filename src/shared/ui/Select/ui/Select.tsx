import React, { ChangeEvent, FC, ReactElement, memo, useMemo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Select.module.scss';

interface ISelectOption {
  value: string;
  content: string;
}
interface ISelectProps {
  label: string;
  options: ISelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  readonly?: boolean;
}

export const Select: FC<ISelectProps> = memo((props: ISelectProps) => {
  const { label, options, className, onChange, value, readonly } = props;
  const optionsList = useMemo<ReactElement[]>(
    () =>
      options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.content}
        </option>
      )),
    [options],
  );
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

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
