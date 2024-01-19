import React, { FC } from 'react';

import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';

import ReloadSvg from '../../../assets/icons/reload.svg';

interface ReloadButtonProps {
  className?: string;
}
export const ReloadButton: FC<ReloadButtonProps> = ({ className }) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <AppButton data-testid="reload-button" className={className} variant={AppButtonVariants.Clear} onClick={reloadPage}>
      <ReloadSvg />
    </AppButton>
  );
};
