import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AboutPage.module.scss';
import { Page } from '@/widgets/Page';
import { TitleComponent } from '@/widgets/TitleComponent/TitleComponent';
import { AboutVideoComponent } from '../AboutVideoComponent/AboutVideoComponent';
import { EquipmentComponent } from '@/widgets/EquipmentComponent';
import { AdviceEngineerComponent } from '@/widgets/AdviceEngineerComponent';
import { NumInfoComponent } from '../NumInfoComponent/NumInfoComponent';
import { SignComponent } from '../SignComponent/SignComponent';

interface AboutPageProps {
   className?: string;
}

export const AboutPage = memo((props: AboutPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.AboutPage, {}, [className])}>
         <TitleComponent />
         <AboutVideoComponent />
         <NumInfoComponent />
         <EquipmentComponent />
         <AdviceEngineerComponent />
         <SignComponent />
      </Page>
   );
});
