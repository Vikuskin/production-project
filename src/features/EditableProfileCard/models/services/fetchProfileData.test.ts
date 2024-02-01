import { AxiosError, AxiosResponse } from 'axios';

import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { profileForm } from 'shared/mocks/profileForm';

import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
  it('handles success response from server', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockResolvedValue({ data: profileForm });

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(profileForm);
  });

  it('handles response with no data from server', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockResolvedValue({ data: null });

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
  });

  it('handles internal error from server', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockRejectedValue({ response: { status: 499 } });

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(INTERNAL_SERVER_ERROR);
  });

  it('handles 403 forbidden error from server', async () => {
    const error = new AxiosError();

    error.response = { status: ErrorStatusCode.Forbidden } as AxiosResponse;

    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockRejectedValue(error);

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual({
      message: 'Authentication error, you are not authorized',
      status: ErrorStatusCode.Forbidden,
    });
  });
});
