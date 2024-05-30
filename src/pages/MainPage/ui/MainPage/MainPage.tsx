import { memo } from 'react';

import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import { TitleComponent } from '../TitleComponent/TitleComponent';
import { EquipmentComponent } from '../EquipmentComponent/EquipmentComponent';

interface MainPageProps {
   className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
   const { className } = props;

   return (
      <Page className={cls.MainPage}>
         <TitleComponent />
         <EquipmentComponent />
      </Page>
   );
});
