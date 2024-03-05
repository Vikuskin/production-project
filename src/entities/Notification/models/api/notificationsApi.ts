import { ROUTES } from 'shared/api/routes';
import { RTKapi } from 'shared/api/RTKapi';

import { INotification } from '../interfaces/notification';

const notificationsApi = RTKapi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<INotification[], null>({
      query: () => ({
        url: ROUTES.notifications,
      }),
    }),
  }),
});

export const useNotifications = notificationsApi.useGetNotificationsQuery;
