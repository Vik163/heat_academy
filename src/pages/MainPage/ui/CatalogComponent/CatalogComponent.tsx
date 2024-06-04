import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CatalogComponent.module.scss';
import {
   FontColor,
   FontSize,
   FontWeight,
   HeaderTagType,
   Text,
} from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { productsLinks } from '@/shared/const/products/products';
import { FlexWrap } from '@/shared/ui/Stack/Flex';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProduct } from '@/shared/const/router';

interface CatalogComponentProps {
   className?: string;
}

export const CatalogComponent = memo((props: CatalogComponentProps) => {
   const { className } = props;

   console.log('productsLinks:', productsLinks);
   const links = Object.entries(productsLinks).map(([key, value]) => {
      return (
         <AppLink
            to={getRouteProduct(value.link)}
            key={key}
            className={cls.linkContainer}
         >
            <VStack gap={20}>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_18}
                  fontWeight={FontWeight.TEXT_500}
                  className={cls.titleLink}
               >
                  {key}
               </Text>
               <Button
                  width={124}
                  height={40}
                  fontSize={FontSize.SIZE_15}
                  fontWeight={FontWeight.TEXT_400}
                  fontColor={FontColor.BUTTON}
                  variant={ButtonVariant.FILLED}
                  bgColor={ButtonBgColor.YELLOW}
                  className={classNames('', {}, [cls.buttonSelect])}
               >
                  Перейти
               </Button>
            </VStack>
            <img src={value.image} alt={key} className={cls.imageLink} />
         </AppLink>
      );
   });

   return (
      <div className={classNames(cls.CatalogComponent, {}, [className])}>
         <div className={cls.container}>
            <Text
               title={HeaderTagType.H_3}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
               className={cls.title}
            >
               Каталог кессонов и погребов
            </Text>
            <HStack wrap={FlexWrap.WPAP} gap={20}>
               {links}
            </HStack>
         </div>
      </div>
   );
});
