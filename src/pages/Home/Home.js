import React from 'react'
import '../../stylesheets/Home.css';
import '../../stylesheets/Style.css';

const Home = () => {
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


    	<div class="slider">
			<div class="slide-track">
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