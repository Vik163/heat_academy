import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CatalogPage.module.scss';
import { Page } from '@/widgets/Page';
import { CatalogComponent } from '@/widgets/CatalogComponent';
import { AdviceEngineer } from '@/features/AdviceEngineer';

interface CatalogPageProps {
   className?: string;
}

export const CatalogPage = memo((props: CatalogPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.CatalogPage, {}, [className])}>
         <CatalogComponent />
         <AdviceEngineer />
      </Page>
   );
});
