import React from 'react';
import GridComponent from '../../HomeComponents/Grid/Grid';
import SearchBar from '../../HomeComponents/SearchBar/SearchBar';
import Header from '../../shared/Header/Header';
import './HomeContainer.css'

function HomeContainer() {
  return (
    <div className='HomeContainer'>
        <Header/>
        <div className='HomeContainer-Body'>
          <div className='HomeContainer-searchBarWrapper'>
            <div className='HomeContainer-searchBar'>
              <SearchBar/>
            </div>
          </div>
          <div className='HomeContainer-gridWrapper'>
            <div className='HomeContainer-grid'>
              <GridComponent/>
              {/* <div className='HomeContainer-grid__card'>

              </div> */}
            </div>
          </div>
        </div>
    </div >
  )
}

export default HomeContainer