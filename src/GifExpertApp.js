import React, { useState } from 'react'
import { CategorieAdd } from './components/CategorieAdd'
import { GifResults } from './components/GifResults'

export const GifExpertApp = ({ defaultCategories=[] }) => {
  const [categories, setCategories] = useState(defaultCategories)

  return (
    <div className='main'>
      <h2> Gifs App <span>🧐</span></h2>
      <CategorieAdd setCategories={ setCategories }></CategorieAdd>
      {categories.map((category) => (
        <GifResults category={ category } key={ category } />
      ))}
      <div className='footer'><a href='https://github.com/Maluzzz/'>Maluzzz ♥</a></div>
    </div>
  )
}
