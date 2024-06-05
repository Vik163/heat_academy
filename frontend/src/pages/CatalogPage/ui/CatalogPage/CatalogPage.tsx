import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CatalogPage.module.scss';

interface CatalogPageProps {
   className?: string;
}

export const CatalogPage = memo((props: CatalogPageProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.CatalogPage, {}, [className])}>
         CATALOG
      </div>
   );
});
