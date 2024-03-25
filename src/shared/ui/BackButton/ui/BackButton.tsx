import React, { FC, memo } from 'react';

import BackSvg from '@/shared/assets/icons/back.svg';
import { getRouteMain } from '@/shared/constants/routePaths';

import { AppLink } from '../../AppLink';

interface IBackButtonProps {
  className?: string;
}
export const BackButton: FC<IBackButtonProps> = memo(({ className }: IBackButtonProps) => {
  return (
    <AppLink data-testid="back-button" to={getRouteMain()} className={className}>
      <BackSvg />
    </AppLink>
  );
});
