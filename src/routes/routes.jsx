import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";

const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            hydrateFallbackElement:<p>Loading, Please Wait....</p>,
            loader: () => fetch('../phones.json'),
        },
        {
          path: '/favorites',
          Component:Favorites,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
            path: '/phone-details/:id',
            element: <PhoneDetails></PhoneDetails>,
            hydrateFallbackElement:<p>Loading, Please Wait....</p>,
            loader: () => fetch('../phones.json'),
        },
      ],
    },
    
  ])

  export default router