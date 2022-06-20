import React, { useState } from 'react'
import '../../stylesheets/Store.css';
import '../../stylesheets/Style.css';
import Product from '../../components/Product/Product';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom"
import { PRODUCTS } from '../../data/data';

const Store = () => {

  const [category, setCategory] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [page, setPage] = useState(1);
 

  const handleChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      // push selected value in list
      setCategory(prev => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setCategory(prev => prev.filter(x => x !== value));
    }
  } 
  
  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
    //console.log(minPrice);
  }

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
    //console.log(maxPrice);
  }

  const handlePriceFilter = () => {
    console.log("Min", minPrice);
    console.log("Max", maxPrice);
  }
 
  const nextPage = () => {   
    if (page < 15) {
      let newpage = page + 1;      
      setPage(newpage);       
      console.log("Next page");     
    }
    return;
  }

  const previousPage = () => {    
    if (page > 1) {   
      let newpage = page - 1;    
      setPage(newpage);      
      console.log("Previous page");      
    }   
    return;
  };    

  const categories = [
    { value: "Computacion", label: "Computacion" },
    { value: "Celulares", label: "Celulares" },
    { value: "Camaras", label: "Camaras" },
    { value: "Accesorios", label: "Accesorios" }
  ];

  const brands = [
    { value: "Motorola", label: "Motorola" },
    { value: "Samsung", label: "Samsung" },
    { value: "Lenovo", label: "Lenovo" },
    { value: "Toshiba", label: "Toshiba" }
  ];

  const discount = [
    { value: "10% off", label: "10% off" },
    { value: "20% off", label: "20% off" },
    { value: "30% off", label: "30% off" },
    { value: "40% off", label: "40% off" }
  ];

  return (
    <section className='store'>  
      <div className='store__wraper'>
        <div className='filter__wraper'>
          <h2>Categorias</h2>
          {categories.map((x, i) => <label key={i}>
            <input
              type="checkbox"
              name="categories"
              value={x.value}
              onChange={handleChange}
            /> {x.label}
          </label>)}

          <h2>Marcas</h2>
          {brands.map((x, i) => <label key={i}>
            <input
              type="checkbox"
              name="brands"
              value={x.value}
              onChange={handleChange}
            /> {x.label}
          </label>)}

          <h2>Descuento</h2>
          {discount.map((x, i) => <label key={i}>
            <input
              type="checkbox"
              name="discount"
              value={x.value}
              onChange={handleChange}
            /> {x.label}
          </label>)}

          <h2>Precio</h2>
          <div className='filter__price'>
            <input type="text" placeholder='Mínimo' className='minmax' onChange = {handleMinPrice}/>
            <p>-</p>           
            <input type="text" placeholder='Máximo' className='minmax' onChange = {handleMaxPrice}/>
            <IoIosArrowDroprightCircle className='price__icon' onClick={handlePriceFilter}/>
          </div> 
        
        </div>

        <div className='products__wraper'>
          <div className='salesdiscount__container'>         
            {PRODUCTS.map( (p, index)  => 			
              <Product imgURL = {p.productImages[0]} category ={p.category} name = {p.name} price={(p.currentPrice)} isNew = {p.isNew} discount={p.discount} onSale = {p.onSale} key = {index}/>
            )} 
          </div>
          <div>Selected: {category.length ? category.join(', ') : null}</div> 
        </div>
      </div>               

      <div className='store__pagination'>
        <div className='button__container'>
          <FiChevronLeft className='button__icon' onClick={previousPage}/>
        </div>
        <p className='page__number'>{page}</p>    
        <div className='button__container'>
          <FiChevronRight className='button__icon' onClick={nextPage}/>
        </div>
      </div>
       
    </section>
  )
}

export default Store