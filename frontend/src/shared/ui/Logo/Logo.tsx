import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Logo.module.scss';
import { getRouteMain } from '@/shared/const/router';

interface LogoProps {
   className?: string;
}

export const Logo = memo((props: LogoProps) => {
   const { className } = props;

   return (
      <Link to={getRouteMain()} className={classNames(cls.logo, {}, [className])}>
         ИНЖЕНЕРНЫЙ ЦЕНТР
         <span className={cls.logoName}>АКАДЕМИЯ ТЕПЛА</span>
      </Link>
   );
});
