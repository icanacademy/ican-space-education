import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import ShopPage from '../pages/shop/page';
import ContactPage from '../pages/contact/page';
import CheckoutPage from '../pages/checkout/page';
import NotFound from '../pages/NotFound';
import RoadmapPage from '../pages/roadmap/page';
import AdminPage from '../pages/admin/page';
import BuilderPage from '../pages/builder/page';
import CurriculumPage from '../pages/curriculum/page';
import ProjectsPage from '../pages/projects/page';
import AboutPage from '../pages/about/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/curriculum',
    element: <CurriculumPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/roadmap',
    element: <RoadmapPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  },
  {
    path: '/builder',
    element: <BuilderPage />
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
