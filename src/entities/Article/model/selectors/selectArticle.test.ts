import { IState } from '@/app/providers/StoreProvider';
import { INTERNAL_SERVER_ERROR } from '@/shared/constants/internalServerError';

import { selectArticleData, selectArticleError, selectArticleLoading } from './selectArticle';

import { articleDataMock } from '../mocks/articleData';

describe('selectArticle', () => {
  it('should select article data', () => {
    const state: DeepPartial<IState> = { article: { articleData: articleDataMock } };

    expect(selectArticleData(state as IState)).toEqual(articleDataMock);
  });

  it('should select article loading', () => {
    const state: DeepPartial<IState> = { article: { isLoading: true } };

    expect(selectArticleLoading(state as IState)).toBeTruthy();
  });

  it('shoud select article error', () => {
    const state: DeepPartial<IState> = { article: { error: INTERNAL_SERVER_ERROR } };

    expect(selectArticleError(state as IState)).toEqual(INTERNAL_SERVER_ERROR);
  });
});
