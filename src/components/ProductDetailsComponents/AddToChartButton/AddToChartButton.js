import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";

function AddToChartButton({value, onClick}) {
  return (
    <ButtonGroup sx={{}}>
        <Button
        value={value}
        onClick={onClick}
        sx={{color: 'black',
        border: '1px solid black'}}
        >
        {" "}
        <AddIcon fontSize="small" />
        </Button>
    </ButtonGroup>    
  )
}

export default AddToChartButton