import React, { FC, memo } from 'react';

import BackSvg from 'shared/assets/icons/back.svg';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';

interface IBackButtonProps {
  className?: string;
}
export const BackButton: FC<IBackButtonProps> = memo(({ className }: IBackButtonProps) => {
  const back = () => {
    window.history.back();
  };

  return (
    <AppButton data-testid="back-button" className={className} variant={AppButtonVariant.Clear} onClick={back}>
      <BackSvg />
    </AppButton>
  );
});
