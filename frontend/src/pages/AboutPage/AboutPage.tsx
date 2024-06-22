import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AboutPage.module.scss';
import { Page } from '@/widgets/Page';
import { TitleComponent } from '@/widgets/TitleComponent/TitleComponent';

interface AboutPageProps {
   className?: string;
}

export const AboutPage = memo((props: AboutPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.AboutPage, {}, [className])}>
         <TitleComponent />
      </Page>
   );
});
