import React, {useContext, useEffect, useState} from 'react';
import './ProductListContainer.css';

import { Context as ProductsContext} from "../../../context/productsContext";
import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";
import Header from '../../shared/Header/Header';
import ShoppingCart from '../../shared/ShoppingCart/ShoppingCart';


function ProductListContainer() {
  const { state: productState} = useContext(ProductsContext)
  const { state: productDetailsState, getProductId } = useContext(ProductDetailsContext)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        await getProductId(productDetailsState.actualProductId)
        setIsLoading(false)
      }
      fetchData()
    }
    if (!productDetailsState) {
      setIsLoading(true)
    }
    }, [isLoading])
  const item = productDetailsState.productId
  const storage = item.internalMemory
  const colors = item.colors
    
    return (
      <div className='ProductListContainer'>
        <Header/>
        <div className='ProductListContainer-body'>
          <div className='ProductListContainer-bodyWrapper'>
            <div className='ProductListContainer-phoneImage'>
              <img src={item.imgUrl}/>
            </div>
            <div className='ProductListContainer-infoWrapper'>
              <div className='ProductListContainer-infoDescription'>
                <ol>
                  { item.brand ? <ol>Marca: {item.brand}</ol> : null }
                  { item.model ? <ol>Modelo: {item.modelo}</ol> : null }
                  { item.price ? <ol>Precio: {item.price} €</ol> : null }
                  { item.cpu ? <ol>CPU: {item.cpu}</ol> : null }
                  { item.ram ? <ol>RAM: {item.ram}</ol> : null }
                  { item.so ? <ol>Sistema Operativo: {item.so}</ol> : null }
                  { item.displayResolution ? <ol>Resolución de pantalla: {item.displayResolution}</ol> : null }
                  { item.battery ? <ol>Batería: {item.battery}</ol> : null }
                  { item.primaryCamera ? <ol>Cámara trasera: {item.primaryCamera}</ol> : null }
                  { item.secondaryCmera ? <ol>Cámara delantera: {item.secondaryCmera}</ol> : null }
                  { item.dimentions ? <ol>Dimensiones: {item.dimentions}</ol> : null }
                  { item.weight ? <ol>Peso: {item.weight}gr.</ol> : null }
                </ol>
              </div>
              <div className='ProductListContainer-infoActions'>
                <div className='ProductListContainer-infoActions__storage'>
                  {
                    storage ? (
                      item.internalMemory.map((item) => {
                        return (
                          <div className='ProductListContainer-infoActions__storageButton'>
                            {item}
                          </div>
                        )
                      })
                    ) : null  
                  }             
                </div>
                <div className='ProductListContainer-infoActions__colour'>
                {
                    colors ? (
                      item.colors.map((item) => {
                        return (
                          <div className='ProductListContainer-infoActions__colorsButton'>
                            {item}
                          </div>
                        )
                      })
                    ) : null  
                  }  
                </div>
                <div className='ProductListContainer-infoActions__addToCart'>
                  <ShoppingCart/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div >
  )
}

export default ProductListContainer