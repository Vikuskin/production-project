import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { routePaths } from 'app/providers/router';
import { ArticleBlocks, ArticleTextBlock, IArticleData, IArticleTextBlock } from 'entities/Article';
import EyeSvg from 'shared/assets/icons/eye-out.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Card } from 'shared/ui/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

import * as styles from './ArticleListItem.module.scss';

import { ArticleListView } from '../../model/enums/articleListView';

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
    <HStack gap={0}>
      <Text className={styles.view} text={article.views} />
      <EyeSvg className={styles.viewIcon} />
    </HStack>
  );
  const image = <img src={article.img} className={styles.img} alt={article.title} />;

  if (view === ArticleListView.List) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlocks.Text && block.paragraphs && block.title,
    ) as IArticleTextBlock;

    return (
      <div className={getClassNames(styles.articleListItem, [className ?? '', styles[view]])}>
        <Card>
          <HStack>
            <Avatar size={30} src={article.user.avatar || ''} />
            <Text text={article.user.username} />
            <Text text={article.createdAt} className={styles.date} />
          </HStack>
          <Text className={styles.title} title={article.title} />
          {types}
          {image}
          {textBlock && <ArticleTextBlock className={styles.textBlock} block={textBlock} />}
          <HStack className={styles.footer}>
            <AppLink target={target} to={`${routePaths.article}${article.id}`}>
              <AppButton variant={AppButtonVariants.Outline}>{t('Read more...')}</AppButton>
            </AppLink>
            {views}
          </HStack>
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
      <VStack>
        <Card>
          <div className={styles.imgWrapper}>
            {image}
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <HStack className={styles.info}>
            {types}
            {views}
          </HStack>
          <Text className={styles.title} title={article.title} />
        </Card>
      </VStack>
    </AppLink>
  );
};
