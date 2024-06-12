import { memo } from 'react';

import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import { TitleComponent } from '../TitleComponent/TitleComponent';
import { EquipmentComponent } from '../EquipmentComponent/EquipmentComponent';
import { CatalogComponent } from '@/widgets/CatalogComponent';
import { BestDecisionComponent } from '../BestDecisionComponent/BestDecisionComponent';
import { MontageComponent } from '../MontageComponent/MontageComponent';
import { ModelList } from '../ModelList/ModelList';

// interface MainPageProps {
//    className?: string;
// }

export const MainPage = memo(() => {
   return (
      <Page className={cls.MainPage}>
         <TitleComponent />
         <EquipmentComponent />
         <CatalogComponent />
         <BestDecisionComponent />
         <MontageComponent />
         <ModelList />
      </Page>
   );
});
