import React from 'react'
import Product from '../../components/Product/Product';
import '../../stylesheets/Home.css';
import '../../stylesheets/Style.css';
//import { Link } from "react-router-dom"

const Home = () => {


	// esta lista debe venir de la DB
	const productList = [
		{
			imgURL: require("../../assets/product01.png"),
			name: "Producto 01",
			price:"198000",
			category: "computacion",
			stock: 1,
		},

		{
			imgURL: require("../../assets/product02.png"),
			name: "Producto 02",
			price:"35000",
			category: "computacion",
			stock: 1,
		},

		{
			imgURL: require("../../assets/product03.png"),
			name: "Producto 03",
			price:"236000",
			category: "computacion",
			stock: 1,
		},

		{
			imgURL: require("../../assets/product04.png"),
			name: "Producto 04",
			price:"95000",
			category: "computacion",
			stock: 1,
		}
	]


  return (
    <div>
      	<img src={require("../../assets/hotdeal.png")} alt="hotdeal" className='hotdeal'/>

		<div className='banner__wraper'>
			<img src={require("../../assets/refIconosTarjetas.png")} alt="banner_img" className='banner'/>
			<img src={require("../../assets/refOfertas330.png")} alt="banner_img" className='banner'/>
			<img src={require("../../assets/refTituloDebCred330.png")} alt="banner_img" className='banner'/>
			<img src={require("../../assets/refEnvios330.png")} alt="banner_img" className='banner'/>
			<img src={require("../../assets/refCompraSegura330.png")} alt="banner_img" className='banner'/>
		</div>



		<h2 className='home__title'>¡Descuentos en productos seleccionados !</h2>
		<div className='product__container'>
			{productList.map( (p, index)  => 			
				<Product imgURL = {p.imgURL} category ={p.category} name = {p.name} price={(p.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} key = {index}/>
			)} 
		</div>

		<h2 className='home__title'>Trabajamos con todas las marcas</h2>

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
    </div>
  )
}

export default Home