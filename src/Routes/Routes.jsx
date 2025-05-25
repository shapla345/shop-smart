import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layouts/Main";
import { Navbar } from "../Pages/Navbar/Navbar";


export const router = createBrowserRouter([
   {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Navbar></Navbar>
        }
    ]
  },
]);