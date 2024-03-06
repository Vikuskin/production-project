import { ReducersMapObject } from '@reduxjs/toolkit';
import { RenderOptions, render } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Location, Router } from 'react-router-dom';

import i18n from '@/app/providers/i18n/i18nForTests';
import { IState, StoreProvider } from '@/app/providers/StoreProvider';

interface IRouterProps {
  location: Location;
  history: MemoryHistory;
}
interface IComponentRenderOptions extends Omit<RenderOptions, 'queries'> {
  routerProps?: IRouterProps;
  initialState?: DeepPartial<IState>;
  asyncReducers?: ReducersMapObject<IState>;
}
const getHistory = (routerProps: IRouterProps | null): IRouterProps => {
  if (!routerProps) {
    const history = createMemoryHistory();

    return { history, location: history.location };
  }

  return { history: routerProps.history, location: routerProps.location };
};

export const componentRender = (component: ReactNode, options: IComponentRenderOptions = {}) => {
  const { initialState, asyncReducers, routerProps, ...otherOptions } = options;
  const { location, history } = getHistory(routerProps || null);

  return render(
    <Router location={location} navigator={history}>
      <StoreProvider initialState={initialState as IState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </Router>,
    { ...otherOptions },
  );
};
