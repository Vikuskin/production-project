import { Menu } from '@headlessui/react';
import React, { FC, ReactNode } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppLink } from 'shared/ui/AppLink';

import * as styles from './Dropdown.module.scss';

import { IDropdownItem } from '../interfaces/dropdownItem';

type DropdownDirection = 'topRight' | 'topLeft';
interface IDropdownProps {
  items: IDropdownItem[];
  trigger: ReactNode;
  direction: DropdownDirection;
  className?: string;
}

export const Dropdown: FC<IDropdownProps> = (props: IDropdownProps) => {
  const { className, items, trigger, direction } = props;

  return (
    <Menu className={getClassNames(styles.dropdown, [className ?? ''])} as="div">
      <Menu.Button className={styles.btn}>{trigger}</Menu.Button>
      <Menu.Items className={getClassNames(styles.menu, [styles[direction]])}>
        {items.map((item, i) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              className={getClassNames(styles.item, [], { [styles.active]: active })}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} key={i} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as="div" key={i} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
