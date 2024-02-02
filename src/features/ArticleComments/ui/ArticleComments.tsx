import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentList } from 'entities/Comment';
import { AddNewComment } from 'features/AddNewComment';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text';

import * as styles from './ArticleComments.module.scss';

import { selectArticleCommentsLoading } from '../model/selectors/articleComments';
import { addArticleComment } from '../model/services/addArticleComment';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { articleCommentsReducer, selectArticleComments } from '../model/slices/articleCommentsSlice';

interface IArticleCommentsProps {
  id: string;
}

const articleCommentsReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

export const ArticleComments: FC<IArticleCommentsProps> = memo(({ id }: IArticleCommentsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectArticleComments.selectAll);
  const commentsIsLoading = useAppSelector(selectArticleCommentsLoading);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  const onCommentSend = useCallback((text: string) => dispatch(addArticleComment(text)), [dispatch]);

  return (
    <DynamicReducerLoader reducers={articleCommentsReducers} removeAfterUnmount>
      <Text className={styles.title} title={t('Comments')} size={TextSize.SizeL} />
      <AddNewComment onCommentSend={onCommentSend} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </DynamicReducerLoader>
  );
});