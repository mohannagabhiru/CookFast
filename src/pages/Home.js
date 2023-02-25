import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import CategoriesCard from '../components/Categories/CategoriesCard'
import { CATEGORIES_URL } from '../utils/constants'


const Home = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await axios.get(`${CATEGORIES_URL}`);
    setCategories(response.data.categories);
    console.log(response.data.categories)
  }

  useEffect(() => {
    fetchCategories()
  }, [])
  
  return ( 
   <Box sx={{ margin: 'auto', maxWidth: 1100, paddingY : 5 }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 5 }}>
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