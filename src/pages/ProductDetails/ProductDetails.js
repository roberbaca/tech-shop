import React from 'react'
import '../../stylesheets/ProductDetails.css';
import '../../stylesheets/Style.css';

const ProductDetails = () => {
  return (
    <div>
      
					<div className='thumbnails'>
						<div id="product-imgs">
							<div className="product-preview">
								<img src="./img/product01.png" alt=""/>
							</div>

							<div className="product-preview">
								<img src="./img/product03.png" alt=""/>
							</div>

							<div className="product-preview">
								<img src="./img/product06.png" alt=""/>
							</div>

							<div className="product-preview">
								<img src="./img/product08.png" alt=""/>
							</div>
						</div>
					</div>
		
    </div>
  )
}

export default ProductDetails