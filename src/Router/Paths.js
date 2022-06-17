import Auth from "../pages/Auth/Auth"
import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import Fav from "../pages/Fav/Fav"
import ProductDetails from "../pages/ProductDetails/ProductDetails"

export const PATHS = {
    
    // rutas que se puede acceder solo SI el usuario esta logueado
    private: [
        {
            path: '/user/cart',            
            element: <Cart/>,
            breadcrumb: 'Mi carrito'
        },
        
        {
            path: '/home',           
            element: <Home/>,
            breadcrumb: 'Inicio'
        },

        {
            path: '*',           
            element: <Home/>,
            breadcrumb: 'Inicio'
        },

        {
            path: '/auth',            
            element: <Auth/>,
            breadcrumb: 'Mi cuenta'
        },

        {
            path: '/product-details',           
            element: <ProductDetails/>,
            breadcrumb: 'Product Name goes here'
        },

        {
            path: '/user/whislist',           
            element: <Fav/>,
            breadcrumb: 'Favoritos'
        },
    ],

    
    // rutas a las que puede acceder el usuario que NO esta logueado
    noLoggedIn: [
        {
            path: '/auth',            
            element: <Auth/>,
            breadcrumb: 'Mi cuenta'
        },

        {
            path: '/home',           
            element: <Home/>,
            breadcrumb: 'Inicio'
        },

        {
            path: '/product-details',           
            element: <ProductDetails/>,
            breadcrumb: 'Product Name goes here'
        },

        {
            path: '*',           
            element: <Home/>,
            breadcrumb: 'Inicio'
        },

        {
            path: '/whislist',           
            element: <Fav/>,
            breadcrumb: 'Favoritos'
        },

    ],    
}