import { ROUTES } from '@/shared/api/routes';
import { RTKapi } from '@/shared/api/RTKapi';

import { IArticleRating } from '../interfaces/articleRating';

const articleRatingApi = RTKapi.injectEndpoints({
  endpoints: (build) => ({
    rateArticle: build.mutation<void, Omit<IArticleRating, 'id'>>({
      query: (args) => ({
        url: ROUTES.articleRatings,
        method: 'POST',
        body: args,
      }),
    }),
    getArticleRating: build.query<IArticleRating[], { userId: string; articleId: string }>({
      query: ({ userId, articleId }) => ({
        url: ROUTES.articleRatings,
        params: {
          userId,
          articleId,
        },
      }),
    }),
  }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
