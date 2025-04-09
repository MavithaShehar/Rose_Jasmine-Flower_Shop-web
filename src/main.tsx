
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.tsx'
import ErrorPage from './Components/pages/404/ErrorPage.tsx'
import Home from './Components/pages/Home.tsx'
import AdminDashBordPosts from './Components/pages/AdminDashBordPosts.tsx'
import AdminProdactSection from './Components/pages/AdminProdactSection.tsx'
import ReactDOM from 'react-dom/client'
import AdminOrderSection from './Components/pages/AdminOrderSection.tsx'
import AdminDashboard from './Components/pages/AdminDashboard.tsx'
import PaymentPage from './Components/common/Header/PaymentPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/poster",
        element: <AdminDashBordPosts />,
      },
      {
        path: "/products",
        element: <AdminProdactSection />,
      },
      {
        path: "/orders",
        element: <AdminOrderSection />,
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

