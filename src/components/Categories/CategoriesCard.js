import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categories }) => {
  return (
    <Grid container spacing={2}>
    {categories.map((item, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Link to = {`/meal/category/${item?.strCategory}`} key = {item?.idCategory} style={{textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 240 }}>
            <Box sx={{ position: 'relative' }}>
            <CardMedia
                component="img"
                height="140"
                image={item?.strCategoryThumb}
                alt={item?.strCategory}
                sx={{
                    transition: 'transform 0.3s',
                    '&:hover': {
                    transform: 'scale(0.7)',
                    },}}
            />
            <Box sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 1,
                    }}
                    >
                        <Chip label={item?.strCategory} sx={{borderRadius: '0.5rem',backgroundColor: '#ff9800',color: 'white',paddingLeft: '1rem',paddingRight: '1rem',}}/>
                    </Box>
            </Box>
            <CardContent>
                <Typography gutterBottom align="center" component="div" sx={{ fontWeight: 'bold' }}>
                {item?.strCategory}
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

export default CategoriesCard