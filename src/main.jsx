import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './pages/Home';

import Cards from './components/Cards/Cards';
import Donation from './pages/Donation';
import Statistics from './pages/Statistics';
import Details from './pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home> ,
        loader: () => fetch(`/donation_info.json`)
      },
      {
        path: '/Donation',
        element: <Donation></Donation>,
      },
      {
        path: '/Statistics',
      element: <Statistics></Statistics>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: () => fetch(`/donation_info.json`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
