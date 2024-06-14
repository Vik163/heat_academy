import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CatalogInfo.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface CatalogInfoProps {
   className?: string;
}

export const CatalogInfo = memo((props: CatalogInfoProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.CatalogInfo, {}, [className])}>
         <HStack gap={94} className={cls.container}>
            <div className={cls.info}></div>
            <div className={cls.advantages}></div>
         </HStack>
      </div>
   );
});
