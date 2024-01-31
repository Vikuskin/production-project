import React, { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text';

import * as styles from './Article.module.scss';

import { selectArticleError, selectArticleLoading } from '../../model/selectors/selectArticle';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleReducer } from '../../model/slices/articleSlice';

const articleReducers: ReducersList = {
  article: articleReducer,
};

interface IArticleProps {
  id: string;
  className?: string;
}

export const Article: FC<IArticleProps> = memo(({ className, id }: IArticleProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articleIsLoading = useAppSelector(selectArticleLoading);
  const articleError = useAppSelector(selectArticleError);
  let content;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (articleIsLoading) {
    content = (
      <div>
        <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width="100%" height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (articleError) {
    content = (
      <Text
        title={t(`${articleError.status}_error`)}
        text={t(articleError.message)}
        variant={TextVariant.Error}
        align={TextAlign.Center}
      />
    );
  } else {
    content = 'Article';
  }

  return (
    <DynamicReducerLoader reducers={articleReducers} removeAfterUnmount>
      <div className={getClassNames(styles.article, [className ?? ''])}>{content}</div>
    </DynamicReducerLoader>
  );
});
