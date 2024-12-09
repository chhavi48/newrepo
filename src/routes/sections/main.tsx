import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';
import SimpleLayout from 'src/layouts/simple';
import CompactLayout from 'src/layouts/compact';

import { SplashScreen } from 'src/components/loading-screen';

import { JwtLoginView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------
export const HomePage = lazy(() => import('src/pages/home'));
const Page500 = lazy(() => import('src/pages/500'));
const Page403 = lazy(() => import('src/pages/403'));
const Page404 = lazy(() => import('src/pages/404'));
const FaqsPage = lazy(() => import('src/pages/faqs'));
const AboutPage = lazy(() => import('src/pages/about-us'));
const ContactPage = lazy(() => import('src/pages/contact-us'));
const PricingPage = lazy(() => import('src/pages/pricing'));
const PaymentPage = lazy(() => import('src/pages/payment'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
const MaintenancePage = lazy(() => import('src/pages/maintenance'));
// PRODUCT
const ProductListPage = lazy(() => import('src/pages/product/list'));
const ProductDetailsPage = lazy(() => import('src/pages/product/details'));
const ProductCheckoutPage = lazy(() => import('src/pages/product/checkout'));
// BLOG
const PostListPage = lazy(() => import('src/pages/post/list'));
const PostDetailsPage = lazy(() => import('src/pages/post/details'));
const PolicyPage = lazy(() => import('src/pages/privicyPolicy/index'));
const TermAndConditionPage = lazy(
  () => import('src/pages/termsAndCondition/TermAndConditionMainPage')
);
const OurMissionPage = lazy(() => import('src/pages/ourMission/OurMission'));
const AboutUsPage = lazy(() => import('src/pages/aboutUs/index'));
const OurVisionPage = lazy(() => import('src/pages/our-vision/index'));
// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { path: 'about-us', element: <AboutPage /> },
      { path: 'contact-us', element: <ContactPage /> },
      { path: 'faqs', element: <FaqsPage /> },
      {
        path: 'product',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'list', element: <ProductListPage /> },
          { path: ':id', element: <ProductDetailsPage /> },
          { path: 'checkout', element: <ProductCheckoutPage /> },
        ],
      },
      {
        path: 'post',
        children: [
          { element: <PostListPage />, index: true },
          { path: 'list', element: <PostListPage /> },
          { path: ':title', element: <PostDetailsPage /> },
        ],
      },
    ],
  },
  {
    element: (
      <SimpleLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </SimpleLayout>
    ),
    children: [
      { path: 'pricing', element: <PricingPage /> },
      { path: 'payment', element: <PaymentPage /> },
    ],
  },
  {
    element: (
      <CompactLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </CompactLayout>
    ),
    children: [
      { path: 'coming-soon', element: <ComingSoonPage /> },
      { path: 'maintenance', element: <MaintenancePage /> },
      { path: '500', element: <Page500 /> },
      { path: '404', element: <Page404 /> },
      { path: '403', element: <Page403 /> },
    ],
  },
  { path: 'privicy-policy', element: <PolicyPage /> },
  { path: 'term-and-condition', element: <TermAndConditionPage /> },
  { path: 'our-mission', element: <OurMissionPage /> },
  { path: 'about-us-page', element: <AboutUsPage /> },
  { path: 'our-vision', element: <OurVisionPage /> },
  { path: 'login-page', element: <JwtLoginView /> },
];
