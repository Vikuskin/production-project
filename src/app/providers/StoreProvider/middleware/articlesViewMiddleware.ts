import { Middleware, UnknownAction } from '@reduxjs/toolkit';

import { articleListActions } from '@/pages/ArticleListPage';
import { LOCAL_STORAGE_KEYS } from '@/shared/constants/localStorageKeys';

export const articlesViewMiddleware: Middleware<(action: UnknownAction) => void> = () => (next) => (action) => {
  if (articleListActions.setView.match(action)) {
    const view = action.payload;

    view && localStorage.setItem(LOCAL_STORAGE_KEYS.ArticleView, view);
  }

  next(action);
};
