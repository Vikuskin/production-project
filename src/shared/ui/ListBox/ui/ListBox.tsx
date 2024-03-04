import { Listbox as HListbox } from '@headlessui/react';
import React, { Fragment, ReactElement, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { getEnumOptions } from 'shared/lib/helpers/getEnumOptions';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';

import * as styles from './ListBox.module.scss';

interface IListBoxProps<T extends string> {
  label: string;
  enumOptions: { [key: string]: string };
  value: T;
  onChange: (value: T) => void;
  className?: string;
  readonly?: boolean;
}
const typedMemo: <T>(c: T) => T = memo;

export const ListBox = typedMemo(<T extends string>(props: IListBoxProps<T>) => {
  const { t } = useTranslation();
  const { enumOptions, onChange, value, className, readonly, label } = props;
  const optionsList = useMemo<ReactElement[]>(() => {
    const options = getEnumOptions(enumOptions);

    return options.map((option) => (
      <HListbox.Option key={option.value} value={option.content} as={Fragment} disabled={readonly}>
        {({ active }) => (
          <li className={getClassNames(styles.option, [], { [styles.active]: active })}>{t(option.content)}</li>
        )}
      </HListbox.Option>
    ));
  }, [enumOptions, t, readonly]);

  return (
    <HListbox
      as="div"
      className={getClassNames(styles.listBox, [className ?? ''], { [styles.readonly]: !!readonly })}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
      <HListbox.Button as="div">
        <span className={styles.label}>{label}</span>
        <AppButton variant={AppButtonVariants.Clear} className={styles.triggerBtn}>
          {value}
        </AppButton>
      </HListbox.Button>
      <HListbox.Options className={styles.options}>{optionsList}</HListbox.Options>
    </HListbox>
  );
});
