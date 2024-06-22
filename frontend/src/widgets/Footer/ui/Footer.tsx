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
import { Logo } from '@/shared/ui/Logo';

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
               <Logo className={cls.logo} />
               <p className={cls.textInfo}>
                  Самарская область, г. Новокуйбышевск, <br />
                  ул. Молодогвардейская, д. 4
                  <br /> email: &nbsp;
                  <a href='#' className={cls.post}>
                     werwe@sjdf.dy
                  </a>
                  <br />
                  тел. +7 (846) 354-66-30
               </p>
               <p className={cls.textInfo}>
                  Работаем:
                  <br /> Понедельник - Пятница - с 8.30-18.30, <br />
                  Суббота - с 8.30-17.00,
                  <br /> Воскресенье - с 8.30-14.00
               </p>
               <p className={cls.textInfo}>Посещение склада по договорённости</p>
               <p className={cls.textInfo}>{year} © ТМ «ЗЕМЛЯК». Все права защищены.</p>
            </div>
            <VStack className={cls.links} align={FlexAlign.START} justify={FlexJustify.START} gap={15}>
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
            <VStack className={cls.sequrityInfo} align={FlexAlign.START} gap={20}>
               <Text fontSize={FontSize.SIZE_11} fontColor={FontColor.LIGHT_GREY}>
                  Любая информация, представленная на данном сайте, носит исключительно информационный
                  характер и ни при каких условиях не является публичной офертой, определяемой положением
                  статьи 437 ГК РФ. Отправляя сведения через любую электронную форму на этом сайте, вы даёте
                  согласие на обработку ваших персональных данных.
               </Text>
               <Link to='#' className={cls.politics}>
                  Политика конфиденциальности
               </Link>
            </VStack>
         </HStack>
      </footer>
   );
});
