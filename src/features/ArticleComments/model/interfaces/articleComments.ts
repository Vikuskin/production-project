import { EntityState } from '@reduxjs/toolkit';

import { IComment } from '@/entities/Comment';

export interface IArticleComments extends EntityState<IComment, string> {
  isLoading: boolean;
}
