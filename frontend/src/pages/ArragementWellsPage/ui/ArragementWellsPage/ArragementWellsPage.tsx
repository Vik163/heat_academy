import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArragementWellsPage.module.scss';
import { Page } from '@/widgets/Page';

export interface ArragementWellsPageProps {
   className?: string;
}

const ArragementWellsPage = memo((props: ArragementWellsPageProps) => {
   const { className } = props;

   return <Page className={classNames(cls.ArragementWellsPage, {}, [className])}>ArragementWellsPage</Page>;
});

export default ArragementWellsPage;
