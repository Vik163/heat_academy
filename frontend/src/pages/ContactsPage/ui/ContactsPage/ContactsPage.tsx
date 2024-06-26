import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ContactsPage.module.scss';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text, TextAlign } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import Map from '@/shared/ui/Map/Map';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { coordsStores, mainCoordinates, mainZoom } from '@/shared/const/main_info';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';

interface ContactsPageProps {
   className?: string;
}

export const ContactsPage = memo((props: ContactsPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.ContactsPage, {}, [className])}>
         <div className={cls.container}>
            <Breadcrumb productName='Контакты' />
            <Text
               className={cls.title}
               title={HeaderTagType.H_2}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
            >
               Контакты
            </Text>
            <HStack justify={FlexJustify.BETWEEN}>
               <VStack className={cls.infoContainer} justify={FlexJustify.BETWEEN}>
                  <div className={cls.info}>
                     <div className={cls.blockPhone}>
                        <a href='tel:+78463546630'>+7 (846) 354-66-30</a>
                        <span>Работаем: 9:00-19:00, ежедневно</span>
                     </div>
                     <div className={cls.email}>
                        <a href='mailto:info@земляк.рф'>info@земляк.рф</a>
                     </div>
                     <div className={cls.address}>г. Ивантеевка, ул. Дзержинского, д. 1 </div>
                  </div>
                  <HStack
                     className={cls.buttonContainer}
                     justify={FlexJustify.BETWEEN}
                     align={FlexAlign.CENTER}
                  >
                     <Text align={TextAlign.LEFT} className={cls.labelButton}>
                        Задайте любой вопрос:
                     </Text>
                     <Button
                        width={176}
                        height={40}
                        variant={ButtonVariant.FILLED}
                        bgColor={ButtonBgColor.YELLOW}
                        className={cls.btn_container}
                        fontSize={FontSize.SIZE_15}
                        fontColor={FontColor.BUTTON}
                        fontWeight={FontWeight.TEXT_400}
                        arrow
                     >
                        Задать вопрос
                     </Button>
                  </HStack>
               </VStack>
               <Map
                  width={544}
                  height={318}
                  location={mainCoordinates}
                  zoom={mainZoom}
                  coordsStores={coordsStores}
                  className={cls.map}
               />
            </HStack>
         </div>
      </Page>
   );
});
