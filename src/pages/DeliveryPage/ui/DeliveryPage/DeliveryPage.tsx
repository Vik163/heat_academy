import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './DeliveryPage.module.scss';

interface DeliveryPageProps {
   className?: string;
}

export const DeliveryPage = memo((props: DeliveryPageProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.DeliveryPage, {}, [className])}>
         DELIVERY
      </div>
   );
});
