export const routes = {
  main: '/',
  about: '/about',
  profile: (id: string) => `/profile/${id}`,
  articleList: '/article',
  article: (id: string) => `/article/${id}`,
  articleCreate: '/article/create',
  articleEdit: (id: string) => `/article/${id}/edit`,
  adminPanel: '/admin',
};
