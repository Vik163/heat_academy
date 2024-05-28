import { SidebarItemType } from '../types/sidebar';
import {
   getRouteAbout,
   getRouteCatalog,
   getRouteContacts,
   getRouteDelivery,
   getRouteServices,
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
         path: getRouteServices(),
         //  Icon: ProfileIcon,
         text: 'Услуги',
      },
      {
         path: getRouteAbout(),
         //  Icon: ArticleIcon,
         text: 'О компании',
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
