import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MontageCaissonPage.module.scss';

export interface MontageCaissonPageProps {
   className?: string;
}

const MontageCaissonPage = memo((props: MontageCaissonPageProps) => {
   const { className } = props;

   return <div className={classNames(cls.MontageCaissonPage, {}, [className])}></div>;
});

export default MontageCaissonPage;
