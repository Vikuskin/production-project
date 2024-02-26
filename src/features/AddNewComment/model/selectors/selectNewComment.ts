import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

const selectNewComment = (state: IState) => state.newComment;

export const selectNewCommentText = createSelector(selectNewComment, (newComment): string => newComment?.text ?? '');

export const selectNewCommentError = createSelector(selectNewComment, (newComment): string => newComment?.error ?? '');
