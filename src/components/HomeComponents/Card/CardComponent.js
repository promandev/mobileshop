import React, {useContext} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Context as ProductsContext} from "../../../context/productsContext";
import Grid from '@mui/material/Grid';
import './CardComponent.css'




function CardComponent(image, brand, model, price) {
  const { state: productState } = useContext(ProductsContext)


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
        <Grid item xs={12} sm={6} md={4} lg={3} style={{textAlign: '-webkit-center'}} >
          <Item key={item.id}>                
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



