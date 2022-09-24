import React, {useContext} from 'react';
import './Breadcrumbs.css'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { Context as ProductsContext} from "../../../context/productsContext";
import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";
import { useNavigate } from 'react-router-dom';


export default function IconBreadcrumbs() {
    const { state: productState } = useContext(ProductsContext)
    const { state: productDetailState } = useContext(ProductDetailsContext)
    const navigate = useNavigate()
    const userInProductDetails = productDetailState.actualProductId
    
    const handleClickFirstBreadcrumb = () => {
        navigate('/')
    }

    const handleClickSecondBreadcrumb = () => {
        navigate(`/productDetail/${productDetailState.actualProductId}`)
    }
    
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          onClick={handleClickFirstBreadcrumb}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          <span className='text_medium_semibold'>
            Home
          </span>
        </Link>
        {
            userInProductDetails ? 
                <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                onClick={handleClickSecondBreadcrumb}
                >
                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                <span className='text_medium_semibold'>
                  Producto Seleccionado
                </span>
                </Link>
            : null
        }
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
        </Typography>
      </Breadcrumbs>
    </div>
  );
}