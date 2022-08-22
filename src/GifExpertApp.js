import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['']);


  return (
    <div>
      <h2 className='title'>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}/>
      
      <ol>
        {
          categories.map(category=>
            <GifGrid
            key={category} 
            category={category} 
            />
          )
        }
      </ol>
    </div>
  )
}

export default GifExpertApp
