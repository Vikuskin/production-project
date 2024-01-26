import React, { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface IAppInputProps extends HTMLInputProps {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  type?: string;
}

export const AppInput: FC<IAppInputProps> = memo((props: IAppInputProps) => {
  const { onChange, value, className, type = 'text', placeholder, ...otherProps } = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

  return (
    <div className={getClassNames(styles.inputWrapper, [className ?? ''])}>
      <input data-testid="input" type={type} value={value} onChange={onChangeHandler} {...otherProps} />
      <span className={styles.label}>{placeholder}</span>
      <span className={styles.focusBg}></span>
    </div>
  );
});
