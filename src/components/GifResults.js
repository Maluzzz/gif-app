import React  from 'react'
import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks/useFetchGifs'
import GifItem from './GifItem'



export const GifResults = ({category}) => {

  const {data: imgs,loading} = useFetchGifs(category)


  return (
    <>
      <h3>{category}</h3>
      {loading && <p>'Cargando'</p>}
      <div className='card-container'>
        {imgs.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

GifResults.propTypes= {
  category: PropTypes.string.isRequired
}
