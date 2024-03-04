import React, { FC, memo } from 'react';

import { routePaths } from 'shared/constants/routePaths';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

import * as styles from './Comment.module.scss';

import { IComment } from '../../model/interfaces/comment';

interface ICommentProps {
  comment: IComment;
  isLoading: boolean;
  className?: string;
}

export const Comment: FC<ICommentProps> = memo((props: ICommentProps) => {
  const { comment, className, isLoading } = props;
  const { username, avatar, id } = comment.user;

  if (isLoading) {
    return (
      <HStack className={getClassNames(styles.comment, [className ?? ''])}>
        <div className={styles.avatarWrapper}>
          <Skeleton className={styles.avatar} width={40} height={40} border="50%" />
        </div>

        <div className={styles.content}>
          <Skeleton width={100} height={15} />
          <Skeleton width="100%" height={50} />
        </div>
      </HStack>
    );
  }

  return (
    <HStack className={getClassNames(styles.comment, [className ?? ''])}>
      {avatar && (
        <AppLink to={`${routePaths.profile}${id}`}>
          <div className={styles.avatarWrapper}>
            <Avatar className={styles.avatar} size={40} src={avatar} />
          </div>
        </AppLink>
      )}

      <div className={styles.content}>
        <Text title={username} />
        <Text text={comment.text} />
      </div>
    </HStack>
  );
});
