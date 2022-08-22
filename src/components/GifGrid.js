import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//{ useState, useEffect } 

import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {
  
  const {data:images , loading}= useFetchGifs(category);


  return (
    <>
    <p className='category_name'>{category.toUpperCase()}</p>

    {loading && <p className='animate__animated animate__flash'>Loading...</p>}

    <div className='card-grid animate__animated animate__fadeIn'>
      
        {
          images.map(img=> (
            <GifGridItem 
            key={img.id}
            // Mandamos cada una de las propiedades de forma independiente
            {...img} />
          ))
        }

    </div>
    </>
  )
}

export default GifGrid
