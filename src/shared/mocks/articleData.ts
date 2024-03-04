import { IArticleData } from 'entities/Article';
import { ArticleBlockType } from 'entities/Article/model/types/articleBlock';
import { ArticleType } from 'entities/Article/model/types/articleType';
import StrybookAvatar from 'shared/assets/tests/storybook-avatar.jpeg';

export const articleDataMock: IArticleData = {
  id: '1',
  title: 'Title of article',
  subtitle: 'Subtitle of article',
  img: StrybookAvatar,
  views: '1000',
  createdAt: '01.01.2024',
  user: { id: '1', username: 'test', avatar: StrybookAvatar, roles: [] },
  type: [ArticleType.It, ArticleType.Medicine],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.Text,
      title: 'Title of this block',
      paragraphs: [
        'Culpa do ex ullamco aliquip eu officia incididunt minim.',
        'Eiusmod ad sunt amet culpa nostrud reprehenderit. Nisi occaecat exercitation enim excepteur sint ad mollit ullamco dolor nisi nulla. Nostrud cupidatat amet minim do. Officia aliquip sit voluptate proident magna elit duis. Est aute ex dolore incididunt id non cupidatat ea ipsum sunt veniam.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.Code,
      // eslint-disable-next-line quotes
      code: "const jsonServer = require('json-server');\nconst path = require('path');\nconst server = jsonServer.create();\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '3',
      type: ArticleBlockType.Text,
      title: 'Title of this block',
      paragraphs: [
        'Occaecat fugiat dolore adipisicing commodo deserunt in exercitation id duis adipisicing culpa ipsum labore. Ut dolore laboris velit quis ipsum adipisicing Lorem. Nostrud esse voluptate deserunt mollit voluptate culpa.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.Img,
      src: StrybookAvatar,
      title: 'Id ullamco cupidatat excepteur minim et ut sint commodo anim ad esse consectetur.',
    },
  ],
};
