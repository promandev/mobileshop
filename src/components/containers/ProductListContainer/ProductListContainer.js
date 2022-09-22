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
  const [color, setColor] = useState('');
  const [memory, setMemory] = useState('');
  const [defaultColor, setDefaultColor] = useState('')
  const [defaultStorage, setDefaultStorage] = useState('')

  
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

  useEffect(() => {
    async function handleDefaultColor() {
      if (colors.length === 1) {
        setDefaultColor(colors[0])
      }
      console.log('pasa por el async', defaultColor)
    }  
    async function handleDefaultStorage() {
      if (storage.length === 1) {
        setDefaultStorage(storage[0])
      }
    }
    handleDefaultColor();
    handleDefaultStorage();
  }, [defaultColor, defaultStorage])

  const handleClickColor = (event) => {
    setColor(event.target.value);
  };
  
  const handleClickMemory = (event) => {
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
                {/* <span> */}
                  { item.brand ? <span>- Marca: {item.brand}.</span> : null }
                  { item.model ? <span>- Modelo: {item.modelo}.</span> : null }
                  { item.price ? <span>- Precio: {item.price} €.</span> : null }
                  { item.cpu ? <span>- CPU: {item.cpu}.</span> : null }
                  { item.ram ? <span>- RAM: {item.ram}.</span> : null }
                  { item.so ? <span>- Sistema Operativo: {item.so}.</span> : null }
                  { item.displayResolution ? <span>- Resolución de pantalla: {item.displayResolution}.</span> : null }
                  { item.battery ? <span>- Batería: {item.battery}.</span> : null }
                  { item.primaryCamera ? <span>- Cámara trasera: {item.primaryCamera}.</span> : null }
                  { item.secondaryCmera ? <span>- Cámara delantera: {item.secondaryCmera}.</span> : null }
                  { item.dimentions ? <span>- Dimensiones: {item.dimentions}.</span> : null }
                  { item.weight ? <span>- Peso: {item.weight}gr.</span> : null }
                {/* </span> */}
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
                            {console.log('amo a ver', item.length)}
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              value={storage}
                              onClick={handleClickMemory}
                              defaultValue={storage[0]}
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
                          console.log('adfsagadhdgfhhadsgfghhadgsfghadsg', defaultColor)
                          return (
                            <FormControl>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={colors}
                                onClick={handleClickColor}
                                defaultValue={colors[0]}
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