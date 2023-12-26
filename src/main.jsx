import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Component/Layout/HomeLayout.jsx';
import Shop from './Component/Shop/Shop.jsx';
import Orders from './Component/Orders/Orders.jsx';
import Inventory from './Component/Inventory/Inventory.jsx';
import Login from './Component/Login/Login.jsx';
import cartProductLoader from './Loader/CartProductLoader.js';
import Checkout from './Component/Checkout/Checkout.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout></HomeLayout>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'order',
        element:<Orders></Orders>,
        loader: cartProductLoader
        
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
      path:'login',
      element:<Login></Login>
      },
      {
        path:'checkout',
        element:<Checkout></Checkout>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
