import React, { FC } from 'react';

import BackSvg from '../../../assets/icons/back.svg';
import { AppButton, AppButtonVariants } from '../../AppButton';

interface IBackButtonProps {
  className?: string;
}
export const BackButton: FC<IBackButtonProps> = ({ className }) => {
  const back = () => {
    window.history.back();
  };

  return (
    <AppButton data-testid="back-button" className={className} variant={AppButtonVariants.Clear} onClick={back}>
      <BackSvg />
    </AppButton>
  );
};
