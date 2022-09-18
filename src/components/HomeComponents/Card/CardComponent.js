import React from 'react'

function CardComponent(key, image, brand, model, price) {
  return (
    <div className='CardComponent-container'>
      <div className='CardComponent-wrapper'>
        <div className='CardComponent-image'>
          <img src={image}/>
        </div>
        <div className='CardComponent-info'>
          <div className='CardComponent-info__brand'>
          <span>{brand}</span>
          </div>
          <div className='CardComponent-info__model'>
          <span>{model}</span>
          </div>
          <div className='CardComponent-info__price'>
          <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent



