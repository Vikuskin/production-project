import React, { FC, memo } from 'react';

import { CommentList } from 'entities/Comment';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

import { selectArticleCommentsLoading } from '../model/selectors/articleComments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { articleCommentsReducer, selectArticleComments } from '../model/slices/articleCommentsSlice';

interface IArticleCommentsProps {
  id: string;
}

const articleCommentsReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

export const ArticleComments: FC<IArticleCommentsProps> = memo(({ id }: IArticleCommentsProps) => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectArticleComments.selectAll);
  const commentsIsLoading = useAppSelector(selectArticleCommentsLoading);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  return (
    <DynamicReducerLoader reducers={articleCommentsReducers} removeAfterUnmount>
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </DynamicReducerLoader>
  );
});
