import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { profileForm } from 'shared/mocks/profileForm';

import { updateProfileData } from './updateProfileData';

import { ValidateProfileError } from '../types/validateProfileError';

describe('updateProfileData', () => {
  it('handles success response from server', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileForm },
      user: { authData: { id: '1', username: '' } },
    });

    thunk.api.put.mockResolvedValue({ data: profileForm });

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(profileForm);
  });

  it('handles response with no data from server', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileForm },
      user: { authData: { id: '1', username: '' } },
    });

    thunk.api.put.mockResolvedValue({ data: null });

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
  });

  it('handles internal error from server', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileForm },
      user: { authData: { id: '1', username: '' } },
    });

    thunk.api.put.mockRejectedValue({ response: { status: 500 } });

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(INTERNAL_SERVER_ERROR);
  });

  it('handles validation errors', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { user: { authData: { id: '1', username: '' } } });
    const result = await thunk.callThunk();

    expect(thunk.api.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual([ValidateProfileError.NoData]);
  });
});
