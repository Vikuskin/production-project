import { FC } from 'react';
import { AppButton, ButtonVariants } from '../../AppButton';
import ReloadSvg from '../../../assets/icons/reload.svg';

interface ReloadButtonProps {
  className?: string;
}
export const ReloadButton: FC<ReloadButtonProps> = ({ className }) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <AppButton className={className} variant={ButtonVariants.Clear} onClick={reloadPage}>
      <ReloadSvg />
    </AppButton>
  );
};
