import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MontageCaissonPage.module.scss';
import { Page } from '@/widgets/Page';

export interface MontageCaissonPageProps {
   className?: string;
}

const MontageCaissonPage = memo((props: MontageCaissonPageProps) => {
   const { className } = props;

   return <Page className={classNames(cls.MontageCaissonPage, {}, [className])}>MontageCaissonPage</Page>;
});

export default MontageCaissonPage;
