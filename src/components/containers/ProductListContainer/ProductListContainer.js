import React, {useContext, useEffect, useState} from 'react';
import './ProductListContainer.css';

import { Context as ProductsContext} from "../../../context/productsContext";
import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";
import Header from '../../shared/Header/Header';
import ShoppingCart from '../../shared/ShoppingCart/ShoppingCart';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function ProductListContainer() {
  const { state: productState} = useContext(ProductsContext)
  const { state: productDetailsState, getProductId } = useContext(ProductDetailsContext)
  const [ isLoading, setIsLoading ] = useState(true)
  const [color, setColor] = useState();
  const [memory, setMemory] = useState();
  
  const item = productDetailsState.productId
  const storage = item.internalMemory
  const colors = item.colors
  
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

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeMemory = (event) => {
    setMemory(event.target.value);
  };
    
    return (
      <div className='ProductListContainer'>
        <Header/>
        <div className='ProductListContainer-body'>
          <div className='ProductListContainer-bodyWrapper'>
            <div className='ProductListContainer-infoWrapper'>
              <div className='ProductListContainer-phoneImage'>
                <img src={item.imgUrl}/>
              </div>
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
            </div>
            <div className='ProductListContainer-infoActions'>
              {
                storage ? ( 
                  <div className='ProductListContainer-infoActions__storage'>
                  <span>Memoria</span>
                  <div className='ProductListContainer-infoActions__selector'>
                    {             
                      item.internalMemory.map((item, index) => {
                        return (
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              value={memory}
                              onChange={handleChangeMemory}
                            >
                              <FormControlLabel id={index} value={item} control={<Radio />} label={item} />
                            </RadioGroup>
                          </FormControl>
                        )
                    })}
                    </div>
                  </div>) : null 
                } 
                {
                  colors ? ( 
                    <div className='ProductListContainer-infoActions__storage'>
                    <span>Colores</span>
                    <div className='ProductListContainer-infoActions__selector'>
                      {             
                        item.colors.map((item, index) => {
                          return (
                            <FormControl>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={color}
                                onChange={handleChangeColor}
                              >
                                <FormControlLabel id={index} value={item} control={<Radio />} label={item} />
                              </RadioGroup>
                            </FormControl>
                          )
                      })}
                      </div>
                    </div>) : null 
                  }               <div className='ProductListContainer-infoActions__addToCart'>
                <ShoppingCart/>
              </div>
          </div>
          </div>
        </div>
    </div >
  )
}

export default ProductListContainer