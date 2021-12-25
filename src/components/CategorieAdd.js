import React, {useState} from "react"
import PropTypes from 'prop-types'

export const CategorieAdd = ({setCategories}) => {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
    
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length !== 0 ){
      setCategories(cat => [text, ...cat])
      setText('')
    }
  }
  return (
   
      <form onSubmit={handleSubmit} >
        <input type="text" value={text} onChange={handleChange} placeholder="Search for Gifs"/>
        <button >Search</button>
      </form>
  
  )
}

CategorieAdd.protoTypes = {
    setCategories: PropTypes.func.isRequired
}