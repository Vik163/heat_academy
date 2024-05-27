import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Header.module.scss';
import { Text, FontColor, FontSize, FontWeight } from '@/shared/ui/Text';
import { Button, ButtonRadius, ButtonVariant } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { Modal } from '@/shared/ui/Modal';

// eslint-disable-next-line ulbi-tv-plugin/layer-imports

interface HeaderProps {
   className?: string;
}

export const Header = memo((props: HeaderProps) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const { className } = props;
   const [openModal, setOpenModal] = useState(false);

   return (
      <header className={cls.header}>
         <Text
            style={{ fontFamily: 'Pattaya' }}
            className={classNames(cls.logo)}
            fontWeight={FontWeight.TEXT_700}
            fontSize={FontSize.SIZE_16}
            fontColor={FontColor.TEXT_GREEN}
         >
            Инженерный Центр
            <span className={cls.logoName}> &quot;Академия Тепла&quot;</span>
         </Text>
         <HStack className={cls.headerContainer} justify={FlexJustify.BETWEEN}>
            <VStack className={cls.phone}>
               <Text
                  className={cls.number}
                  fontColor={FontColor.TEXT_PRIMARY}
                  fontSize={FontSize.SIZE_22}
                  fontWeight={FontWeight.TEXT_700}
               >
                  8 (800) 301-50-51
               </Text>
               <Button
                  className={cls.button}
                  variant={ButtonVariant.CLEAR}
                  fontColor={FontColor.TEXT_GREEN}
                  fontSize={FontSize.SIZE_14}
                  fontWeight={FontWeight.TEXT_400}
                  radius={ButtonRadius.RADIUS_28}
               >
                  Заказать обратный звонок
               </Button>
            </VStack>
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
                     fontColor={FontColor.TEXT_PRIMARY}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Виды работ
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontColor={FontColor.TEXT_PRIMARY}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Отзывы клиентов
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontColor={FontColor.TEXT_PRIMARY}
                     fontSize={FontSize.SIZE_20}
                     fontWeight={FontWeight.TEXT_700}
                  >
                     Акции
                  </Text>
                  <Text
                     className={cls.menuLink}
                     fontColor={FontColor.TEXT_PRIMARY}
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
