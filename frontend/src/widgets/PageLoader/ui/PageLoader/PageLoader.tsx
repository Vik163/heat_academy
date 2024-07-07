import { useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';
import { Portal } from '@/shared/ui/Portal/Portal';

interface PageLoaderProps {
   className?: string;
   screenFull?: boolean;
}

export const PageLoader = ({ className, screenFull }: PageLoaderProps) => {
   useEffect(() => {
      if (screenFull)
         // не прокручивается страница
         document.body.style.overflow = 'hidden';
      // скролл добавляю при размонтировании
      return () => {
         if (screenFull) document.body.style.overflow = 'unset';
      };
   }, []);

   return screenFull ? (
      <Portal>
         <div className={classNames(cls.PageLoader, { [cls.screenFull]: screenFull }, [className])}>
            <Loader />
         </div>
      </Portal>
   ) : (
      <div className={cls.PageLoader}>
         <Loader />
      </div>
   );
};
