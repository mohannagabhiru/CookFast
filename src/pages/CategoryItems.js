import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import CategoryItem from '../components/Categories/CategoryItem';
import AppContextProvider, { useAppContext } from '../context/AppContext';
import { MEAL_CATEGORIES_URL } from '../utils/constants';

const CategoryItems = () => {
    const { name : category } = useParams();
    const { meals } = useAppContext();
    const [categoryItems, setCategoryItems] = useState([]);
    const [currentCategoryDescription, setCurrentCategoryDescription] = useState('');

    // if(meals){
    //   meals.forEach(meal => {
    //     if(meal?.strCategory === category){
    //       setCurrentCategoryDescription(meal?.strCategoryDescription)
    //       // catDescription = meal?.strCategoryDescription;
    //     }
    //   })
    // }

    const fetchCategoryItems = async () => {
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
        setCategoryItems(response.data.meals);
        console.log(response.data.meals)
      }
    
    useEffect(() => {
    fetchCategoryItems()
    }, [])

    useEffect(() => {
      meals.forEach(meal => {
        if(meal?.strCategory === category){
          setCurrentCategoryDescription(meal?.strCategoryDescription)
          // catDescription = meal?.strCategoryDescription;
        }
      })
    }, [ category ])
    
    
  return (
    <Box sx={{ margin: 'auto', maxWidth: 1200, paddingY : 5 }}>
      <Box border={2} sx={{ bgcolor: '#f5f5f5', p: 3, borderColor:'#ff9800', borderWidth : 1 }}>
        <Typography variant="h5" gutterBottom sx={{ color : '#ff9800', fontWeight : 700  }}>
            {category}
        </Typography>
        <Typography variant="body1">
              {currentCategoryDescription}
        </Typography>
      </Box>
      <Box sx={{marginY:2}}>
      <Typography variant="h5" gutterBottom sx={{ marginBottom: 5, fontWeight : 700  }}>
        {/* <Box borderBottom={2} borderBottomColor="primary.main" width="50%" margin="auto"> */}
            Meals
        {/* </Box> */}
      </Typography>
        { categoryItems.length > 0
        ? <CategoryItem categoryItems={categoryItems}/>
        : null
        }
      </Box>
    </Box>
  )
}

export default CategoryItems