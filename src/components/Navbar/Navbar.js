import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{bgcolor:'#ff9800'}}>
      <Toolbar sx={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
        <Link to={'/'} style={{textDecoration:'none',color:'white',flex:1,flexDirection:'row'}}>
        {/* <FoodBankIcon /> */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CookFast
          </Typography>
        </Link>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar