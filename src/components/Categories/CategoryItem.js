import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const CategoryItem = ({ categoryItems }) => {
  return (
    <Grid container spacing={2}>
    {categoryItems.map((item, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Link to = {`/meal/${item.idMeal}`} key = {item.idMeal} style={{textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 250 }}>
            <Box sx={{ position: 'relative' }}>
            <CardMedia
                component="img"
                height="140"
                image={item?.strMealThumb}
                alt={item?.strMeal}
            />
            {/* <Box sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 1,
                    }}
                    >
                        <Chip label={item?.strCategory} sx={{borderRadius: '0.5rem',backgroundColor: '#ff9800',color: 'white',paddingLeft: '1rem',paddingRight: '1rem',}}/>
                    </Box> */}
            </Box>
            <CardContent>
                <Typography gutterBottom align="center" component="div" sx={{ fontWeight: 'bold' }}>
                {item?.strMeal}
                </Typography>
                {/* <Box sx={{ marginTop: 1 }}>
                    <Chip label={item?.strCategory} variant="outlined" />
                </Box> */}
                {/* <Typography variant="body2" color="text.secondary">
                {item.description}
                </Typography> */}
            </CardContent>
            </Card>
        </Link>
      </Grid>
    ))}
    </Grid>
  )
}

export default CategoryItem