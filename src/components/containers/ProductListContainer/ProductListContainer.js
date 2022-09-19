import React from 'react';
import Header from '../../shared/Header/Header';
import './ProductListContainer.css'

function ProductListContainer() {
  return (
    <div className='ProductListContainer'>
        <Header/>
        <div className='ProductListContainer-Body'>
          <div className='ProductListContainer-searchBarWrapper'>
          </div>
        </div>
    </div >
  )
}

export default ProductListContainer