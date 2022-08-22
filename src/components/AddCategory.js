import React, { useState } from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {

  // hook
  const [inputValue, setInputValue] = useState('');

  // funcion manejadora de los cambios del input
  const handleInputChange= (e)=>{
    setInputValue(e.target.value);
  }

  // función manejadora del submit
  const handdleSubmit=(e)=>{
    e.preventDefault();

    if(inputValue.trim().length> 2){

    setCategories(categories=>[inputValue,...categories]);
    setInputValue('');

    }
  }

  return (
    <>
    <p>Search your gif 👇</p>
      <form onSubmit={ handdleSubmit}>
        <input  
            type='text'
            placeholder='Search'
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
        </>
  )
}

AddCategory.propTypes={
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
