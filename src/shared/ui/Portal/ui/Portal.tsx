import React, { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  container?: HTMLElement;
}

export const Portal: FC<PropsWithChildren<PortalProps>> = ({ children, container }) => {
  return createPortal(children, container ?? document.body);
};
