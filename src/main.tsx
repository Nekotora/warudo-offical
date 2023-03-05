import React, { createRef } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import { IndexPage } from './pages';
import { ErrorPage } from './pages/error';
import { FaqPage } from './pages/faq';
import { PricingPage } from './pages/pricing';

import './i18n/i18n';

import './styles/normalize.scss';
import './styles/index.scss'

export const routes = [
  {
    path: "/",
    element: <IndexPage />,
    nodeRef: createRef()
  },
  {
    path: "/pricing",
    element: <PricingPage />,
    nodeRef: createRef()
  },
  {
    path: "/faq",
    element: <FaqPage />,
    nodeRef: createRef()
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
