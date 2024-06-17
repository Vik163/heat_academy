import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './QuestionsPage.module.scss';
import { Page } from '@/widgets/Page';

interface QuestionsPageProps {
   className?: string;
}

export const QuestionsPage = memo((props: QuestionsPageProps) => {
   const { className } = props;

   return <Page className={classNames(cls.QuestionsPage, {}, [className])}>QuestionsPage</Page>;
});
