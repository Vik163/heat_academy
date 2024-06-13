import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Footer.module.scss';

import { HStack, VStack } from '@/shared/ui/Stack';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import {
   getRouteAbout,
   getRouteCatalog,
   getRouteContacts,
   getRouteDelivery,
   getRouteQuestions,
} from '@/shared/const/router';
import { FontColor, FontSize, Text } from '@/shared/ui/Text';

interface FooterProps {
   className?: string;
}

export const Footer = memo((props: FooterProps) => {
   const { className } = props;
   const year = new Date().getFullYear();

   const scrollTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
      <footer>
         <HStack
            className={classNames(cls.container, {}, [className])}
            justify={FlexJustify.BETWEEN}
            align={FlexAlign.START}
         >
            <div className={cls.footerInfo}>
               <span onClick={scrollTop} className={cls.logo}>
                  &quot;Академия Тепла&quot;
               </span>
               <p className={cls.textInfo}>
                  141280, МО, г. Ивантеевка, ул. Дзержинского, д. 1<br /> Email:
                  &nbsp;
                  <a href='#' className={cls.post}>
                     werwe@sjdf.dy
                  </a>
                  <br /> Работаем: 9:00-19:00, ежедневно
               </p>
               <p className={cls.textInfo}>
                  Посещение склада доступно по следующим дням:
                  <br />
                  Понедельник — четверг: с 13:00 — 14:00
                  <br />
                  Пятница — с 13:00 — 14:-00 и 17:00 — 18:00
                  <br />
                  Суббота и воскресенье — выходной
               </p>
               <p className={cls.textInfo}>
                  {year} © ТМ «ЗЕМЛЯК». Все права защищены.
               </p>
            </div>
            <VStack
               className={cls.links}
               align={FlexAlign.START}
               justify={FlexJustify.START}
               gap={15}
            >
               <Link to={getRouteCatalog()} className={cls.link}>
                  Каталог
               </Link>
               <Link to={getRouteAbout()} className={cls.link}>
                  О кампании
               </Link>
               <Link to={getRouteDelivery()} className={cls.link}>
                  Доставка и оплата
               </Link>
               <Link to={getRouteContacts()} className={cls.link}>
                  Контакты
               </Link>
               <Link to={getRouteQuestions()} className={cls.link}>
                  Вопрос-ответ
               </Link>
            </VStack>
            <VStack
               className={cls.sequrityInfo}
               align={FlexAlign.START}
               gap={20}
            >
               <Text
                  fontSize={FontSize.SIZE_11}
                  fontColor={FontColor.LIGHT_GREY}
               >
                  Любая информация, представленная на данном сайте, носит
                  исключительно информационный характер и ни при каких условиях
                  не является публичной офертой, определяемой положением статьи
                  437 ГК РФ. Отправляя сведения через любую электронную форму на
                  этом сайте, вы даёте согласие на обработку ваших персональных
                  данных.
               </Text>
               <Link to='#' className={cls.politics}>
                  Политика конфиденциальности
               </Link>
            </VStack>
         </HStack>
      </footer>
   );
});
