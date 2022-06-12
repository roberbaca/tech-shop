import React from 'react'
import '../../stylesheets/Product.css';
import '../../stylesheets/Style.css';
import { AiFillHeart, AiOutlineEye, AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom"

const Product = ( {imgURL, category, name, price} ) => {
  return (
    <div className='product__cardwraper'>
      <div className='product__card'>
        <div className='product__header'> 
          <div className="product__label">
            <p className="sale">-30%</p>
            <p className="new">NUEVO</p>
          </div>
          <AiFillHeart className='wishlist'/>    
        </div>
       
        <img src={imgURL} alt="product_img" className='product__img'/>
        <h2 className='product__category'>{category}</h2>
        <Link to ="/product-details" className='link'>
          <h1 className='product__name'>{name}</h1>
        </Link>
        <h3 className='product__price'>$ { ((Math.round( price *100 ) /100).toFixed(0))  }</h3>

      </div>

      <div className="addtocart">
        <button className='addtocart__btn'><AiFillShopping className='addtocart__icon'/>Comprar</button>
			</div>
      
    </div>
  )
}

export default Product