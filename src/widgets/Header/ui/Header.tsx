import { memo, useEffect, useState } from 'react';

import cls from './Header.module.scss';
import { Text, FontColor, FontSize, FontWeight } from '@/shared/ui/Text';
import { Button, ButtonRadius, ButtonVariant } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { Modal } from '@/shared/ui/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';

// eslint-disable-next-line ulbi-tv-plugin/layer-imports

interface HeaderProps {
   className?: string;
}

export const Header = memo((props: HeaderProps) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const { className } = props;
   const [openModal, setOpenModal] = useState(false);
   const [isHeaderWhite, setISHeaderWhite] = useState(false);

   const onScroll = () => {
      if (window.scrollY !== 0) {
         setISHeaderWhite(true);
      } else {
         setISHeaderWhite(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', onScroll);

      return () => {
         window.removeEventListener('scroll', onScroll);
      };
   }, []);

   return (
      <header
         className={classNames(
            cls.header,
            { [cls.headerActive]: isHeaderWhite },
            [],
         )}
      >
         <HStack justify={FlexJustify.END} className={cls.headerContainer}>
            <Text
               className={classNames(
                  cls.number,
                  { [cls.numberActive]: isHeaderWhite },
                  [],
               )}
               fontColor={FontColor.WHITE}
               fontSize={FontSize.SIZE_20}
               fontWeight={FontWeight.TEXT_700}
            >
               8 (846) 354-66-30
            </Text>
            <Button
               width={140}
               height={30}
               className={classNames(
                  cls.button,
                  { [cls.buttonActive]: isHeaderWhite },
                  [],
               )}
               variant={ButtonVariant.OUTLINE}
               fontSize={FontSize.SIZE_14}
               fontColor={FontColor.WHITE}
               fontWeight={FontWeight.TEXT_400}
               radius={ButtonRadius.RADIUS_8}
            >
               Обратный звонок
            </Button>
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
                  <Text
                     className={cls.menuLink}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Виды работ
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Отзывы клиентов
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Акции
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Контакты
                  </Text>
               </VStack>
            </Modal>
         )}
      </header>
   );
});
