import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../Context/UserContext';

const Header = (props) =>  {
  const { state, storeData } = useContext(AppContext);
  
  const filterData = (e) => {
    if(e.target.value) {
      if(e.target.value.length > 2) {
        const results = state.apiData && state.apiData.filter(singleData => singleData.title.toLowerCase().includes(e.target.value));
        return storeData({filterData: [...results]})
      }
    }
    storeData({filterData: []})
  }
  
  return (
    <div className="header">
      <div className="search-container">
        <form action="/action_page.php">
        <input type="text" placeholder="Search (enter atleast 3 digits)" onChange={filterData} />
        </form>
      </div>
    </div>
  )
}

export default Header;
