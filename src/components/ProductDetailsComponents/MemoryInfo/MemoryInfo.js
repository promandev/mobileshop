import React, {useContext, useEffect, useState} from 'react';

import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function MemoryInfo({itemMemory, handleClick, defaultValue}) {
    const { state: productDetailsState } = useContext(ProductDetailsContext)

    return (
        productDetailsState.productId.internalMemory.map((item, index) => {
            return (
            <FormControl>
                <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={itemMemory}
                onClick={handleClick}
                defaultValue={defaultValue}
                >
                <FormControlLabel id={index} value={item} control={<Radio />} label={item} />
                </RadioGroup>
            </FormControl>
            )
        })
    )
}

export default MemoryInfo