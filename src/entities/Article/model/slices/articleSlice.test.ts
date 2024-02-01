import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { articleDataMock } from 'shared/mocks/articleData';

import { articleInitialState, articleReducer } from './articleSlice';

import { fetchArticleById } from '../services/fetchArticleById';

describe('articleSlice', () => {
  describe('extraReducers', () => {
    it('should set loading true and error null when fetchArticleById is pending', () => {
      expect(
        articleReducer(
          { ...articleInitialState, isLoading: false, error: INTERNAL_SERVER_ERROR },
          fetchArticleById.pending('', ''),
        ),
      ).toMatchObject({
        isLoading: true,
        error: null,
      });
    });

    it('should set loading false when fetchArticleById is fulfilled', () => {
      expect(
        articleReducer(
          { ...articleInitialState, isLoading: true },
          fetchArticleById.fulfilled(articleDataMock, '', ''),
        ),
      ).toMatchObject({
        isLoading: false,
        articleData: articleDataMock,
      });
    });

    it('should set loading false and add payload error in state when fetchArticleById is rejected with error', () => {
      const error = { message: 'error', status: ErrorStatusCode.BadRequest };

      expect(
        articleReducer(
          { ...articleInitialState, isLoading: true, error: null },
          fetchArticleById.rejected(null, '', '', error),
        ),
      ).toMatchObject({
        isLoading: false,
        error: error,
      });
    });

    it('should set loading false and add default error in state when fetchArticleById is rejected without payload', () => {
      expect(articleReducer(articleInitialState, fetchArticleById.rejected(null, '', ''))).toMatchObject({
        isLoading: false,
        error: INTERNAL_SERVER_ERROR,
      });
    });
  });
});
