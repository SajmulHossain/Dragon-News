import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import NewsLayout from '../components/NewsLayout';
import AuthLayout from '../pages/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetails from '../components/NewsDetails';
import PrivetRoute from './PrivetRoute';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navigate to="category/01" />,
      },
      {
        path: "category/:id",
        element: <NewsLayout />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news/:id",
    element: <PrivetRoute>
      <NewsDetails />
    </PrivetRoute>,
    loader: ({ params }) =>
      fetch(
        `https://openapi.programming-hero.com/api/news/${params.id}`
      ),
  },
]);

export default Router;