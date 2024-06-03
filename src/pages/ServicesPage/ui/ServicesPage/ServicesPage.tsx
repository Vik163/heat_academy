import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ServicesPage.module.scss';

interface ServicesPageProps {
   className?: string;
}

export const ServicesPage = memo((props: ServicesPageProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.ServicesPage, {}, [className])}>
         ServicesPAGE
      </div>
   );
});