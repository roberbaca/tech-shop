import React from 'react'
import Product from '../../components/Product/Product';
import '../../stylesheets/Home.css';
import '../../stylesheets/Style.css';

const Home = () => {


	// esta lista debe venir de la DB
	const productList = [
		{
			imgURL: require("../../assets/product01.png"),
			name: "Producto 01",
			price:"198000",
			category: "computacion",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			stock: 1,
		},

		{
			imgURL: require("../../assets/product02.png"),
			name: "Producto 02",
			price:"35000",
			category: "computacion",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			stock: 1,
		},

		{
			imgURL: require("../../assets/product03.png"),
			name: "Producto 03",
			price:"236000",
			category: "computacion",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			stock: 1,
		},

		{
			imgURL: require("../../assets/product04.png"),
			name: "Producto 04",
			price:"95000",
			category: "computacion",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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



		<div className='product__container'>

		{productList.map( (p, index)  => 
		
			<Product imgURL = {p.imgURL} category ={p.category} name = {p.name} price={(p.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} key = {index}/>
		)} 
		


		</div>

    	<div class="slider">
			<div class="slide__track">
				<div class="slide">
					<img src={require("../../assets/marca-samsung.png")}height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marcaLiliana.png")} height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marcaPeabody.png")} height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marcaLongvie.png")}  height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marca-atma.png")}  height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marca-philips.png")} height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marcaNoblex.png")} height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marca-samsung.png")}height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marcaLiliana.png")} height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marcaPeabody.png")} height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marcaLongvie.png")}  height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marca-atma.png")}  height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marca-philips.png")} height="100" width="250" alt="" />
				</div>
				<div class="slide">
					<img src={require("../../assets/marcaNoblex.png")} height="100" width="250" alt="" />
				</div>
    		</div>
		</div>
    </div>
  )
}

export default Home