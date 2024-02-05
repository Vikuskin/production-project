import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { routePaths } from 'app/providers/router';
import { ArticleBlockType, ArticleTextBlock, IArticleData, IArticleTextBlock } from 'entities/Article';
import EyeSvg from 'shared/assets/icons/eye-out.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';
import { Avatar } from 'shared/ui/Avatar';
import { Card } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';

import * as styles from './ArticleListItem.module.scss';

import { ArticleListView } from '../../model/types/articleListView';

interface IArticleListItemProps {
  article: IArticleData;
  view: ArticleListView;
  className?: string;
}

export const ArticleListItem: FC<IArticleListItemProps> = memo((props: IArticleListItemProps) => {
  const { t } = useTranslation('article');
  const { article, view, className } = props;
  const types = <Text className={styles.types} text={article.type.join(', ')} />;
  const views = (
    <>
      <Text className={styles.view} text={article.views} />
      <EyeSvg className={styles.viewIcon} />
    </>
  );
  const image = <img src={article.img} className={styles.img} alt={article.title} />;
  const navigate = useNavigate();
  const onOpenArticle = useCallback(() => navigate(`${routePaths.article}${article.id}`), [article.id, navigate]);

  if (view === ArticleListView.List) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.Text && block.paragraphs && block.title,
    ) as IArticleTextBlock;

    return (
      <div className={getClassNames(styles.articleListItem, [className ?? '', styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar || ''} />
            <Text className={styles.username} text={article.user.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text className={styles.title} title={article.title} />
          {types}
          {image}
          {textBlock && <ArticleTextBlock className={styles.textBlock} block={textBlock} />}
          <div className={styles.footer}>
            <AppButton variant={AppButtonVariant.Outline} onClick={onOpenArticle}>
              {t('Read more...')}
            </AppButton>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={getClassNames(styles.articleListItem, [className ?? '', styles[view]])}>
      <Card className={styles.card} onClick={onOpenArticle}>
        <div className={styles.imgWrapper}>
          {image}
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.info}>
          {types}
          {views}
        </div>
        <Text className={styles.title} title={article.title} />
      </Card>
    </div>
  );
});
