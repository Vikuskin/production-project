import React, { FC } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Text, TextAligns } from '@/shared/ui/Text';

import { INotification } from '../../models/interfaces/notification';

interface INotificationItemProps {
  notification: INotification;
  className?: string;
}

export const NotificationItem: FC<INotificationItemProps> = ({ className, notification }) => {
  const content = (
    <div className={getClassNames('', [className ?? ''])}>
      <Text align={TextAligns.Center} title={notification.title} text={notification.description} />
    </div>
  );

  if (notification.href) {
    return <AppLink to={notification.href}>{content}</AppLink>;
  }

  return content;
};
