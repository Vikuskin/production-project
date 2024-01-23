import React, { FC } from 'react';

import { Modal } from 'shared/ui/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal data-testid="modal" isOpen={isOpen} onClose={onClose} className={className} lazy>
      <LoginForm data-testid="login-form" />
    </Modal>
  );
};
