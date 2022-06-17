import React from 'react'
import '../../stylesheets/Footer.css';
import '../../stylesheets/Style.css';
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='footer__main'>
        <div className='footer__aboutcontainer'>
          <h4 className='footer__title'>Institucional</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nihil! Perferendis aperiam iusto, molestias quis expedita cupiditate in accusamus, at omnis ad eum veniam, nobis fugiat nostrum vero officiis perspiciatis?</p>
          <div className='footer__iconcontainer'>
            <p className='icon'><MdLocationPin/></p>
            <p>Avenida Siempreviva 123</p>
          </div>    
          <div className='footer__iconcontainer'>
            <p className='icon'><BsTelephoneFill/></p>
            <p>011-34-56-78</p>
          </div>   
          <div className='footer__iconcontainer'>
            <p className='icon'><AiOutlineMail/></p>
            <p>email@mail.com</p>
          </div>   
        </div>

        <div className='footer__categoriescontainer'>
          <h4 className='footer__title'>Categorias</h4>
          <div>
            <p>Hot deals</p>
            <p>Laptops</p>
            <p>Smartphones</p>
            <p>Camaras</p>
            <p>Accesorios</p>
          </div>
        </div>

        <div className='footer__informationcontainer'>
          <h4 className='footer__title'>Informacion</h4>
          <div>
            <p>Quienes Somos?</p>
            <p>Contacto</p>
            <p>Preguntas Frecuentes</p>
            <p>Politica de Privacidad</p>
            <p>Cambios y Devoluciones</p>
            <p>Terminos y Condiciones</p>
          </div>
        </div>

        <div className='footer__servicecontainer'>
          <h4 className='footer__title'>Servicios</h4>
          <div>
            <p>Mi Cuenta</p>
            <p>Mis compras</p>
            <p>Favoritos</p>
            <p>Ayuda</p>
          </div>
        </div>
      </div>

      <div className='footer__bottom'>
        <div className='footer__info'>
          <p className='copyright'>© 2022 Todos los derechos reservados</p>          
        </div>
        <div className='footer__author'>
            <a className='link' href="https://robertobaca-90035.web.app/" target="_blank" rel="noopener noreferrer">
              <img src={require("../../assets/rnbGamesCubeLogoinv2.png")} alt="myLogo" className='rnblogo'/>
            </a>          
        </div>  
      </div>
    </footer>
  )
}

export default Footer