import { combineReducers } from '@reduxjs/toolkit';

import { articleCommentsReducer } from './articleCommentsSlice';
import { articleRecommendsReducer } from './articleRecommendsSlice';

export const articleDetailsReducer = combineReducers({
  articleComments: articleCommentsReducer,
  articleRecommends: articleRecommendsReducer,
});
