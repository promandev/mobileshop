import React from 'react';
import './PurchaseButton.css'

import Button from '@mui/material/Button';

function PurchaseButton({onClick}) {
  return (
    <Button variant="contained" color="success" onClick={onClick}>
        <span className='text_medium_semibold'>
            Comprar
        </span>
    </Button>
  )
}

export default PurchaseButton