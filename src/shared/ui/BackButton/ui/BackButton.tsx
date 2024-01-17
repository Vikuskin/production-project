import React, { FC } from 'react';

import BackSvg from '../../../assets/icons/back.svg';
import { AppButton, ButtonVariants } from '../../AppButton';

interface BackButtonProps {
  className?: string;
}
export const BackButton: FC<BackButtonProps> = ({ className }) => {
  const back = () => {
    window.history.back();
  };

  return (
    <AppButton data-testid="back-button" className={className} variant={ButtonVariants.Clear} onClick={back}>
      <BackSvg />
    </AppButton>
  );
};
