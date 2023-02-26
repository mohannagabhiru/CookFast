import { Card, CardMedia, IconButton, Input, InputAdornment, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import headerImage from "../../assets/images/header_image.jpg"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Header = () => {
  const navigate = useNavigate();
  const {setSearchTerm, searchTerm} = useAppContext();
  const [ errorMsg, setErrorMsg ] = useState('');
  const [ searchText, setSearchText] = useState('');

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0){
      setSearchText(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    setSearchTerm(searchText);
    navigate("/");
    // startFetchMealsBySearch(dispatch, searchTerm);
  }

  return (
    <Box sx={{position:'relative'}}>
        <Card>
            <CardMedia
            component="img"
            height="400"
            image= {headerImage}
            // image="../../assets/images/header_image.jpg"
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        />
        </Card>
        <Box sx={{position:'absolute',top: '25%',left: '35%',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center',height:200}}>
            {/* <Box sx={{bgcolor:'white',borderRadius:5}}>
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
            </Box> */}
            <form onSubmit={(e) => handleSearchResult(e)}>
              <Input
                type="text"
                sx={{ bgcolor: '#FFFFFF',padding:2, borderRadius : 5 }}
                placeholder="Search recipes here"
                disableUnderline={true}
                onChange={(e) => handleSearchTerm(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton size="small" sx={{ bgcolor: '#FFA500' }}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </form>
            <Typography variant='h5' sx={{color:'white',fontWeight:700}}>What are your favorite cuisines?</Typography>
            <Typography sx={{color:'#ff9800',fontWeight:200}} >PERSONALIZE YOUR EXPERIENCE</Typography>
        </Box>
    </Box>
  )
}

export default Header