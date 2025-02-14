import React from 'react'
import "./Card.css"

const Card = ({imageUrl,title,subTitle}) => {
  return (
    <div className='app__card'>
        <img src={imageUrl} alt="image" />
        <h1 style={{margin: "1rem 0"}} className='p__cormorant'>{title}</h1>
        <p className='p__opensans'>{subTitle}</p>
    </div>
  )
}

export default Card