import { ReactNode } from 'react';

export interface IDropdownItem {
  content: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}
