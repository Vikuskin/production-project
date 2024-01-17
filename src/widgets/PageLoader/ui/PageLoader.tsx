import React, { FC } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Spinner } from 'shared/ui/Spinner';

import * as styles from './PageLoader.module.scss';

export const PageLoader: FC = () => {
  return (
    <div className={getClassNames(styles.pageLoader)}>
      <Spinner />
    </div>
  );
};
