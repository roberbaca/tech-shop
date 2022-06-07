import React from 'react'
import '../../stylesheets/Product.css';
import '../../stylesheets/Style.css';
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";


const Product = () => {
  return (
    <div className='product__cardwraper'>
      <div className='product__card'>
        <div className='product__header'> 
          <div className="product__label">
            <p className="sale">-30%</p>
            <p className="new">NUEVO</p>
          </div>
          <AiFillHeart className='wishlist'/>
          {/* <AiOutlineEye/>       */}
        </div>
        <img src={require("../../assets/product01.png")} alt="product_img" className='product__img'/>
        <h2 className='product__category'>Categoria</h2>
        <h1 className='product__name'>Producto 01</h1>
        <h3 className='product__price'>$ 98.000</h3>

      </div>

      <div className="addtocart">
        <button className='addtocart__btn'>Comprar</button>
			</div>
      
    </div>
  )
}

export default Product