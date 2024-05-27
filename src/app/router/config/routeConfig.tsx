import { AboutPage } from '@/pages/AboutPage';
import { CatalogPage } from '@/pages/CatalogPage';
import { ContactsPage } from '@/pages/ContactsPage';
import { DeliveryPage } from '@/pages/DeliveryPage';
import { MainPage } from '@/pages/MainPage';
import { ServicesPage } from '@/pages/ServicesPage';
import {
   AppRoutes,
   getRouteMain,
   getRouteCatalog,
   getRouteDelivery,
   getRouteAbout,
   getRouteServices,
   getRouteContacts,
} from '@/shared/const/router';
import { type AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
   [AppRoutes.MAIN]: {
      path: getRouteMain(),
      element: <MainPage />,
   },
   [AppRoutes.CATALOG]: {
      path: getRouteCatalog(),
      element: <CatalogPage />,
   },
   [AppRoutes.DELIVERY]: {
      path: getRouteDelivery(),
      element: <DeliveryPage />,
   },
   [AppRoutes.ABOUT]: {
      path: getRouteAbout(),
      element: <AboutPage />,
   },
   [AppRoutes.SERVICES]: {
      path: getRouteServices(),
      element: <ServicesPage />,
   },
   [AppRoutes.CONTACTS]: {
      path: getRouteContacts(),
      element: <ContactsPage />,
   },
   // [AppRoutes.ACTIONS]: {
   //    path: getRouteActions(),
   //    element: <ActionsPage />,
   // },
   // [AppRoutes.CONTACTS]: {
   //    path: getRouteContacts(),
   //    element: <ContactsPage />,
   // },
   // [AppRoutes.PROFILE]: {
   //    path: getRouteProfile(':id'),
   //    element: <ProfilePage />,
   // },
   // [AppRoutes.BASKET]: {
   //    path: getRouteBasket(),
   //    element: <BasketPage />,
   // },
   // [AppRoutes.ORDER]: {
   //    path: getRouteOrder(),
   //    element: <OrderPage />,
   // },
   // [AppRoutes.NOT_FOUND]: {
   //    path: getRouteNotFound(),
   //    element: <NotFoundPage />,
   // },
};
