import React, {useContext, useRef, useEffect, useState} from 'react';
import './SearchBar.css';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Context as ProductsContext} from "../../../context/productsContext";


function SearchBar({handleChangeSearch, inputValue}) {

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