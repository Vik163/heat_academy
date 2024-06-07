import { memo } from 'react';

import cls from './BestDecisionComponent.module.scss';
import { HeaderTagType, Text } from '@/shared/ui/Text';

export const BestDecisionComponent = memo(() => {
   return (
      <article id='sec-garantii' className={cls.garantii}>
         <div className={cls.block_image}>
            <img
               className={cls.image_pc}
               src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2021/10/garantii-1-pc.jpg'
               alt='инженер'
            />
            <img
               className={cls.image_mob}
               src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2021/10/garantii-1-mob.jpg'
               alt='инженер'
            />
         </div>
         <div className={cls.container}>
            <Text title={HeaderTagType.H_3} className={cls.title}>
               Лучшее решение для обустройства скважины
            </Text>
            <Text className={cls.description}>
               по мнению 99% специалистов по водоснабжению
            </Text>
            <div className={cls.garantii_block}>
               <div className={cls.garantii_block_list}>
                  <div className={cls.garantii_block_list_item}>
                     <div className={cls.garantii_block_list_image}>
                        <img
                           src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2021/10/garantii-1.png'
                           alt='Экологичный пищевой полипропилен'
                        />
                     </div>
                     <Text
                        title={HeaderTagType.H_4}
                        className={cls.garantii_block_list_title}
                     >
                        Экологичный пищевой полипропилен
                     </Text>
                     <Text className={cls.garantii_block_list_description}>
                        Сертифицированный монолитный полипропилен из Европы,
                        безопасный для почвы и растений
                     </Text>
                  </div>
                  <div className={cls.garantii_block_list_item}>
                     <div className={cls.garantii_block_list_image}>
                        <img
                           src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2021/10/garantii-2.png'
                           alt='Не подвержен коррозии'
                        />
                     </div>
                     <Text
                        title={HeaderTagType.H_4}
                        className={cls.garantii_block_list_title}
                     >
                        Не подвержен коррозии
                     </Text>
                     <Text className={cls.garantii_block_list_description}>
                        В кессоне не образуется конденсат, а материал устойчив к
                        грунтовым водам и сохраняет прочность более 300 лет
                     </Text>
                  </div>
                  <div className={cls.garantii_block_list_item}>
                     <div className={cls.garantii_block_list_image}>
                        <img
                           src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2021/10/garantii-3.png'
                           alt='герметичен'
                        />
                     </div>
                     <Text
                        title={HeaderTagType.H_4}
                        className={cls.garantii_block_list_title}
                     >
                        100% герметичен
                     </Text>
                     <Text className={cls.garantii_block_list_description}>
                        Скрепляем швы гидравликой и комплектуем кессон муфтой,
                        которая обеспечивает герметичность на обсадной трубе
                     </Text>
                  </div>
                  <div className={cls.garantii_block_list_item}>
                     <div className={cls.garantii_block_list_image}>
                        <img
                           src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2021/10/garantii-4.png'
                           alt='иконка срок службы'
                        />
                     </div>
                     <Text
                        title={HeaderTagType.H_4}
                        className={cls.garantii_block_list_title}
                     >
                        Срок службы более 50 лет
                     </Text>
                     <Text className={cls.garantii_block_list_description}>
                        Благодаря сборке на чешских ЧПУ станках с
                        программированием и качественным материалам
                     </Text>
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
});
