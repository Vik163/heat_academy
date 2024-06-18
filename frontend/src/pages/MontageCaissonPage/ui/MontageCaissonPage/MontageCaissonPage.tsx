import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MontageCaissonPage.module.scss';
import { Page } from '@/widgets/Page';
import { MontageTitleComponent } from '../MontageTitleComponent/MontageTitleComponent';
import { StagesComponent } from '../StagesComponent/StagesComponent';

export interface MontageCaissonPageProps {
   className?: string;
}

const MontageCaissonPage = memo((props: MontageCaissonPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.MontageCaissonPage, {}, [className])}>
         <MontageTitleComponent />
         <StagesComponent />
      </Page>
   );
});

export default MontageCaissonPage;
