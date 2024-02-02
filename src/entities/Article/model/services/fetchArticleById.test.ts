import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { articleDataMock } from 'shared/mocks/articleData';

import { fetchArticleById } from './fetchArticleById';

describe('fetchArticleById', () => {
  it('handles success response from server', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockResolvedValue({ data: articleDataMock });

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(articleDataMock);
  });

  it('handles response with no data from server', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockResolvedValue({ data: null });

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
  });

  it('handles internal error from server', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockRejectedValue({ response: { status: 499 } });

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(INTERNAL_SERVER_ERROR);
  });
});
