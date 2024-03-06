import React, { FC, Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentList } from '@/entities/Comment';
import { AddNewComment } from '@/features/AddNewComment';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Text, TextSizes } from '@/shared/ui/Text';
import { PageLoader } from '@/widgets/PageLoader';

import * as styles from './ArticleComments.module.scss';

import { selectArticleCommentsLoading } from '../model/selectors/selectArticleComments';
import { addArticleComment } from '../model/services/addArticleComment';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { articleCommentsReducer, selectArticleComments } from '../model/slices/articleCommentsSlice';

interface IArticleCommentsProps {
  articleId: string | null;
}

const articleCommentsReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

export const ArticleComments: FC<IArticleCommentsProps> = memo(({ articleId }: IArticleCommentsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectArticleComments.selectAll);
  const commentsIsLoading = useAppSelector(selectArticleCommentsLoading);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(articleId)));

  const onCommentSend = useCallback((text: string) => dispatch(addArticleComment(text)), [dispatch]);

  return (
    <DynamicReducerLoader reducers={articleCommentsReducers} removeAfterUnmount>
      <Suspense fallback={<PageLoader />}>
        <Text className={styles.title} title={t('Comments')} size={TextSizes.SizeL} />
        <AddNewComment onCommentSend={onCommentSend} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Suspense>
    </DynamicReducerLoader>
  );
});
