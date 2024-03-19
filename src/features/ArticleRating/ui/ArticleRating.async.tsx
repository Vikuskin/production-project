import React, { FC, Suspense, lazy } from 'react';

import { Spinner } from '@/shared/ui/Spinner';

import { IArticleRatingProps } from '../models/interfaces/articleRatingProps';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync: FC<IArticleRatingProps> = (props: IArticleRatingProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
