export enum AppRoutes {
   CATALOG = 'catalog',
   PRODUCT = 'product',
   CELLARS = 'cellars',
   ABOUT = 'about',
   SERVICES = 'services',
   DELIVERY = 'delivery',
   QUESTIONS = 'questions',
   // ACTIONS = 'actions',
   CONTACTS = 'contacts',
   // BASKET = 'basket',
   // ORDER = 'order',
   //    FORBIDDEN = 'forbidden',
   MAIN = 'main',

   //    // last
   // NOT_FOUND = 'not_found',
}

export const RoutePath = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.CONTACTS]: '/contacts',
   // [AppRoutes.ACTIONS]: '/actions',
   [AppRoutes.ABOUT]: '/about',
   [AppRoutes.DELIVERY]: '/delivery',
   [AppRoutes.CATALOG]: '/catalog',
   [AppRoutes.SERVICES]: '/services',
   [AppRoutes.PRODUCT]: '/product',
   [AppRoutes.CELLARS]: '/cellars',
   [AppRoutes.QUESTIONS]: '/questions',

   // [AppRoutes.BASKET]: '/basket',
   // [AppRoutes.ORDER]: '/order',

   // последний
   // [AppRoutes.NOT_FOUND]: '*',
};

// 13_15
export const getRouteMain = () => '/';
export const getRouteContacts = () => '/contacts';
export const getRouteActions = () => '/actions';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteCatalog = () => '/catalog';
export const getRouteServices = () => '/services';
export const getRouteAbout = () => '/about';
export const getRouteDelivery = () => '/delivery';
export const getRouteBasket = () => '/basket';
export const getRouteOrder = () => '/order';
export const getRouteProduct = (id?: string) => `/product/${id}`;
export const getRouteCellars = () => '/cellars';
export const getRouteQuestions = () => '/questions';
// export const getRouteAdmin = () => '/admin';
// export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';

// 16_21 6min
export const AppRouteByPathPattern: Record<string, AppRoutes> = {
   [getRouteMain()]: AppRoutes.MAIN,
   [getRouteContacts()]: AppRoutes.CONTACTS,
   // [getRouteActions()]: AppRoutes.ACTIONS,
   // [getRouteProfile(':id')]: AppRoutes.PROFILE,
   [getRouteCatalog()]: AppRoutes.CATALOG,
   [getRouteServices()]: AppRoutes.SERVICES,
   [getRouteAbout()]: AppRoutes.ABOUT,
   [getRouteDelivery()]: AppRoutes.DELIVERY,
   [getRouteProduct()]: AppRoutes.PRODUCT,
   [getRouteCellars()]: AppRoutes.CELLARS,
   [getRouteQuestions()]: AppRoutes.QUESTIONS,
   // [getRouteBasket()]: AppRoutes.BASKET,
   // [getRouteOrder()]: AppRoutes.ORDER,
   //    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
   //    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
   // [getRouteNotFound()]: AppRoutes.NOT_FOUND,
};
