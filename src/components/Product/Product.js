import React from 'react'
import '../../stylesheets/Product.css';
import '../../stylesheets/Style.css';
import { AiFillHeart, AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom"

const Product = ( {imgURL, category, name, price, onSale, discount, isNew} ) => {

  const handleToggle = () => {
    console.log("click " + name);
  }

  return (
    <div className='product__cardwraper' onClick={handleToggle}>
      
      <div className='product__card'>
        <Link to ="/product-details" className='link'>
          <div className='product__header'> 
            <div className="product__label">
              {onSale && <p className="sale">-{discount}%</p>}
              {isNew && <p className="new">NUEVO</p>}
            </div>
            <AiFillHeart className='wishlisticon'/>    
          </div>
        
          <img src={imgURL} alt="product_img" className='product__img'/>
          <h2 className='product__category'>{category}</h2>
          <h1 className='product__name'>{name}</h1>
          <h3 className='product__price'>$ { ((Math.round( price *100 ) /100).toFixed(0))  }</h3>
        </Link>
      </div>

      <div className="addtocart">
        <button className='addtocart__btn'><AiFillShopping className='addtocart__icon'/>Comprar</button>
			</div>
      
    </div>
  )
}

export default Product