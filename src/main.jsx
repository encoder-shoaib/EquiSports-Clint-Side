import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './ErrorPage/ErrorPage ';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AllSportsEq from './components/AllSportsEq/AllSportsEq';
import AddEquipment from './components/AddEquipment/AddEquipment';
import MyEquipmentList from './components/MyEquipmentList/MyEquipmentList';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import FAQs from './components/FAQs/FAQs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch('http://localhost:5000/users'),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/allSportEq',
    element: <AllSportsEq></AllSportsEq>,
  },
  {
    path: '/add-equipment',
    element: <AddEquipment></AddEquipment>,
  },
  {
    path: '/my-equipment',
    element: <MyEquipmentList></MyEquipmentList>,
  },
  {
    path: '/aboutUs',
    element: <AboutUs></AboutUs>,
  },
  {
    path: '/blog',
    element: <Blog></Blog>,
  },
  {
    path: '/FAQs',
    element: <FAQs></FAQs>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
