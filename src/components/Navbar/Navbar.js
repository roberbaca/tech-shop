import React from 'react'
import '../../stylesheets/Navbar.css';
import '../../stylesheets/Style.css';
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar__wraper'>
        <nav className='navbar__top'>
            <div className='navbar__sitelogo'>
            <Link to ="/" className='sitelogo__link'>
                <img src={require("../../assets/storeLogo.png")} alt="logo" className='sitelogo'/>
            </Link>  
            </div>
            <div className='navbar__searchbar'>
                <select name="" id="" className='searchbar__select'>
                    <option value="0">Todas las categorias</option>
                    <option value="1">Categoria 01</option>
                    <option value="1">Categoria 02</option>
                </select>
                <input type="text" className='searchbar__input' placeholder='Buscar'/>
                <button className='searchbar__button'>Buscar</button>
            </div>
            <div className='navbar__user'>

                {/* HOME ICON */}
                <div className='user__iconcontainer'>
                    <Link to ="/" className='user__link'>
                        <AiFillHome className='user__icon'/>
                        <h4 className='user__icon--title'>Inicio</h4>
                    </Link>                      
                </div>


                {/* WISHLIST CART ICON */}
                <div className='user__iconcontainer'>
                    <Link to ="/wishlist" className='user__link'>
                        <FaRegHeart className='user__icon'/>
                        <h4 className='user__icon--title'>Favoritos</h4>
                        <p className="qty">5</p>
                    </Link>                      
                </div>

                {/* SHOPPING CART ICON */}
                <div className='user__iconcontainer'>   
                    <Link to ="/cart" className='user__link'>
                        <FaShoppingCart className='user__icon'/>
                        <h4 className='user__icon--title'>Mi Carrito</h4>
                        <p className="qty">5</p>
                    </Link>                                      
                </div>

                {/* USER ICON */}
                <div className='user__iconcontainer'>
                    <Link to ="/auth" className='user__link'>
                        <BiUser className='user__icon'/>
                        <h4 className='user__icon--title'>Mi Cuenta</h4>
                    </Link>  
                </div>
            </div>
        </nav>

        <nav className='navbar__bottom'>
            <p className='navbar__filter'>Inicio</p>
            <p className='navbar__filter'>Ofertas</p>
            <p className='navbar__filter'>Laptops</p>
            <p className='navbar__filter'>Smartphones</p>
            <p className='navbar__filter'>Accesorios</p>
        </nav>


    </div>
  )
}

export default Navbar