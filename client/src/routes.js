import Admin from "./pages/Admin";
import {
  ADMIN_ROUTE,
  CAR_ROUTE,
  CATALOG_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAIN_ROUTE,
  CONTACTS_ROUTE,
} from "./utils/consts";
import Catalog from "./pages/Catalog";
import Auth from "./pages/Auth";
import CarPage from "./pages/CarPage";
import MainPage from "./pages/Main";
import Contacts from "./pages/Contacts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
  {
    path: CATALOG_ROUTE,
    Component: Catalog,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: CAR_ROUTE + "/:id",
    Component: CarPage,
  },
];
