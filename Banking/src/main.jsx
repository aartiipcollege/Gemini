import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CreatAcc from './CreatAcc.jsx'
import DashedBoard from './DashedBoard.jsx'
import Withdraw from './Withdraw.jsx'
import Deposite from './Deposite.jsx'
import Tranfer from './Tranfer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let appRouter = createBrowserRouter([
  {
  path: '/',
  element: <App/>
  },
  {
    path: '/dashed',
    element: <DashedBoard/>
    },
    {
      path: '/create',
      element: <CreatAcc/>
    },
    {
      path: '/withdraw',
      element: <Withdraw/>
    },
    {
      path: '/deposite',
      element: <Deposite/>
    },
    {
      path: '/transfer',
      element: <Tranfer/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
)
