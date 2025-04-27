import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.tsx'
import ErrorPage from './Components/pages/404/ErrorPage.tsx'
import Home from './Components/pages/Home.tsx'
import ReactDOM from 'react-dom/client'
import AboutShop from './Components/pages/AboutShop.tsx'
import PaymentPage from './Components/common/Header/PaymentPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // <- This means when path = "/" load Home
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutShop />,
      },
      {
        path: "/paymentPage",
        element: <PaymentPage />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

