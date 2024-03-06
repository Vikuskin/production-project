import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';

import * as styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = 0 | 10 | 15 | 20;

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};
const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};
const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
  0: styles.gap0,
  10: styles.gap10,
  15: styles.gap15,
  20: styles.gap20,
};

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  component?: keyof HTMLElementTagNameMap;
  onClick?: () => void;
  'data-testid'?: string;
}

export const Flex: FC<PropsWithChildren<FlexProps>> = (props: PropsWithChildren<FlexProps>) => {
  const {
    align = 'center',
    children,
    className,
    direction = 'row',
    justify = 'between',
    gap = 10,
    component = 'div',
    onClick,
    'data-testid': dataTestid,
  } = props;
  const classes = [
    className ?? '',
    alignClasses[align],
    justifyClasses[justify],
    directionClasses[direction],
    gapClasses[gap],
  ];
  const ComponentWrapper = component;

  return (
    <ComponentWrapper
      data-testid={dataTestid || 'Flex.wrapper'}
      className={getClassNames(styles.flex, classes)}
      onClick={onClick}
    >
      {children}
    </ComponentWrapper>
  );
};
