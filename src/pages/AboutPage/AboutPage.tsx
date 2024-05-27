import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AboutPage.module.scss';

interface AboutPageProps {
   className?: string;
}

export const AboutPage = memo((props: AboutPageProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.AboutPage, {}, [className])}>
         ABOUTPAGE
      </div>
   );
});
