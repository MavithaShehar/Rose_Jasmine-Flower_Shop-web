
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.tsx'
import ErrorPage from './Components/pages/404/ErrorPage.tsx'
import Home from './Components/pages/Home.tsx'
import AdminDashBordPosts from './Components/pages/AdminDashBordPosts.tsx'
import Poster from './Components/pages/Poster/poster.tsx'
import ReactDOM from 'react-dom/client'

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
        element: <AdminDashBordPosts />,
      },
      {
        path: "/poster",
        element: <Poster />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

