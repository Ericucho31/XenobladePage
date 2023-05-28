import React from 'react'
import '../stylesheets/character.css'

export default function Character({image,name,class_logo,class_name,description}) {
  
  return (
    <div className='div'>
        <img src={image} alt={name} className="character"/>
        <div className='textbox'>
          <h1>{name}</h1>
          <div className='class'>
            <img src={class_logo} className='class-logo'/>
            <p>{class_name}</p>
          </div>

          <div className='description'>
            <p>{description}</p>
          </div>
          
        </div>
    </div>

  )
}
