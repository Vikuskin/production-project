import StorybookAvatar from 'shared/assets/tests/storybook-avatar.jpeg';

export const commentsMock = [
  {
    id: '1',
    text: 'a comment about article 1',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      role: 'admin',
      avatar: StorybookAvatar,
    },
  },
  {
    id: '2',
    text: 'cool article',
    articleId: '1',
    userId: '2',
    user: {
      id: '2',
      username: 'user',
      password: '123',
      role: 'user',
      avatar: StorybookAvatar,
    },
  },
];
