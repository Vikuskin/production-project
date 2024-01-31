import '@testing-library/jest-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { componentRender } from 'shared/lib/tests/componentRender';
import { profileForm } from 'shared/mocks/profileForm';

import { EditableProfileCard } from './EditableProfileCard';

import { profileReducer } from '../../models/slices/profileSlice';

describe('EditableProfileCard', () => {
  it('renders edit button when profile is readonly', () => {
    const { getByTestId } = componentRender(<EditableProfileCard profileForm={profileForm} />, {
      initialState: { profile: { readonly: true, form: {} } },
      asyncReducers: { profile: profileReducer } as ReducersMapObject<IState>,
    });
    const editButton = getByTestId('edit-btn');

    expect(editButton).toBeInTheDocument();
  });

  it('renders save and cancel buttons when profile is not readonly', () => {
    const { getByTestId } = componentRender(<EditableProfileCard profileForm={profileForm} />, {
      initialState: { profile: { readonly: false, form: {} } },
      asyncReducers: { profile: profileReducer } as ReducersMapObject<IState>,
    });
    const cancelButton = getByTestId('cancel-btn');
    const saveButton = getByTestId('save-btn');

    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
});
