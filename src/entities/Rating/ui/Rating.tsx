import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { useDevice } from '@/shared/lib/hooks/useDevice';
import { AppButton, AppButtonVariants } from '@/shared/ui/AppButton';
import { AppInput } from '@/shared/ui/AppInput';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

interface IRatingProps {
  title: string;
  onCancel: (starsCount: number) => void;
  onAccept: (starsCount: number, feedback?: string) => void;
  rate: number;
  feedbackTitle?: string;
  className?: string;
}

export const Rating: FC<IRatingProps> = (props: IRatingProps) => {
  const { t } = useTranslation();
  const { onAccept, onCancel, title, className, feedbackTitle, rate } = props;
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const onCloseFeedbackModal = useCallback(() => setIsFeedbackModalOpen(false), [setIsFeedbackModalOpen]);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const onChangeFeedback = useCallback((value: string) => setFeedback(value), []);
  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      feedbackTitle ? setIsFeedbackModalOpen(true) : onAccept(starsCount, feedback);
    },
    [feedback, feedbackTitle, onAccept, starsCount],
  );
  const onAcceptHandler = useCallback(() => {
    setIsFeedbackModalOpen(false);
    onAccept(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);
  const onCancelHandler = useCallback(() => {
    setIsFeedbackModalOpen(false);
    onCancel(starsCount);
  }, [onCancel, starsCount]);
  const isMobile = useDevice();
  const modalContent = (
    <VStack gap={20}>
      <Text title={feedbackTitle} />
      <AppInput value={feedback} onChange={onChangeFeedback} placeholder={t('Yours feedback')} />
      <HStack max justify="end">
        <AppButton variant={AppButtonVariants.OutlineDanger} onClick={onCancelHandler}>
          {t('Cancel')}
        </AppButton>
        <AppButton variant={AppButtonVariants.Outline} onClick={onAcceptHandler}>
          {t('Send')}
        </AppButton>
      </HStack>
    </VStack>
  );

  return (
    <Card className={getClassNames('', [className ?? ''])}>
      <VStack align="center" gap={10}>
        <Text title={starsCount ? t('Thank you for rate!') : title} />
        <StarRating onSelect={onSelectStars} size={40} selectedStars={starsCount} />
      </VStack>
      {isMobile ? (
        <Drawer height={200} isOpen={isFeedbackModalOpen} onClose={onCloseFeedbackModal}>
          {modalContent}
        </Drawer>
      ) : (
        <Modal lazy isOpen={isFeedbackModalOpen} onClose={onCloseFeedbackModal}>
          {modalContent}
        </Modal>
      )}
    </Card>
  );
};
