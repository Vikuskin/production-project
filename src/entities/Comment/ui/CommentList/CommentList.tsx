import React, { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Text, TextAlign } from 'shared/ui/Text';

import * as styles from './CommentList.module.scss';

import { IComment } from '../../model/types/comment';
import { Comment } from '../Comment/Comment';

interface ICommentListProps {
  comments: IComment[];
  isLoading: boolean;
  className?: string;
}

export const CommentList: FC<ICommentListProps> = memo(({ className, comments, isLoading }: ICommentListProps) => {
  const { t } = useTranslation('article');
  const commentList = useMemo(() => {
    return comments.map((comment: IComment) => (
      <Comment className={styles.comment} key={comment.id} comment={comment} isLoading={isLoading} />
    ));
  }, [comments, isLoading]);

  return (
    <div className={getClassNames(styles.commentList, [className ?? ''])}>
      {comments.length ? commentList : <Text align={TextAlign.Center} text={t('No comments')} />}
    </div>
  );
});
