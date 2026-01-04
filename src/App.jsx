import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './frontendComponents/Home';
import Product from './frontendComponents/Product';
import ProductDetail from './frontendComponents/ProductDetail';
import Cart from './frontendComponents/Cart';
import Login from './frontendComponents/Login';
import Category from './frontendComponents/Category';
import useNotification from './frontendComponents/components/useNotification';
import Notification from './frontendComponents/components/Notification';
import ProductCard from './frontendComponents/components/ProductCard';

function App() {
   const { notification, showNotification } = useNotification();
 

  return (
    <>
    <Notification notification={notification} />
      <Routes>
       <Route path="/Shop-Swift" element={<Home showNotification={showNotification} />} />
        <Route path="/Product" element={<Product showNotification={showNotification} />} />
        <Route path="/ProductDetail" element={<ProductDetail showNotification={showNotification} />} />
        <Route path="/Category" element={<Category showNotification={showNotification} />} />
        <Route path="/Cart" element={<Cart showNotification={showNotification} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
