import { FC } from 'react';
import { AppButton, ButtonVariants } from '../../AppButton';
import BackSvg from '../../../assets/icons/back.svg';

interface BackButtonProps {
  className?: string;
}
export const BackButton: FC<BackButtonProps> = ({ className }) => {
  const back = () => {
    window.history.back();
  };

  return (
    <AppButton className={className} variant={ButtonVariants.Clear} onClick={back}>
      <BackSvg />
    </AppButton>
  );
};
