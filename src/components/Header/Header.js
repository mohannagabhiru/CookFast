import { Card, CardMedia, IconButton, Input, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import headerImage from "../../assets/images/header_image.jpg"
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

  return (
    <Box sx={{position:'relative'}}>
        <Card>
            <CardMedia
            component="img"
            height="400"
            image= {headerImage}
            sx={{backgroundColor:'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))'}}
            // image="../../assets/images/header_image.jpg"
        />
        </Card>
        <Box sx={{position:'absolute',top: '40%',left: '40%',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center',height:200}}>
            <Box>
                <Input />
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="search"
                sx={{ ml: 2,color:'white' }}
                >
                <SearchIcon />
                </IconButton>
            </Box>
            <Typography variant='h5' sx={{color:'white'}}>What are your favorite cuisines?</Typography>
            <Typography sx={{color:'white'}}>PERSONALIZE YOUR EXPERIENCE</Typography>
        </Box>
    </Box>
  )
}

export default Header