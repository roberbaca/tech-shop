import React from 'react'
import Product from '../../components/Product/Product';
import { PRODUCTS } from '../../data/data';
import '../../stylesheets/Home.css';
import '../../stylesheets/Style.css';

const Home = () => {

  return (
    <div>
		{/* COVER SECTION */}
      	<img src={require("../../assets/hotdeal.png")} alt="hotdeal" className='hotdeal'/>

		<div className='banner__wraper'>
			<img src={require("../../assets/refIconosTarjetas.png")} alt="banner_img" className='banner'/>
			<img src={require("../../assets/refOfertas330.png")} alt="banner_img" className='banner'/>
			<img src={require("../../assets/refTituloDebCred330.png")} alt="banner_img" className='banner'/>
			<img src={require("../../assets/refEnvios330.png")} alt="banner_img" className='banner'/>
			<img src={require("../../assets/refCompraSegura330.png")} alt="banner_img" className='banner'/>
		</div>

		{/* SALES SECTION */}
		<section className='sales' id='sales__section'>			
			<h2 className='section__title'>¡Descuentos en productos seleccionados !</h2>
			<div className='salesdiscount__container'>			
					{ PRODUCTS.map( (p, index)  => 			
					p.onSale && <Product imgURL = {p.productImages[0]} category ={p.category} name = {p.name} price={p.currentPrice} key = {index} onSale = {p.onSale} discount = {p.discount} isNew = {p.isNew}/>
				)} 
			</div>
		</section>

		{/* BRANDS SECTION */}
		<section className='brands'>
			<h2 className='section__title'>Trabajamos con todas las marcas</h2>
			<div className="slider">
				<div className="slide__track">
					<div className="slide">
						<img src={require("../../assets/marca-samsung.png")}height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marcaLiliana.png")} height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marcaPeabody.png")} height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marcaLongvie.png")}  height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marca-atma.png")}  height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marca-philips.png")} height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marcaNoblex.png")} height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marca-samsung.png")}height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marcaLiliana.png")} height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marcaPeabody.png")} height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marcaLongvie.png")}  height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marca-atma.png")}  height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marca-philips.png")} height="100" width="250" alt="" />
					</div>
					<div className="slide">
						<img src={require("../../assets/marcaNoblex.png")} height="100" width="250" alt="" />
					</div>
				</div>
			</div>		
		</section>
		
    	
    </div>
  )
}

export default Home