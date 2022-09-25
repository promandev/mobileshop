import React, {useContext, useEffect, useState} from 'react';
import './HomeContainer.css';
import LinearProgress from '@mui/material/LinearProgress';
import GridComponent from '../../HomeComponents/Grid/Grid';

import Header from '../../shared/Header/Header';
import TextField from '@mui/material/TextField';

import { Context as ProductsContext} from "../../../context/productsContext";

function HomeContainer() {
  const { state: productState, getProducts } = useContext(ProductsContext)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ dataTyped, setDataTyped ] = useState()
  const [ filteredData, setFilteredData ] = useState([])

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        await getProducts()
        setIsLoading(false)
      }
      fetchData()
    }
  }, [])

  useEffect(() => {
    let timer = setTimeout(() => {
      getProducts()
    }, 216000000);
    return() => {
      clearTimeout(timer)
    }
  }, [productState]);

  useEffect(() => {
    async function searchData() {
      const filteredArray = productState.products.filter((item) => {
        return item.brand.includes(dataTyped) || item.model.includes(dataTyped)
      })
      setFilteredData(filteredArray)
    }
    searchData()
  }, [dataTyped])

  const handleOnChange = event => {
    setDataTyped(event.target.value)
  }

  return (
    <div className='HomeContainer'>
        <Header/>
        <div className='HomeContainer-Body'>
          {
            !isLoading ? (
              <>
                <div className='HomeContainer-searchBarWrapper'>
                  <div className='HomeContainer-searchBar'>
                    <TextField color='success' value={dataTyped} onChange={handleOnChange} label="Buscar" id="custom-css-outlined-input"  backgroundcolor='red'></TextField>
                  </div>
                </div>
                <div className='HomeContainer-gridWrapper'>
                  <div className='HomeContainer-grid'>
                    <GridComponent 
                      {... filteredData.length ? {itemData: filteredData} : {itemData: productState.products} }
                      /> 
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

export default HomeContainer