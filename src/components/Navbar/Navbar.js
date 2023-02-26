import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{bgcolor:'#ff9800'}}>
      <Toolbar>
      <FoodBankIcon />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CookFast
        </Typography>
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