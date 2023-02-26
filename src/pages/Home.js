import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import axios from '../api/axios'
import CategoriesCard from '../components/Categories/CategoriesCard'
import CategoryItem from '../components/Categories/CategoryItem'
import AppContextProvider, { useAppContext } from '../context/AppContext'
import { CATEGORIES_URL, SEARCH_URL } from '../utils/constants'


const Home = () => {
  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const {meals, setMeals, searchTerm } = useAppContext()

  const fetchCategories = async () => {
    const response = await axios.get(`${CATEGORIES_URL}`);
    setCategories(response.data.categories);
    if(meals.length <= 1){
      setMeals(response.data.categories);
    }
  }

  const fetchSearchItem = async () => {
    console.log(searchTerm);
    const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
    setSearchResults(response.data.meals);
    console.log(searchResults, "searchResults");
  }

  useEffect(() => {
    if(searchTerm.length > 0){
      fetchSearchItem()
    }
  }, [searchTerm])
  

  useEffect(() => {
    fetchCategories()
  }, [])
  
  return ( 
   <Box sx={{ margin: 'auto', maxWidth: 1100, paddingY : 5 }}>
       {
        searchResults?.length > 0 
        ? <>
         <Typography variant="h5" gutterBottom sx={{ marginBottom: 5, fontWeight : 700 }}>
        {/* <Box borderBottom={2} borderBottomColor="primary.main" width="50%" margin="auto"> */}
            Meals
        {/* </Box> */}
        </Typography>
        <CategoryItem categoryItems={searchResults} />
        </>
        : null
      }
      <Typography variant="h5" gutterBottom sx={{ marginBottom: 5, fontWeight : 700 }}>
        {/* <Box borderBottom={2} borderBottomColor="primary.main" width="50%" margin="auto"> */}
            Categories
        {/* </Box> */}
      </Typography>
      { categories.length > 0
       ? <CategoriesCard categories={categories}/>
       : null
      }

   </Box>
  )
}

export default Home