import React, { FC, PropsWithChildren } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack: FC<PropsWithChildren<HStackProps>> = (props: PropsWithChildren<HStackProps>) => {
  return <Flex direction="row" {...props} />;
};
