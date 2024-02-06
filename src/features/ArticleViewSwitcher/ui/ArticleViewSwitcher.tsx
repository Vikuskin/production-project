import React, { FC } from 'react';

import { ArticleListView } from 'entities/ArticleList';
import ListViewSvg from 'shared/assets/icons/list-view.svg';
import TileViewSvg from 'shared/assets/icons/tile-view.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';

import * as styles from './ArticleViewSwitcher.module.scss';

interface IArticleViewSwitcherProps {
  view: ArticleListView;
  onViewClick: (newView: ArticleListView) => void;
  className?: string;
}
const viewTypes = [
  {
    type: ArticleListView.List,
    Icon: ListViewSvg,
  },
  {
    type: ArticleListView.Tile,
    Icon: TileViewSvg,
  },
];

export const ArticleViewSwitcher: FC<IArticleViewSwitcherProps> = (props: IArticleViewSwitcherProps) => {
  const { onViewClick, view, className } = props;
  const onClickHandler = (newView: ArticleListView) => onViewClick(newView);

  return (
    <div className={getClassNames(styles.articleViewSwitcher, [className ?? ''])}>
      {viewTypes.map(({ type, Icon }) => (
        <AppButton
          className={getClassNames('', [], { [styles.active]: view === type })}
          key={type}
          variant={AppButtonVariant.Clear}
          onClick={() => onClickHandler(type)}
        >
          <Icon />
        </AppButton>
      ))}
    </div>
  );
};
