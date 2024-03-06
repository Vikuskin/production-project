import React, { FC } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { Card } from '@/shared/ui/Card';
import { Spinner } from '@/shared/ui/Spinner';
import { VStack } from '@/shared/ui/Stack';

import { useNotifications } from '../../models/api/notificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface INotificationListProps {
  className?: string;
}

export const NotificationList: FC<INotificationListProps> = ({ className }) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  return (
    <Card>
      <VStack gap={15} align="center" className={getClassNames('', [className ?? ''])}>
        {isLoading && <Spinner />}
        {notifications?.map((notification) => <NotificationItem key={notification.id} notification={notification} />)}
      </VStack>
    </Card>
  );
};
