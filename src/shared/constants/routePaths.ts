import { AppRoutes } from '@/app/providers/router/constants/appRoutes';

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.Profile]: '/profile/', // + id
  [AppRoutes.ArticleList]: '/article',
  [AppRoutes.Article]: '/article/', // + id
  [AppRoutes.ArticleCreate]: '/article/create',
  [AppRoutes.ArticleEdit]: '/article/:id/edit',
  [AppRoutes.AdminPanel]: '/admin',
  [AppRoutes.NotFound]: '*',
};
