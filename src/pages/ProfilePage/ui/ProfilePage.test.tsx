import { ReducersMapObject } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { profileReducer } from 'features/EditableProfileCard';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { componentRender } from 'shared/lib/tests/componentRender';

import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  it('renders error when state has error', () => {
    const { getByText } = componentRender(<ProfilePage />, {
      initialState: { profile: { error: INTERNAL_SERVER_ERROR } },
      asyncReducers: { profile: profileReducer } as ReducersMapObject<IState>,
    });
    const errorTitle = getByText(`${INTERNAL_SERVER_ERROR.status}_error`);
    const errorText = getByText(INTERNAL_SERVER_ERROR.message);

    expect(errorText).toBeInTheDocument();
    expect(errorTitle).toBeInTheDocument();
  });
});
