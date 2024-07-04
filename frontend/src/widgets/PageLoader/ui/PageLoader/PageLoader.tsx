import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
   className?: string;
   screenFull?: boolean;
}

export const PageLoader = ({ className, screenFull }: PageLoaderProps) => (
   <div className={classNames(cls.PageLoader, { [cls.screenFull]: screenFull }, [className])}>
      <Loader />
   </div>
);
