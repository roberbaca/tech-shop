import React, { useState } from 'react';
import { productImages } from '../../data/data';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';
import ImageMagnifier from '../../components/ImageMagnifier/ImageMagnifier';
import '../../stylesheets/ProductDetails.css';
import '../../stylesheets/Style.css';

const ProductDetails = () => {

	const [mainImg, setMainImg] = useState(productImages[0]);
  	const [amount, setAmount] = useState(0);

  	const increaseAmount = (amount) => {
		setAmount(amount + 1);
		if (amount >= 10) {
			setAmount(10);
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
				{productImages.map((image, index) => {
					return (
						<div className={ image === mainImg ? 'thumbnails__container-active thumbnails__container' : 'thumbnails__container'} key={index} onClick={() => setMainImg(productImages[index])}>
					<img src={image} alt='small-product' className='thumbnails__images'/>
					</div>
				);
				})}
			</div>
			
			{/* <img src={mainImg} alt='product' className='mainimg'/> */}
			{/* <ImageMagnifier className='mainimg' src={mainImg} width = {"2rem"} height ={"2rem"} magnifierHeight ={"100"} magnifieWidth = {"100"} zoomLevel = {"1.5"}/> */}
			<ImageMagnifier className='mainimg' src={mainImg} width={"25rem"} magnifierHeight ={"75"} magnifieWidth = {"75"} zoomLevel = {"2"}/>
		</div>

		<div className='product__wraper'>      
			<h2 className='product__category'>Computacion</h2>
			<div className='product__header'>
				<h1 className='product__title'>PRODUCTO 01</h1>
				<h3 className='product__sale'>-50%</h3>
			</div>
			
			<div className='price__container'>				
				<h2 className='price__current'>$125.00</h2>
				<h2 className='price__discount'>$250.00</h2>			
			</div>

			<p className='product__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis rem aliquam, corporis explicabo animi. 
			Esse aliquam maxime ipsa tenetur natus dicta pariatur odit ipsum consequuntur, consectetur, alias facilis reprehenderit!
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi asperiores labore saepe qui blanditiis, vero commodi ad iusto quas? Ipsum totam exercitationem
			quaerat beatae iusto suscipit dolores voluptate, deleniti repudiandae.
			</p>

			<div className='addtocart__container'>
				<button className='quantity__btn'>
					<span className='quantity__icon' onClick={() => decreaseAmount(amount)}><FaMinus/></span>
					<span className='quantity__number'>{amount}</span>
					<span className='quantity__icon' onClick={() => increaseAmount(amount)}><FaPlus/></span>
				</button>
				<button className='addtocart__btn'><AiOutlineShoppingCart className='addtocart__icon'/>
					<span>Comprar</span>
				</button>
			</div>
		</div>

	</section>
  );
}

export default ProductDetails;