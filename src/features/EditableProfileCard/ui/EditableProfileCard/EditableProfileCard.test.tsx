import '@testing-library/jest-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { IState } from '@/app/providers/StoreProvider';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { profileForm } from '@/shared/mocks/profileForm';

import { EditableProfileCard } from './EditableProfileCard';

import { profileReducer } from '../../models/slices/profileSlice';

describe('EditableProfileCard', () => {
  it('renders edit button when profile is readonly and profile belongs to user', () => {
    const { getByTestId } = componentRender(<EditableProfileCard profileForm={profileForm} />, {
      initialState: { profile: { readonly: true, form: { id: '1' } }, user: { authData: { id: '1' } } },
      asyncReducers: { profile: profileReducer } as ReducersMapObject<IState>,
    });
    const editButton = getByTestId('edit-btn');

    expect(editButton).toBeInTheDocument();
  });

  it('renders save and cancel buttons when profile is not readonly and profile belongs to user', () => {
    const { getByTestId } = componentRender(<EditableProfileCard profileForm={profileForm} />, {
      initialState: { profile: { readonly: false, form: { id: '1' } }, user: { authData: { id: '1' } } },
      asyncReducers: { profile: profileReducer } as ReducersMapObject<IState>,
    });
    const cancelButton = getByTestId('cancel-btn');
    const saveButton = getByTestId('save-btn');

    expect(cancelButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
});
