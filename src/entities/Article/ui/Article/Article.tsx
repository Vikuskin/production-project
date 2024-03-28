import React, { FC, ReactElement, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorPage } from '@/pages/ErrorPage';
import CalendarSvg from '@/shared/assets/icons/calendar.svg';
import EyeIconSvg from '@/shared/assets/icons/eye-out.svg';
import { ErrorStatusCode } from '@/shared/enums/errorStatusCode';
import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextAligns, TextSizes } from '@/shared/ui/Text';

import * as styles from './Article.module.scss';

import { ArticleBlocks } from '../../model/enums/articleBlocks';
import { selectArticleData, selectArticleError, selectArticleLoading } from '../../model/selectors/selectArticle';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleReducer } from '../../model/slices/articleSlice';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

const articleReducers: ReducersList = {
  article: articleReducer,
};

interface IArticleProps {
  id: string | null;
  className?: string;
}

export const Article: FC<IArticleProps> = memo(({ className, id }: IArticleProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articleIsLoading = useAppSelector(selectArticleLoading);
  const articleError = useAppSelector(selectArticleError);
  const articleData = useAppSelector(selectArticleData);
  let content: ReactElement | null = null;
  const renderBlock = useMemo(() => {
    return articleData?.blocks.map((block) => {
      switch (block.type) {
        case ArticleBlocks.Code:
          return <ArticleCodeBlock key={block.id} className={styles.block} block={block} />;
        case ArticleBlocks.Img:
          return <ArticleImageBlock key={block.id} className={styles.block} block={block} />;
        case ArticleBlocks.Text:
          return <ArticleTextBlock key={block.id} className={styles.block} block={block} />;
        default:
          return null;
      }
    });
  }, [articleData?.blocks]);

  useInitialEffect(() => dispatch(fetchArticleById(id)));

  if (articleIsLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width="100%" height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (articleError) {
    content = <ErrorPage errorCode={ErrorStatusCode.BadRequest} text={t('Article was not found', { ns: 'article' })} />;
  } else if (articleData) {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar className={styles.avatar} src={articleData.img} size={200} />
        </div>
        <Text
          className={styles.title}
          title={articleData.title}
          text={articleData.subtitle}
          size={TextSizes.SizeL}
          align={TextAligns.Center}
        />
        <HStack justify="start" gap={0}>
          <EyeIconSvg className={styles.icon} />
          <Text text={articleData.views} size={TextSizes.SizeS} />
        </HStack>
        <HStack justify="start" gap={0}>
          <CalendarSvg className={styles.icon} />
          <Text text={articleData.createdAt} size={TextSizes.SizeS} />
        </HStack>
        <span>
          <Text size={TextSizes.SizeS} text={articleData.type.join(', ')} />
        </span>
        {renderBlock}
      </>
    );
  }

  return (
    <DynamicReducerLoader reducers={articleReducers} removeAfterUnmount>
      <div className={getClassNames(styles.article, [className ?? ''])}>{content}</div>
    </DynamicReducerLoader>
  );
});
