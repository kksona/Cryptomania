import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import TrendingPage from './Pages/TrendingPage';
import LoginPage from './Pages/LoginPage';
import SingleCoinPage from './Pages/SingleCoinPage';
import RegisterPage from './Pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trending",
    element: <TrendingPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/singleCoin",
    element: <SingleCoinPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router}/>
);
reportWebVitals();
