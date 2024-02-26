import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Text } from 'shared/ui/Text';
import { PageWrapper } from 'widgets/PageWrapper';

const ArticleEditPage: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <PageWrapper>
      <div>{isEdit ? <Text text={t('Edit the article')} /> : <Text text={t('Create the article')} />}</div>
    </PageWrapper>
  );
};

export default ArticleEditPage;
