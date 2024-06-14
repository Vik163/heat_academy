import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './EquipmentComponent.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
   Text,
   FontWeight,
   HeaderTagType,
   FontSize,
   FontColor,
} from '@/shared/ui/Text';
import {
   equipmentListLeft,
   equipmentListRight,
} from '../../model/const/equipmentList';
import { EquipmentList } from '../../model/types/equipment';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';

interface EquipmentComponentProps {
   className?: string;
}

export const EquipmentComponent = memo((props: EquipmentComponentProps) => {
   const { className } = props;

   return (
      <article className={classNames(cls.EquipmentComponent, {}, [className])}>
         <div className={cls.mainInfo}>
            <Text
               title={HeaderTagType.H_3}
               fontWeight={FontWeight.TEXT_700}
               fontSize={FontSize.SIZE_36}
            >
               Производим на чешском оборудовании
            </Text>
            <Text
               className={cls.description}
               fontSize={FontSize.SIZE_18}
               fontColor={FontColor.LIGHT_GREY}
            >
               По европейским стандартам с выдержанным технологическим процессом
            </Text>
            <HStack
               justify={FlexJustify.BETWEEN}
               className={cls.container}
               align={FlexAlign.START}
            >
               <VStack
                  gap={47}
                  className={cls.listContainer}
                  align={FlexAlign.START}
               >
                  {equipmentListLeft.map((i: EquipmentList) => (
                     <div key={i.title} className={cls.itemContainer}>
                        <img
                           src={i.image}
                           alt={i.title}
                           className={cls.image}
                        />
                        <Text
                           className={cls.itemTitle}
                           title={HeaderTagType.H_4}
                           fontWeight={FontWeight.TEXT_700}
                           fontSize={FontSize.SIZE_16}
                        >
                           {i.title}
                        </Text>
                        <Text
                           className={cls.itemDescription}
                           fontSize={FontSize.SIZE_14}
                           fontColor={FontColor.LIGHT_GREY}
                        >
                           {i.description}
                        </Text>
                     </div>
                  ))}
               </VStack>
               <VStack
                  gap={44}
                  className={cls.listContainer}
                  align={FlexAlign.START}
               >
                  {equipmentListRight.map((i: EquipmentList) => (
                     <div key={i.title} className={cls.itemContainer}>
                        <img
                           src={i.image}
                           alt={i.title}
                           className={cls.image}
                        />
                        <Text
                           className={cls.itemTitle}
                           title={HeaderTagType.H_4}
                           fontWeight={FontWeight.TEXT_700}
                           fontSize={FontSize.SIZE_16}
                        >
                           {i.title}
                        </Text>
                        <Text
                           className={cls.itemDescription}
                           fontSize={FontSize.SIZE_14}
                           fontColor={FontColor.LIGHT_GREY}
                        >
                           {i.description}
                        </Text>
                     </div>
                  ))}
               </VStack>
            </HStack>
            <Button
               className={cls.button}
               width={210}
               height={40}
               bgColor={ButtonBgColor.YELLOW}
               variant={ButtonVariant.FILLED}
               fontColor={FontColor.BUTTON}
               fontWeight={FontWeight.TEXT_400}
            >
               Хочу приехать на склад
            </Button>
            <Text fontSize={FontSize.SIZE_14} fontColor={FontColor.LIGHT_GREY}>
               Приезжайте на склад в г. Новокуйбышевске и убедитесь в качестве
            </Text>
         </div>
      </article>
   );
});
