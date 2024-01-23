/* eslint-disable indent */
import createAsyncCallback from '@loki/create-async-callback';
import isLokiRunning from '@loki/is-loki-running';
import { StoryFn } from '@storybook/react';
import React, { useEffect } from 'react';

const useDelayCapture = (delayInMs: number) => {
  useEffect(() => {
    if (isLokiRunning()) {
      const onDone = createAsyncCallback();
      const timer = setTimeout(() => onDone(), delayInMs);

      return () => clearTimeout(timer);
    }
  }, [delayInMs]);
};

export const delayCaptureDecorator =
  (delay: number = 1000) =>
  (Story: StoryFn) => {
    useDelayCapture(delay);

    return <Story />;
  };
