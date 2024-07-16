import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../Main/Layout";
import WelcomePage from "../Pages/WelcomePage";
import LoginRegister from "../Pages/LoginRegister";
import UserHomePage from "../Pages/UserHomePage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <WelcomePage></WelcomePage>
        },
        {
          path: '/create-account',
          element: <LoginRegister></LoginRegister>
        },
        {
          path: '/userHomePage',
          element: <UserHomePage></UserHomePage>
        },
      ]
    },
  ]);