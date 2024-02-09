import React, { FC, Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentList } from 'entities/Comment';
import { AddNewComment } from 'features/AddNewComment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text';
import { PageLoader } from 'widgets/PageLoader';

import * as styles from './ArticleComments.module.scss';

import { selectArticleCommentsLoading } from '../../model/selectors/selectArticleComments';
import { addArticleComment } from '../../model/services/addArticleComment';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { selectArticleComments } from '../../model/slices/articleCommentsSlice';

interface IArticleCommentsProps {
  id: string;
}

export const ArticleComments: FC<IArticleCommentsProps> = memo(({ id }: IArticleCommentsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectArticleComments.selectAll);
  const commentsIsLoading = useAppSelector(selectArticleCommentsLoading);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

  const onCommentSend = useCallback((text: string) => dispatch(addArticleComment(text)), [dispatch]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Text className={styles.title} title={t('Comments')} size={TextSize.SizeL} />
      <AddNewComment onCommentSend={onCommentSend} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </Suspense>
  );
});
