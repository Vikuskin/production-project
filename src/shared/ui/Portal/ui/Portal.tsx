import React, { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  container?: HTMLElement;
}

export const Portal: FC<PropsWithChildren<IPortalProps>> = ({ children, container }) => {
  return createPortal(children, container ?? document.body);
};
