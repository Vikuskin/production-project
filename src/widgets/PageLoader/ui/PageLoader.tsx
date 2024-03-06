import React, { FC } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { Spinner } from '@/shared/ui/Spinner';
import { HStack } from '@/shared/ui/Stack';

import * as styles from './PageLoader.module.scss';

export const PageLoader: FC = () => {
  return (
    <HStack align="center" justify="center" className={getClassNames(styles.pageLoader)}>
      <Spinner />
    </HStack>
  );
};
