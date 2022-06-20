import React, { useState } from 'react';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';
import ImageMagnifier from '../../components/ImageMagnifier/ImageMagnifier';
import '../../stylesheets/ProductDetails.css';
import '../../stylesheets/Style.css';
import { PRODUCTS } from '../../data/data';

const ProductDetails = () => {
	
	const [mainImg, setMainImg] = useState(PRODUCTS[1].productImages[0]);
  	const [amount, setAmount] = useState(0);

  	const increaseAmount = (amount) => {
		setAmount(amount + 1);
		if (amount >= PRODUCTS[1].stock) {
			setAmount(PRODUCTS[1].stock);
		}
  	};
 	 const decreaseAmount = (amount) => {
		setAmount(amount - 1);
		if (amount <= 0) {
			setAmount(0);
		}
  	};

  return (

	<section className='productdetails'>

		<div className='gallery'>
			<div className='thumbnails__wraper'>
				{PRODUCTS[1].productImages.map((image, index) => {
					return (
						<div className={ image === mainImg ? 'thumbnails__container-active thumbnails__container' : 'thumbnails__container'} key={index} onClick={() => setMainImg(PRODUCTS[1].productImages[index])}>
					<img src={image} alt='small-product' className='thumbnails__images'/>
					</div>
				);
				})}
			</div>			
	
			<ImageMagnifier className='mainimg' src={mainImg} width={"25rem"} magnifierHeight ={"75"} magnifieWidth = {"75"} zoomLevel = {"2"}/>
		</div>

		<div className='product__wraper'>      
			<h2 className='product__category'>{PRODUCTS[1].category}</h2>
			<div className='product__header'>
				<h1 className='product__title'>{PRODUCTS[1].name}</h1>
				{PRODUCTS[1].onSale && <h3 className='product__sale'>-{PRODUCTS[1].discount}%</h3>}
			</div>
			
			<div className='price__container'>				
				<h2 className='price__current'>${PRODUCTS[1].currentPrice}</h2>
				<h2 className='price__discount'>${PRODUCTS[1].oldPrice}</h2>			
			</div>

			<p className='product__description'>{PRODUCTS[1].description}</p>

			<div className='addtocart__container'>
				<button className='quantity__btn'>
					<span className='quantity__icon' onClick={() => decreaseAmount(amount)}><FaMinus/></span>
					<span className='quantity__number'>{amount}</span>
					<span className='quantity__icon' onClick={() => increaseAmount(amount)}><FaPlus/></span>
				</button>
				{PRODUCTS[1].stock > 0 && <button className='addtocart__btn'><AiOutlineShoppingCart className='addtocart__icon'/>
					<span>Comprar</span>
				</button>}
				{PRODUCTS[1].stock <= 0 && <button className='addtocart__btn-soldout'><AiOutlineShoppingCart className='addtocart__icon'/>
					<span>AGOTADO</span>
				</button>}
			</div>
		</div>

	</section>
  );
}

export default ProductDetails;