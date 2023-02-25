import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import CategoryItem from '../components/Categories/CategoryItem';
import { MEAL_CATEGORIES_URL } from '../utils/constants';

const CategoryItems = () => {
    const { name : category } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);

    const fetchCategoryItems = async () => {
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
        setCategoryItems(response.data.meals);
        console.log(response.data.meals)
      }
    
    useEffect(() => {
    fetchCategoryItems()
    }, [])
    
  return (
    <Box sx={{ margin: 'auto', maxWidth: 1200, paddingY : 5 }}>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>
        <Typography variant="h5" gutterBottom>
            {category}
        </Typography>
        <Typography variant="body1">
            Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ marginBottom: 5 }}>
        {/* <Box borderBottom={2} borderBottomColor="primary.main" width="50%" margin="auto"> */}
            MEALS
        {/* </Box> */}
      </Typography>
      { categoryItems.length > 0
       ? <CategoryItem categoryItems={categoryItems}/>
       : null
      }

    </Box>
  )
}

export default CategoryItems