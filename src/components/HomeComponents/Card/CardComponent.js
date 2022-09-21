import React, {useContext, useRef, useEffect, useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Context as ProductsContext} from "../../../context/productsContext";
import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";
import Grid from '@mui/material/Grid';
import './CardComponent.css'
import { useNavigate, useParams } from 'react-router-dom';

function CardComponent() {
  const { state: productState, state,   GetProduct, getProduct } = useContext(ProductsContext)
  const { state: productDetailState, setActualProductId, getProductId } = useContext(ProductDetailsContext)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ uniqueId, setUniqueId ] = useState('')
  const navigate = useNavigate()
  const refItem = useRef(null)

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        await GetProduct()
        setIsLoading(false)
      }
      fetchData()
    }
  }, [isLoading])
  
  useEffect(() => {
    async function setData() {
      setActualProductId(uniqueId)
    }

    if (uniqueId.length) {
      navigate(`productDetail/${uniqueId}`)
    }
    setData()
  }, [uniqueId])

  const onClickHandler = event => {
    var newId = event.currentTarget.id;
    setUniqueId(newId);

  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 'auto',
    width: '250px',
  }));

  return (
    <>
    {productState.products.map((item, index) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign: '-webkit-center'}} key={index}>
          <Item id={item.id} key={item.id} onClick={onClickHandler}>                
            <div className='CardComponent-container'>
              <div className='CardComponent-wrapper'>
                <div className='CardComponent-image'>
                  <img src={item.imgUrl} alt={'mobile-phone'} className='CardComponent-imageDimension'/>
                </div>
                <div className='CardComponent-info'>
                  <div className='CardComponent-infoWrapper'>
                    <div className='CardComponent-info__brand'>
                      <span>{item.brand}</span>
                    </div>
                    <div className='CardComponent-info__model'>
                      <span>{item.model}</span>
                    </div>
                  </div>
                  <div className='CardComponent-info__price'>
                    {
                      item.price ? <span>{item.price} €</span> : <span>Agotado</span>
                    }
                  </div>
                </div>
              </div>
            </div>            
          </Item>
        </Grid>
      )
    }
    )}
    </>
  )
}

export default CardComponent



