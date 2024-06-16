import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ResultsSAWC.module.scss';

export interface ResultsSAWCProps {
   className?: string;
}

const ResultsSAWC = memo((props: ResultsSAWCProps) => {
   const { className } = props;

   return <div className={classNames(cls.ResultsSAWC, {}, [className])}></div>;
});

export default ResultsSAWC;
