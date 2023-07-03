import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home.js"
import Study from "./pages/Study.js"
import FindSpot from "./pages/FindSpot.js"
import LoadingPage from './pages/LoadingPage';
import WalkingPage from './pages/WalkingPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/study",
    element: <Study />
  },
  {
    path: "/findSpot",
    element: <FindSpot />
  },
  {
    path: "/loading",
    element: <LoadingPage />
  },
  {
    path: "/walking",
    element: <WalkingPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
