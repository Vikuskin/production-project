import { EntityState } from '@reduxjs/toolkit';

import { IArticleData } from '@/entities/Article';

export interface IArticleRecommends extends EntityState<IArticleData, string> {
  isLoading: boolean;
}
