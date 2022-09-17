import React from 'react';
import './SearchBar.css';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

function SearchBar() {
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'black',
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#DAD299',
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
    <CssTextField label="Buscar" id="custom-css-outlined-input"  backgroundColor='red'></CssTextField>
  )
}

export default SearchBar