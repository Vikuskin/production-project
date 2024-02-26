import React, { FC, memo } from 'react';

import BackSvg from 'shared/assets/icons/back.svg';
import { AppButton } from 'shared/ui/AppButton';

interface IBackButtonProps {
  className?: string;
}
export const BackButton: FC<IBackButtonProps> = memo(({ className }: IBackButtonProps) => {
  const back = () => {
    window.history.back();
    window.location.reload();
  };

  return (
    <AppButton data-testid="back-button" className={className} onClick={back}>
      <BackSvg />
    </AppButton>
  );
});
