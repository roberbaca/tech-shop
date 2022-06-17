import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import Cart from '../pages/Cart/Cart'
import Fav from '../pages/Fav/Fav'
import Store from '../pages/Store/Store'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import { PATHS } from './Paths'
import Breadcrumbs from '../components/Breadcrumb/Breadcrumb'
import useBreadcrumbs from 'use-react-router-breadcrumbs';

//import { useSelector } from 'react-redux'

const Router = () => {

  //const token = useSelector(store => store.user.token);
  const CustomPropsBreadcrumb = ({ someProp }) => (
    <span>{someProp}</span>
  );


  return (
    <div>
      <BrowserRouter>
      <Navbar/>  
      <Breadcrumbs />
        <Routes>          
            <Route path = "/" element = {<Home/>} ></Route>                   
            <Route path = "/auth" element = {<Auth/>}></Route>       
            <Route path = "/cart" element = {<Cart/>}></Route>
            <Route path = "/wishlist" element = {<Fav/>}></Route>
            <Route path = "/store" element = {<Store/>}></Route>
            <Route path = "/product-details" element = {<ProductDetails/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Router