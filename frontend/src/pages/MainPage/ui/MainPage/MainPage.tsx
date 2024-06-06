import { memo } from 'react';

import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import { TitleComponent } from '../TitleComponent/TitleComponent';
import { EquipmentComponent } from '../EquipmentComponent/EquipmentComponent';
import { CatalogComponent } from '@/widgets/CatalogComponent';

// interface MainPageProps {
//    className?: string;
// }

export const MainPage = memo(() => {
   return (
      <Page className={cls.MainPage}>
         <TitleComponent />
         <EquipmentComponent />
         <CatalogComponent />
      </Page>
   );
});
