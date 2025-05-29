import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
//import {AuthProvider} from './providers/AuthProvider';

// export default function Main({children}: {children: React.ReactNode}){
// return <>{children}</>;
// }
// '

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
     </div> */}

     
      <AuthProvider className='max-w-screen-xl mx-auto '>
      <RouterProvider router={router} />
     </AuthProvider>
     
     
       

  </StrictMode>,
)
