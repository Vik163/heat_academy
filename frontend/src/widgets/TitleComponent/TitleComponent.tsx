import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './TitleComponent.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import image from '@/shared/assets/images/several-keson.png';
import { Breadcrumb } from '@/features/Breadcrumbs';

interface TitleComponentProps {
   className?: string;
   content: {
      crumbs: string;
      title: string;
   };
}

export const TitleComponent = memo((props: TitleComponentProps) => {
   const { className, content } = props;

   return (
      <article id='title' className={classNames(cls.TitleComponent, {}, [className])}>
         <VStack className={cls.infoContainer} align={FlexAlign.START}>
            <Breadcrumb productName={content.crumbs} />
            <Text title={HeaderTagType.H_2} className={cls.title} fontColor={FontColor.WHITE}>
               {content.title}
            </Text>
            <Text fontSize={FontSize.SIZE_18} className={cls.production}>
               Лучшие технологические решения, качество сборки и красота исполнения, воплощённые инженерами в
               продукции ТМ «ЗЕМЛЯК»
            </Text>
            <ul className={classNames(cls.list, {}, [cls.listMargin])}>
               <li className={classNames(cls.imageStyle, {}, [cls.image1])}>
                  Производство укомплектовано современным европейским оборудованием
               </li>
               <li className={classNames(cls.imageStyle, {}, [cls.image2])}>
                  Заводская гарантия на все изделия
               </li>
               <li className={classNames(cls.imageStyle, {}, [cls.image3])}>
                  Сертифицированные специалисты для выполнения монтажа
               </li>
               <li className={classNames(cls.imageStyle, {}, [cls.image4])}>
                  Собственные инженерные разработки
               </li>
            </ul>
            <Button
               width={166}
               height={40}
               fontSize={FontSize.SIZE_15}
               fontWeight={FontWeight.TEXT_400}
               fontColor={FontColor.BUTTON}
               variant={ButtonVariant.FILLED}
               bgColor={ButtonBgColor.YELLOW}
               className={classNames('', {}, [cls.buttonSelect])}
            >
               Узнать больше
            </Button>
            <div className={cls.imageContainer}>
               <img src={image} className={cls.mainImage} alt='Кессон'></img>
            </div>
         </VStack>
      </article>
   );
});
