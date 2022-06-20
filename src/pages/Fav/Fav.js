import React from 'react'
import '../../stylesheets/Fav.css';
import '../../stylesheets/Style.css';
import { AiFillHeart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom"
import { PRODUCTS } from '../../data/data';

const Fav = () => {
  return (
    <section className='fav'>
        <h1 className='fav__title'>Mis Favoritos <AiFillHeart/></h1>
        <div className='fav__wraper'>
          <div className='fav__imgcontainer'>
            {/* <img src={productImages[0]} alt="" className='fav__img'/> */}
            <img src={PRODUCTS[0].productImages[0]} alt="" className='fav__img'/>
          </div>
          <div className='fav__namecontainer'>
            <Link to ="/product-details" className='link'>
              <h2 className='fav__name'>{PRODUCTS[0].name}</h2>
            </Link>
          </div>
          <div className='fav__pricecontainer'>           
              <h2 className='fav__price'>$ {PRODUCTS[0].currentPrice}</h2>           
          </div>     
          <button className='trashbtn'><BsTrash/></button>     
        </div>

        <div className='fav__wraper'>
          <div className='fav__imgcontainer'>
            <img src={PRODUCTS[1].productImages[0]} alt="" className='fav__img'/>
          </div>
          <div className='fav__namecontainer'>
            <Link to ="/product-details" className='link'>
              <h2 className='fav__name'>{PRODUCTS[1].name}</h2>
            </Link>
          </div>
          <div className='fav__pricecontainer'>            
              <h2 className='fav__price'>$ {PRODUCTS[1].currentPrice}</h2>            
          </div>          
          <button className='trashbtn'><BsTrash/></button>     
        </div>

        <div className='fav__wraper'>
          <div className='fav__imgcontainer'>
            <img src={PRODUCTS[2].productImages[0]} alt="" className='fav__img'/>
          </div>
          <div className='fav__namecontainer'>
            <Link to ="/product-details" className='link'>
              <h2 className='fav__name'>{PRODUCTS[2].name}</h2>
            </Link>
          </div>
          <div className='fav__pricecontainer'>
            <h2 className='fav__price'>$ {PRODUCTS[2].currentPrice}</h2>
          </div>          
          <button className='trashbtn'><BsTrash/></button>     
        </div>

    </section>
  )
}

export default Fav