import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [ state, setState ] = useState({});  
  
  const storeData = data => {
    setState({
      ...state,  
      ...data,      
    })  
  }
  return (    
    <AppContext.Provider value={{ state,  storeData }}>      
      {props.children}    
    </AppContext.Provider>  
  )
}

export default AppContextProvider;