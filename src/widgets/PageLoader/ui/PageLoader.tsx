import { FC } from 'react';
import * as styles from './PageLoader.module.scss';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Spinner } from 'shared/ui/Spinner';

export const PageLoader: FC = () => {
  return (
    <div className={getClassNames(styles.pageLoader)}>
      <Spinner />
    </div>
  );
};
