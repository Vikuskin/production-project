import React, { FC } from 'react';

import ReloadSvg from 'shared/assets/icons/reload.svg';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';

interface IReloadButtonProps {
  className?: string;
}
export const ReloadButton: FC<IReloadButtonProps> = ({ className }) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <AppButton data-testid="reload-button" className={className} variant={AppButtonVariants.Clear} onClick={reloadPage}>
      <ReloadSvg />
    </AppButton>
  );
};
