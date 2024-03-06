import { IArticleData } from '@/entities/Article';
import { ROUTES } from '@/shared/api/routes';
import { RTKapi } from '@/shared/api/RTKapi';

const recommendsApi = RTKapi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommends: build.query<IArticleData[], number>({
      query: (limit) => ({
        url: ROUTES.articles,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticleRecommends = recommendsApi.useGetArticleRecommendsQuery;
