import React, { FC, Suspense } from 'react';

import { Modal } from 'shared/ui/Modal';
import { Spinner } from 'shared/ui/Spinner';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal data-testid="modal" isOpen={isOpen} onClose={onClose} className={className} lazy>
      <Suspense fallback={<Spinner />}>
        <LoginFormAsync data-testid="login-form" onClose={onClose} />
      </Suspense>
    </Modal>
  );
};
