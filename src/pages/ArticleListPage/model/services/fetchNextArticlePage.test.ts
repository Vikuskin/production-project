import { ArticleListView } from 'entities/ArticleList';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

import { fetchAllArticles } from './fetchAllArticles';
import { fetchNextArticlePage } from './fetchNextArticlePage';

import { articleListActions } from '../slices/articleListPageSlice';

jest.mock('./fetchAllArticles');
jest.mock('../slices/articleListPageSlice.ts');

describe('fetchNextArticlePage', () => {
  it('should increase page number and call fetchAllArticles', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articleList: {
        page: 2,
        hasMore: true,
        isLoading: false,
        limit: 5,
        ids: [],
        entities: {},
        view: ArticleListView.Tile,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledWith(articleListActions.setPage(3));
    expect(fetchAllArticles).toHaveBeenCalledWith({});
  });
});
