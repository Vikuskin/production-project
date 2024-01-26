import axios, { AxiosError, AxiosResponse } from 'axios';

import { userActions } from 'entities/User';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';

import { INTERNAL_SERVER_ERROR, loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  it('handles success response from server', async () => {
    const mockUserData = { username: 'test', id: '1' };

    mockedAxios.post.mockResolvedValue({ data: mockUserData });

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.login(mockUserData));
    expect(result.payload).toEqual(mockUserData);
  });

  it('handles response with no data from server', async () => {
    mockedAxios.post.mockResolvedValue({ data: null });

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login);
    expect(result.payload).toEqual(INTERNAL_SERVER_ERROR);
  });

  it('handles interval error from server', async () => {
    mockedAxios.post.mockRejectedValue({ response: { status: 403 } });

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(INTERNAL_SERVER_ERROR);
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login);
  });

  it('handles 400 bad request error from server', async () => {
    const error = new AxiosError();

    error.response = { status: ErrorStatusCode.BadRequest } as AxiosResponse;

    mockedAxios.post.mockRejectedValue(error);

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual({ message: 'Incorrect authentication data', status: ErrorStatusCode.BadRequest });
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login);
  });

  it('handles 404 not found error from server', async () => {
    const error = new AxiosError();

    error.response = { status: ErrorStatusCode.NotFound } as AxiosResponse;

    mockedAxios.post.mockRejectedValue(error);

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'test', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual({
      message: 'The server cannot find the requested resource',
      status: ErrorStatusCode.NotFound,
    });
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.login);
  });
});
