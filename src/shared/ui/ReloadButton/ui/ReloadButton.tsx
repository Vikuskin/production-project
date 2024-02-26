import React, { FC, memo } from 'react';

import ReloadSvg from 'shared/assets/icons/reload.svg';
import { AppButton } from 'shared/ui/AppButton';

interface IReloadButtonProps {
  className?: string;
}
export const ReloadButton: FC<IReloadButtonProps> = memo(({ className }: IReloadButtonProps) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <AppButton data-testid="reload-button" className={className} onClick={reloadPage}>
      <ReloadSvg />
    </AppButton>
  );
});
