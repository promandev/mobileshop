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
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const initialCartList = {}

function ProductListContainer() {
  const { state: productDetailsState, getProductId, setDataPrePostItemCart, postItemCart, resetDataPrePostItemCart } = useContext(ProductDetailsContext)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ defaultColor, setDefaultColor ] = useState("")
  const [ defaultStorage, setDefaultStorage ] = useState("")
  const [ color, setColor ] = useState(null);
  const [ memory, setMemory ] = useState(null);
  const [ itemCount, setItemCount ] = useState(0);
  const [ itemsToCart, setItemsToCart ] = useState(initialCartList)
  const [ listSubmitted, setListSubmitted ] = useState(false)

  const item = productDetailsState.productId
  const storage = item.internalMemory
  const colors = item.colors
  const listToSubmit = productDetailsState.itemDetailsToCart

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        await getProductId(productDetailsState.actualProductId)
        setIsLoading(false)
      }
      fetchData();
    }

    async function handleDefaultColor() {
      if (colors && colors.length == 1) {
        setDefaultColor(colors[0])
        setColor(defaultColor)
      }
    }        
    handleDefaultColor();

    async function handleDefaultStorage() {
      if (storage && storage.length === 1) {
        setDefaultStorage(storage)
        setMemory(defaultStorage)
      }
    }
    handleDefaultStorage();

    if (!productDetailsState) {
      setIsLoading(true)
    }
  }, [isLoading, defaultColor, defaultStorage])
  
  useEffect(() => {
    async function setDataForPurchase() {
      setDataPrePostItemCart(itemsToCart)
    }
    setDataForPurchase();
  }, [itemsToCart])

  useEffect(() => {
    async function postData(){
      if (productDetailsState.itemDetailsToCart)
      {
        await postItemCart(productDetailsState.itemDetailsToCart)
        setListSubmitted(false)
      }
    }
    postData()
    resetDataPrePostItemCart()
  }, [listSubmitted])

  const handleClickColor = (event) => {
    setColor(event.target.value);
  };
  
  const handleClickMemory = (event) => {
    setMemory(event.target.value);    
  };

  // const handleRemoveItem = () => {
  //   itemsToCart.pop()
  //   setItemsToCart(itemsToCart)
  // }

  const handleAddItem = () => {
    setItemsToCart({id: item.id, colorCode: color, storageCode: memory})
    // setItemsToCart(current => [...current, {id: item.id, colorCode: color, storageCode: memory}])
  }

  const handleClickAddToCart = () => {
    console.log('onclick', productDetailsState)
    if (listToSubmit.id && listToSubmit.colorCode && listToSubmit.storageCode)
    {
      setListSubmitted(true)
    }
    else {
      alert('Por favor, seleccione las opciones de Memoria y Color del dispositivo móvil')
    }
  }

    return (
      <div className='ProductListContainer'>
        <Header itemIterations/>
        <div className='ProductListContainer-body'>
          <div className='ProductListContainer-bodyWrapper'>
            <div className='ProductListContainer-infoWrapper'>
              <div className='ProductListContainer-phoneImage'>
                <img src={item.imgUrl}/>
              </div>
              <div className='ProductListContainer-infoDescription'>
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
                              onClick={handleClickMemory}
                              defaultValue={defaultStorage}
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
                                onClick={handleClickColor}
                                defaultValue={defaultColor}
                                >
                                <FormControlLabel id={index} value={item} control={<Radio />} label={item} />
                              </RadioGroup>
                            </FormControl>
                          )
                      })}
                      </div>
                    </div>) : null 
                  }               
              <div className='ProductListContainer-infoActions__addToCart'>
              <ButtonGroup sx={{}}>
                {/* <Button
                  value={item}
                  onClick={handleRemoveItem}
                  sx={{color: 'black',
                  border: '1px solid black'}}
                >
                  {" "}
                  <RemoveIcon fontSize="small" />
                </Button> */}
                <Button
                  value={item}
                  onClick={handleAddItem}
                  sx={{color: 'black',
                  border: '1px solid black'}}
                >
                  {" "}
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>                
              </div>
              <div className='ProductListContainer-infoActions__submitToCart'>
                <Button variant="contained" color="success" onClick={handleClickAddToCart}>
                    Comprar
                </Button>
              </div>
          </div>
          </div>
        </div>
    </div >
  )
}

export default ProductListContainer