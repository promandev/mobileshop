import React, {useContext, useEffect, useState} from 'react';
import './ProductListContainer.css';

import Header from '../../shared/Header/Header';
import LinearProgress from '@mui/material/LinearProgress';
import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";
import ProductInfo from '../../ProductDetailsComponents/ProductInfo/ProductInfo';
import MemoryInfo from '../../ProductDetailsComponents/MemoryInfo/MemoryInfo';
import ColorInfo from '../../ProductDetailsComponents/ColorInfo/ColorInfo';
import AddToChartButton from '../../ProductDetailsComponents/AddToChartButton/AddToChartButton';
import PurchaseButton from '../../HomeComponents/PurchaseButton/PurchaseButton';


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

  const handleAddItem = () => {
    setItemsToCart({id: item.id, colorCode: color, storageCode: memory})
  }

  const handleClickAddToCart = () => {
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
            {
              !isLoading ? (
                <>
                    <div className='ProductListContainer-bodyWrapper'>
                      <div className='ProductListContainer-infoWrapper'>
                        <div className='ProductListContainer-phoneImage'>
                          <img src={item.imgUrl}/>
                        </div>
                        <ProductInfo/>
                      </div>
                      <div className='ProductListContainer-infoActions'>
                        <div className='ProductListContainer-infoActions__storage'>
                          <span className='text_medium_semibold'>Memoria</span>
                        <div className='ProductListContainer-infoActions__selector'>
                          <MemoryInfo itemMemory={memory} handleClick={handleClickMemory} defaultValue={defaultStorage}/>
                        </div>
                        </div>
                        <div className='ProductListContainer-infoActions__storage'>
                          <span className='text_medium_semibold'>Colores</span>
                        <div className='ProductListContainer-infoActions__selector'>
                          <ColorInfo colorMemory={color} handleClick={handleClickColor} defaultValue={defaultColor}/>
                        </div>
                        </div>
                          {
                            item.price ? (
                              <>
                              <div className='ProductListContainer-infoActions__price'>
                                <span className='text_extralarge_bold'>
                                  {item.price}€
                                </span>
                              </div>
                              <div className='ProductListContainer-infoActions__addToCart'>
                                <AddToChartButton value={item} onClick={handleAddItem}/>
                              </div>
                              <div className='ProductListContainer-infoActions__submitToCart'>
                                <PurchaseButton onClick={handleClickAddToCart}/>
                              </div>
                              </>

                            ) : 
                            <div>
                              <span className='text_medium_thin'>
                                Este producto no está disponible temporalmente
                              </span>
                            </div>
                          }
                    </div>
                    </div>
                </>
              ) :
              <LinearProgress color="success" />
            }
        </div>
      </div >
  )
}

export default ProductListContainer