import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ResultsSAWC.module.scss';
import { Page } from '@/widgets/Page';

export interface ResultsSAWCProps {
   className?: string;
}

const ResultsSAWC = memo((props: ResultsSAWCProps) => {
   const { className } = props;

   return <Page className={classNames(cls.ResultsSAWC, {}, [className])}>ResultsSAWC</Page>;
});

export default ResultsSAWC;
