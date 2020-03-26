import HomePage from '../views/pages/public/home';
import CartPage from '../views/pages/public/cart';
import PublicLayout from '../views/layouts/public';

const PublicRoutes = [
  {
    path: "/",
    component: PublicLayout,
    routes: [
      {
        path: "/welcome",
        component: HomePage
      },
      {
        path: "/cart",
        component: CartPage,
      }
    ]
  }
];

export default PublicRoutes;