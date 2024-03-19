import React, { FC, useState } from 'react';

import StarSvg from '@/shared/assets/icons/star.svg';
import { getClassNames } from '@/shared/lib/classNames/getClassNames';

import * as styles from './StarRating.module.scss';

interface IStarRatingProps {
  onSelect: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
  className?: string;
}

const stars = ['1', '2', '3', '4', '5'];

export const StarRating: FC<IStarRatingProps> = (props: IStarRatingProps) => {
  const { onSelect, className, selectedStars = 0, size = 30 } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(!!selectedStars);
  const onHover = (starsCount: number) => !isSelected && setCurrentStarsCount(starsCount);
  const onLeave = () => !isSelected && setCurrentStarsCount(0);
  const onClick = (starsCount: number) => {
    if (!isSelected) {
      onSelect(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={getClassNames(styles.starRating, [className ?? ''])}>
      {stars.map((starNumber) => (
        <StarSvg
          width={size}
          height={size}
          key={starNumber}
          className={getClassNames(styles.icon, [], {
            [styles.hovered]: currentStarsCount >= +starNumber,
            [styles.selected]: isSelected,
          })}
          onMouseEnter={() => onHover(+starNumber)}
          onMouseLeave={() => onLeave()}
          onTouchStart={() => onHover(+starNumber)}
          onClick={() => onClick(+starNumber)}
        />
      ))}
    </div>
  );
};
