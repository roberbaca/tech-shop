import React from 'react'
import '../../stylesheets/Fav.css';
import '../../stylesheets/Style.css';
import { AiFillHeart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { productImages } from '../../data/data';
import { Link } from "react-router-dom"

const Fav = () => {
  return (
    <section className='fav'>
        <h1 className='fav__title'>Mis Favoritos <AiFillHeart/></h1>
        <div className='fav__wraper'>
          <div className='fav__imgcontainer'>
            <img src={productImages[0]} alt="" className='fav__img'/>
          </div>
          <div className='fav__namecontainer'>
            <Link to ="/product-details" className='link'>
              <h2 className='fav__name'>Producto 01</h2>
            </Link>
          </div>
          <div className='fav__pricecontainer'>           
              <h2 className='fav__price'>$ 100.99</h2>           
          </div>     
          <button className='trashbtn'><BsTrash/></button>     
        </div>

        <div className='fav__wraper'>
          <div className='fav__imgcontainer'>
            <img src={productImages[0]} alt="" className='fav__img'/>
          </div>
          <div className='fav__namecontainer'>
            <Link to ="/product-details" className='link'>
              <h2 className='fav__name'>Producto 01</h2>
            </Link>
          </div>
          <div className='fav__pricecontainer'>            
              <h2 className='fav__price'>$ 100.99</h2>            
          </div>          
          <button className='trashbtn'><BsTrash/></button>     
        </div>

        <div className='fav__wraper'>
          <div className='fav__imgcontainer'>
            <img src={productImages[0]} alt="" className='fav__img'/>
          </div>
          <div className='fav__namecontainer'>
            <Link to ="/product-details" className='link'>
              <h2 className='fav__name'>Producto 01</h2>
            </Link>
          </div>
          <div className='fav__pricecontainer'>
            <h2 className='fav__price'>$ 100.99</h2>
          </div>          
          <button className='trashbtn'><BsTrash/></button>     
        </div>

    </section>
  )
}

export default Fav