import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AdviceEngineerComponent.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FontColor, FontSize, FontWeight, Text } from '@/shared/ui/Text';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
// import whatsapp from '@/shared/assets/icons/icon-whatsapp.svg';
// import telegram from '@/shared/assets/icons/icon-telegram.svg';

interface AdviceEngineerComponentProps {
   className?: string;
}

export const AdviceEngineerComponent = memo((props: AdviceEngineerComponentProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.AdviceEngineer, {}, [className])}>
         <HStack gap={20} className={classNames(cls.container, {}, [className])}>
            <div className={cls.faceContainer}>
               <img
                  className={cls.face}
                  src='https://земляк.рф/wp-content/uploads/2021/10/tsifry.png'
                  alt='лицо'
               />
            </div>
            <VStack className={cls.infoContainer} align={FlexAlign.START}>
               <Text
                  fontSize={FontSize.SIZE_36}
                  fontWeight={FontWeight.TEXT_700}
                  fontColor={FontColor.TEXT_PRIMARY}
               >
                  Посоветуйтесь с инженером
               </Text>
               <Text
                  className={cls.description}
                  fontSize={FontSize.SIZE_18}
                  fontColor={FontColor.TEXT_PRIMARY}
               >
                  Подбор кессона, оборудования, особенности монтажа, скидки и оптовые цены - любой вопрос!
               </Text>
               <HStack>
                  <Button
                     width={166}
                     height={40}
                     variant={ButtonVariant.FILLED}
                     bgColor={ButtonBgColor.YELLOW}
                     fontColor={FontColor.BUTTON}
                     fontWeight={FontWeight.TEXT_400}
                     arrow
                     className={cls.button}
                  >
                     Задать вопрос
                  </Button>
                  {/* <Button
                     className={cls.whatsapp}
                     width={42}
                     height={42}
                     variant={ButtonVariant.FILLED}
                  >
                     <Icon width={42} height={42} Svg={whatsapp} />
                  </Button>
                  <Button
                     className={cls.telegram}
                     width={42}
                     height={42}
                     variant={ButtonVariant.FILLED}
                  >
                     <Icon width={42} height={42} Svg={telegram} />
                  </Button> */}
                  <a href='#' className={cls.link}>
                     почта@почта.ru
                  </a>
               </HStack>
               <Text className={cls.caption} fontSize={FontSize.SIZE_14} fontColor={FontColor.TEXT_PRIMARY}>
                  Дмитрий Попов, эксперт по водоснабжению
               </Text>
            </VStack>
         </HStack>
      </div>
   );
});
