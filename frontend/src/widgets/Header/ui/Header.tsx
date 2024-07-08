import { memo, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import cls from './Header.module.scss';
import { Text, FontColor, FontSize, FontWeight } from '@/shared/ui/Text';
import { Button, ButtonRadius, ButtonVariant } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { FlexJustify } from '@/shared/ui/Stack/Flex';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PHONE } from '@/shared/const/main_info';
import { Postman } from '@/shared/ui/Postman';
import { Logo } from '@/shared/ui/Logo';
import { useResize } from '@/shared/lib/hooks/useResize';

export const Header = memo(() => {
   const [isHeaderWhite, setISHeaderWhite] = useState<boolean>();
   const { pathname } = useLocation();
   const [isOpenForm, setIsOpenForm] = useState(false);
   const { isMobile, isMobileL, isPad, isNotebook, isDesktop } = useResize();

   console.log('resize:', isMobile, isMobileL, isPad, isNotebook, isDesktop);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   const onScroll = () => {
      if (window.scrollY === 0) {
         setISHeaderWhite(false);
      } else {
         setISHeaderWhite(true);
      }
   };

   useEffect(() => {
      if (window.scrollY === 0 && pathname === '/') setISHeaderWhite(false);
      if (window.scrollY !== 0 || pathname !== '/') setISHeaderWhite(true);
   }, [pathname]);

   useEffect(() => {
      if (pathname === '/') {
         window.addEventListener('scroll', onScroll);
      }
      return () => {
         window.removeEventListener('scroll', onScroll);
      };
   }, [pathname]);

   return (
      <header id='header' className={classNames(cls.header, { [cls.headerActive]: isHeaderWhite }, [])}>
         <HStack justify={FlexJustify.BETWEEN} className={cls.headerContainer}>
            <HStack>
               <Logo className={cls.logo} />
               <span className={classNames(cls.dealer, { [cls.headerActive]: isHeaderWhite }, [])}>
                  Официальный дилер ТМ «ЗЕМЛЯК»
               </span>
            </HStack>
            <HStack justify={FlexJustify.END}>
               <Text
                  className={classNames(cls.number, { [cls.headerActive]: isHeaderWhite }, [])}
                  fontColor={FontColor.WHITE}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_700}
               >
                  {PHONE}
               </Text>
               <Button
                  width={140}
                  height={30}
                  className={classNames(cls.button, { [cls.headerActive]: isHeaderWhite }, [])}
                  variant={ButtonVariant.OUTLINE}
                  fontSize={FontSize.SIZE_14}
                  fontColor={FontColor.WHITE}
                  fontWeight={FontWeight.TEXT_400}
                  radius={ButtonRadius.RADIUS_8}
                  onClick={openForm}
               >
                  Обратный звонок
               </Button>
            </HStack>
         </HStack>
         {isOpenForm && (
            <Postman
               title='Обратный звонок'
               buttonText='Перезвоните мне'
               commentText='Комментарий'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </header>
   );
});
