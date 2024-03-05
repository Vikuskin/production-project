import { INotification } from '../interfaces/notification';

export const notificationsMock: INotification[] = [
  {
    id: '1',
    title: 'Notification 1',
    description: 'Some event happend',
    userId: '1',
  },
  {
    id: '2',
    title: 'Notification 2',
    description: 'Some event happend',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
];
