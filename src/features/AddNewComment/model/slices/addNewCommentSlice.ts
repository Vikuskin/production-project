import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { INewComment } from '../interfaces/newComment';

export const newCommentInitialState: INewComment = {
  text: '',
  error: '',
};

export const addNewCommentSlice = createSlice({
  name: 'newComment',
  initialState: newCommentInitialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: addNewCommentActions, reducer: addNewCommentReducer } = addNewCommentSlice;
