import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../Main/Layout";
import WelcomePage from "../Pages/WelcomePage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <WelcomePage></WelcomePage>
        }
      ]
    },
  ]);