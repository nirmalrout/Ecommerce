import React from 'react'
import Header from './components/Header'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/home/Home'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Cart from './pages/cart/Cart'
import Product from './pages/product/Product'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
])



export default router;
