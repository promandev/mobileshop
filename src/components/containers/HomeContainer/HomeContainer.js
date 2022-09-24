import React, {useContext, useRef, useEffect, useState} from 'react';
import './HomeContainer.css'
import GridComponent from '../../HomeComponents/Grid/Grid';
import SearchBar from '../../HomeComponents/SearchBar/SearchBar';
import Header from '../../shared/Header/Header';
import { Context as ProductsContext} from "../../../context/productsContext";
import { Context as ProductDetailsContext} from "../../../context/productDetailsContext";

function HomeContainer() {
  const { state: productState, state,   GetProduct, getProduct } = useContext(ProductsContext)
  const { state: productDetailState, setActualProductId, getProductId } = useContext(ProductDetailsContext)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ dataTyped, setDataTyped ] = useState()
  const [ filteredData, setFilteredData ] = useState([])


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
  console.log(dataTyped)

  return (
    <div className='HomeContainer'>
        <Header/>
        <div className='HomeContainer-Body'>
          {
            isLoading ? (
              <>
                <div className='HomeContainer-searchBarWrapper'>
                  <div className='HomeContainer-searchBar'>
                    <SearchBar inputValue={dataTyped} handleChangeSearch={handleOnChange}/>
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
            ) : null
          }
        </div>
    </div >
  )
}

export default HomeContainer