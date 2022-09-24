import React, {useContext, useRef, useEffect, useState} from 'react';
import './SearchBar.css';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Context as ProductsContext} from "../../../context/productsContext";


function SearchBar({handleChangeSearch, inputValue}) {
  const { state: productState } = useContext(ProductsContext)
  const [ dataTyped, setDataTyped ] = useState(null)

  const handleOnChange = event => {
    console.log('esto es el event', event.target.value)
    setDataTyped(event.target.value)
    
    
    productState.products.filter(brand => brand.includes(), model => model.includes(dataTyped)).map(filteredSearch => filteredSearch)
    
    // console.log('que hay', inpu)
    
    // console.log('esto es filtrado', filteredSearch)
  }

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiInput-underline:after': {
          borderBottomcolor: 'black',
        },
        '& .MuiOutlinedInput-root': {
            backgroundcolor: '#DAD299',
          '& fieldset': {
            borderColor: 'black',
            color: 'black',            
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
        },
      });
      
  return (
    <CssTextField value={inputValue} onChange={handleChangeSearch} label="Buscar" id="custom-css-outlined-input"  backgroundcolor='red'></CssTextField>
  )
}

export default SearchBar