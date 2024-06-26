import { memo, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import cls from './Header.module.scss';
import { Text, FontColor, FontSize, FontWeight } from '@/shared/ui/Text';
import { Button, ButtonRadius, ButtonVariant } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { Modal } from '@/shared/ui/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';

// eslint-disable-next-line ulbi-tv-plugin/layer-imports

// interface HeaderProps {
//    className?: string;
// }

export const Header = memo(() => {
   const [openModal, setOpenModal] = useState(false);
   const [isHeaderWhite, setISHeaderWhite] = useState<boolean>();
   const { pathname } = useLocation();

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
            <span className={classNames(cls.dealer, { [cls.headerActive]: isHeaderWhite }, [])}>
               Официальный дилер ТМ «ЗЕМЛЯК»
            </span>

            <HStack justify={FlexJustify.END}>
               <Text
                  className={classNames(cls.number, { [cls.headerActive]: isHeaderWhite }, [])}
                  fontColor={FontColor.WHITE}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_700}
               >
                  8 (846) 354-66-30
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
               >
                  Обратный звонок
               </Button>
            </HStack>
         </HStack>
         {openModal && (
            <Modal
               isOpen={openModal}
               onClose={() => setOpenModal(false)}
               buttonCloseHeight={30}
               buttonCloseWidth={30}
               buttonCloseRight={30}
               buttonCloseTop={30}
               className={cls.modalMenu}
            >
               <VStack align={FlexAlign.START} className={cls.containerLinks}>
                  <Text className={cls.menuLink} fontSize={FontSize.SIZE_20} fontWeight={FontWeight.TEXT_700}>
                     Виды работ
                  </Text>
                  <Text className={cls.menuLink} fontSize={FontSize.SIZE_20} fontWeight={FontWeight.TEXT_700}>
                     Отзывы клиентов
                  </Text>
                  <Text className={cls.menuLink} fontSize={FontSize.SIZE_20} fontWeight={FontWeight.TEXT_700}>
                     Акции
                  </Text>
                  <Text className={cls.menuLink} fontSize={FontSize.SIZE_20} fontWeight={FontWeight.TEXT_700}>
                     Контакты
                  </Text>
               </VStack>
            </Modal>
         )}
      </header>
   );
});
