import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import Home from './Components/Home.jsx';
import RootLayout from './Components/RootLayout.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      
    <Route
      path="/"
      element={<Home />}
    >
      </Route>
      <Route path="/login" element={<Login/>}></Route>,
      <Route path="/registration" element={<Signup/>}></Route>,
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
