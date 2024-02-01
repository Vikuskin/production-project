import { EntityState } from '@reduxjs/toolkit';

import { IComment } from 'entities/Comment';
import { ICustomError } from 'shared/types/customError';

export interface IArticleComments extends EntityState<IComment, string> {
  isLoading: boolean;
  error: ICustomError | null;
}
