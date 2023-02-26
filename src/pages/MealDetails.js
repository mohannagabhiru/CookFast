import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import MealDetail from '../components/MealDetails/MealDetail';
import { MEAL_SINGLE_URL } from '../utils/constants';

const MealDetails = () => {
  const { id } = useParams();
  const [ mealDetails, setMealDetails] = useState({})
  const [ singleMeal, setSingleMeal ] = useState({})
  const test = { title : 'mohan'}

  const fetchMealDetails = async () => {
    const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
    setMealDetails(response.data.meals);
    console.log(response.data.meals)
  }

  useEffect(() => {
    fetchMealDetails()
  }, [])

  let ingredientsArr = [], measuresArr = []

  useEffect(() => {
    if(mealDetails && mealDetails?.length > 0){
      for(let props in mealDetails[0]){
        if(props.includes('strIngredient')){
          if(mealDetails[0][props]) ingredientsArr.push(mealDetails[0][props]);
        }
  
        if(props.includes('strMeasure')){
          if(mealDetails[0][props]){
            if(mealDetails[0][props].length > 1){
              measuresArr.push(mealDetails[0][props]);
            }
          }
        }
      }
     setSingleMeal({
        id: mealDetails[0]?.idMeal,
        title: mealDetails[0]?.strMeal,
        category: mealDetails[0]?.strCategory,
        area: mealDetails[0]?.strArea,
        thumbnail: mealDetails[0]?.strMealThumb,
        instructions: mealDetails[0]?.strInstructions,
        source: mealDetails[0]?.strSource,
        tags: mealDetails[0]?.strTags,
        youtube: mealDetails[0]?.strYoutube,
        ingredients: ingredientsArr,
        measures: measuresArr
      })
    }}, [mealDetails])

    console.log( singleMeal);
  
  return (
    <Box sx={{ margin: 'auto', maxWidth: 1100, paddingY : 5, backgroundColor:'#ffffff' }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: 3, fontWeight : 700 }}>
          {/* <Box borderBottom={2} borderBottomColor="primary.main" width="50%" margin="auto"> */}
              Meal Details
          {/* </Box> */}
        </Typography>
        {
          singleMeal
          ? <MealDetail singleMeal={singleMeal}/>
          : null
        }
    </Box>
  )
}

export default MealDetails