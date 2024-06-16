import { SidebarItemType } from '../types/sidebar';
import {
   getRouteAbout,
   getRouteArrangementWells,
   getRouteCatalog,
   getRouteContacts,
   getRouteDelivery,
   getRouteMontageCaisson,
   getRouteResultsSAWC,
} from '@/shared/const/router';

// 8_2
export const useSidebarItems = () => {
   // 16_18 7min
   const sidebarItemsList: SidebarItemType[] = [
      {
         path: getRouteCatalog(),
         //  Icon: AboutIcon,
         text: 'Каталог',
      },
      {
         text: 'Услуги',
         addItems: [
            {
               path: getRouteMontageCaisson(),
               //  Icon: ArticleIcon,
               text: 'Монтаж кессона',
            },
            {
               path: getRouteArrangementWells(),
               //  Icon: ArticleIcon,
               text: 'Обустройство скважин',
            },
         ],
      },
      {
         //  Icon: ArticleIcon,
         text: 'О компании',
         addItems: [
            {
               path: getRouteAbout(),
               //  Icon: ArticleIcon,
               text: 'О компании',
            },
            {
               path: getRouteResultsSAWC(),
               //  Icon: ArticleIcon,
               text: 'Результаты СОУТ',
            },
         ],
      },
      {
         path: getRouteDelivery(),
         //  Icon: ArticleIcon,
         text: 'Доставка и оплата',
      },
      {
         path: getRouteContacts(),
         //  Icon: ArticleIcon,
         text: 'Контакты',
      },
   ];

   return sidebarItemsList;
};
