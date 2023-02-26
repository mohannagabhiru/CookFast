import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext({});

const AppContextProvider = ({children}) => {
    const [ meals, setMeals] = useState([]);
    const [ searchTerm, setSearchTerm] = useState('');
  return (
    <AppContext.Provider
        value={{
            meals,
            setMeals,
            searchTerm,
            setSearchTerm
        }}
    >
        {children}
    </AppContext.Provider>
    // <div>AppContext</div>
  )
}

export default AppContextProvider

export const useAppContext = () => {
    return useContext(AppContext);
}