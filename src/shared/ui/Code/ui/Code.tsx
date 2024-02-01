import React, { FC, PropsWithChildren, useCallback } from 'react';

import CopySvg from 'shared/assets/icons/copy.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';

import * as styles from './Code.module.scss';

interface CodeProps {
  text: string;
  className?: string;
}

export const Code: FC<PropsWithChildren<CodeProps>> = ({ className, text }) => {
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={getClassNames(styles.code, [className ?? ''])}>
      <AppButton className={styles.copyBtn} variant={AppButtonVariant.Clear} onClick={copy}>
        <CopySvg className={styles.icon} />
      </AppButton>
      <code>{text}</code>
    </pre>
  );
};
