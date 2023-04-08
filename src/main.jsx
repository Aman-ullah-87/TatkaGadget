import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/shop',
        element:<Shop />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router} />
  
)
