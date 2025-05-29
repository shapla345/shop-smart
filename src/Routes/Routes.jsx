import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layouts/Main";
import { Home } from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import { ProductDetails } from "../Pages/ProductDetails/ProductDetails";


export const router = createBrowserRouter([
   {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Registation></Registation>
        },
        {
          path:'/product/:id',
          element:<ProductDetails></ProductDetails>
        }
    ]
  },
]);