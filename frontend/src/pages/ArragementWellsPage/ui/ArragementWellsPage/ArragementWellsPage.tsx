import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArragementWellsPage.module.scss';

export interface ArragementWellsPageProps {
   className?: string;
}

const ArragementWellsPage = memo((props: ArragementWellsPageProps) => {
   const { className } = props;

   return <div className={classNames(cls.ArragementWellsPage, {}, [className])}></div>;
});

export default ArragementWellsPage;
