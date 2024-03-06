import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { AppButton, AppButtonVariants } from '@/shared/ui/AppButton';
import { AppInput } from '@/shared/ui/AppInput';
import { Text, TextVariants } from '@/shared/ui/Text';

import * as styles from './AddNewComment.module.scss';

import { selectNewCommentError, selectNewCommentText } from '../model/selectors/selectNewComment';
import { addNewCommentActions, addNewCommentReducer } from '../model/slices/addNewCommentSlice';

const newCommentReducers: ReducersList = {
  newComment: addNewCommentReducer,
};

interface AddNewCommentProps {
  onCommentSend: (text: string) => void;
  className?: string;
}

const AddNewComment: FC<AddNewCommentProps> = ({ className, onCommentSend }) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const commentText = useAppSelector(selectNewCommentText);
  const commentError = useAppSelector(selectNewCommentError);
  const onCommentTextChange = useCallback((value: string) => dispatch(addNewCommentActions.setText(value)), [dispatch]);
  const onSendHandler = useCallback(() => {
    onCommentSend(commentText);
    onCommentTextChange('');
  }, [commentText, onCommentSend, onCommentTextChange]);

  return (
    <DynamicReducerLoader reducers={newCommentReducers} removeAfterUnmount>
      {commentError && <Text variant={TextVariants.Error} text={commentError} />}
      <div className={getClassNames(styles.newCommentForm, [className ?? ''])}>
        <AppInput value={commentText} placeholder={t('Your comment')} onChange={onCommentTextChange} />
        <AppButton className={styles.sendBtn} variant={AppButtonVariants.Outline} onClick={onSendHandler}>
          {t('Send')}
        </AppButton>
      </div>
    </DynamicReducerLoader>
  );
};

export default memo(AddNewComment);
