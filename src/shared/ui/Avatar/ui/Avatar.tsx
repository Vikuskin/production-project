import React, { CSSProperties, FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import DefaultAvatar from '@/shared/assets/images/default-avatar.png';

import * as styles from './Avatar.module.scss';

import { getClassNames } from '../../../lib/classNames/getClassNames';
import { AppLoadingImage } from '../../AppLoadingImage';

interface AvatarProps {
  src: string;
  className?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = memo(({ className, src, size }: AvatarProps) => {
  const { t } = useTranslation();
  const style = useMemo<CSSProperties>(() => {
    return {
      height: size || 50,
      width: size || 50,
    };
  }, [size]);

  return (
    <AppLoadingImage
      alt={t('Avatar')}
      style={style}
      className={getClassNames(styles.avatar, [className ?? ''])}
      src={src}
      errorFallback={DefaultAvatar}
    />
  );
});
