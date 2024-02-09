import React, { FC } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';

import * as styles from './ArticleDetails.module.scss';

import { articleDetailsReducer } from '../../model/slices';
import { ArticleComments } from '../ArticleComments/ArticleComments';
import { ArticleRecommends } from '../ArticleRecommends/ArticleRecommends';

interface ArticleDetailsProps {
  articleId: string;
  className?: string;
}

const articleDetailsReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className, articleId }) => {
  return (
    <div className={getClassNames('', [className ?? ''])}>
      <DynamicReducerLoader reducers={articleDetailsReducers} removeAfterUnmount>
        <hr className={styles.line} />
        <ArticleRecommends />
        <hr className={styles.line} />
        <ArticleComments id={articleId} />
      </DynamicReducerLoader>
    </div>
  );
};
