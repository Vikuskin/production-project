import React, { FC, useState } from 'react';

import { NotificationList } from 'entities/Notification';
import { selectUserAuthData } from 'entities/User';
import NotificationSvg from 'shared/assets/icons/notification.svg';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useDevice } from 'shared/lib/hooks/useDevice';
import { AppButton } from 'shared/ui/AppButton';
import { Drawer } from 'shared/ui/Drawer';
import { Popover } from 'shared/ui/Popover';

import * as styles from './OpenNotifications.module.scss';

export const OpenNotifications: FC = () => {
  const userData = useAppSelector(selectUserAuthData);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const trigger = (
    <AppButton component="div" onClick={openDrawer}>
      <NotificationSvg className={styles.icon} />
    </AppButton>
  );
  const isMobile = useDevice();

  if (!userData) {
    return null;
  }

  return isMobile ? (
    <>
      {trigger}
      <AnimationProvider>
        <Drawer onClose={closeDrawer} isOpen={isDrawerOpen}>
          <NotificationList />
        </Drawer>
      </AnimationProvider>
    </>
  ) : (
    <Popover direction={'topRight'} trigger={trigger}>
      <NotificationList className={styles.popoverNotifications} />
    </Popover>
  );
};
