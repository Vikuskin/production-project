import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { routePaths } from 'app/providers/router';
import { ArticleBlockType, ArticleTextBlock, IArticleData, IArticleTextBlock } from 'entities/Article';
import EyeSvg from 'shared/assets/icons/eye-out.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Card } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';

import * as styles from './ArticleListItem.module.scss';

import { ArticleListView } from '../../model/types/articleListView';

interface IArticleListItemProps {
  article: IArticleData;
  view: ArticleListView;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}

export const ArticleListItem: FC<IArticleListItemProps> = (props: IArticleListItemProps) => {
  const { t } = useTranslation('article');
  const { article, view, className, target } = props;
  const types = <Text className={styles.types} text={article.type.join(', ')} />;
  const views = (
    <>
      <Text className={styles.view} text={article.views} />
      <EyeSvg className={styles.viewIcon} />
    </>
  );
  const image = <img src={article.img} className={styles.img} alt={article.title} />;

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
            <AppLink target={target} to={`${routePaths.article}${article.id}`}>
              <AppButton variant={AppButtonVariant.Outline}>{t('Read more...')}</AppButton>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={`${routePaths.article}${article.id}`}
      className={getClassNames(styles.articleListItem, [className ?? '', styles[view]])}
    >
      <Card className={styles.card}>
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
    </AppLink>
  );
};
