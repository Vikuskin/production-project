import React, { FC, PropsWithChildren } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<PropsWithChildren<VStackProps>> = (props: PropsWithChildren<VStackProps>) => {
  const { align = 'start' } = props;

  return <Flex direction="column" align={align} {...props} />;
};
