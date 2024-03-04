import { AxiosError, AxiosResponse } from 'axios';

import { userActions } from 'entities/User';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/internalServerError';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  it('handles success response from server', async () => {
    const mockUserData = { username: 'test', id: '1', roles: [] };
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockResolvedValue({ data: mockUserData });

    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.login(mockUserData));
    expect(result.payload).toEqual(mockUserData);
  });

  it('handles response with no data from server', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockResolvedValue({ data: null });

    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login);
    expect(result.payload).toEqual({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
  });

  it('handles intenval error from server', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockRejectedValue({ response: { status: 403 } });

    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(INTERNAL_SERVER_ERROR);
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login);
  });

  it('handles 400 bad request error from server', async () => {
    const error = new AxiosError();

    error.response = { status: ErrorStatusCode.BadRequest } as AxiosResponse;

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockRejectedValue(error);

    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual({ message: 'Incorrect authentication data', status: ErrorStatusCode.BadRequest });
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login);
  });

  it('handles 404 not found error from server', async () => {
    const error = new AxiosError();

    error.response = { status: ErrorStatusCode.NotFound } as AxiosResponse;

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockRejectedValue(error);

    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual({
      message: 'The server cannot find the requested resource',
      status: ErrorStatusCode.NotFound,
    });
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login);
  });
});
