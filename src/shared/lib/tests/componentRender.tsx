import { ReducersMapObject } from '@reduxjs/toolkit';
import { RenderOptions, render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from 'app/providers/i18n/i18nForTests';
import { IState, StoreProvider } from 'app/providers/StoreProvider';

interface IComponentRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: Partial<IState>;
  asyncReducers?: ReducersMapObject<IState>;
}

export const componentRender = (component: ReactNode, options: IComponentRenderOptions = {}) => {
  const { initialState, asyncReducers, ...otherOptions } = options;

  return render(
    <StoreProvider initialState={initialState as IState} asyncReducers={asyncReducers}>
      <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
    </StoreProvider>,
    { ...otherOptions },
  );
};
