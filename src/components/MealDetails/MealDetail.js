import { Chip, Grid, IconButton, List, ListItem, ListItemText, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link } from 'react-router-dom';

const MealDetail = ({ singleMeal : meal }) => {
  console.log(meal);
  let tags = meal?.tags?.split(',');
  console.log(meal);
  let instructions = meal?.instructions?.split('.');
  instructions = instructions?.filter(instruction => instruction?.length > 1);
  console.log(instructions,"tags")

  const Image = styled('img')({
    maxWidth: '100%',
    height: 450,
  });
  
  const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: theme.spacing(1),
  }));




  return (
     <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Image src={meal?.thumbnail} alt="example" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" sx={{borderBottom: '1px solid black',py:1, color : "#ff9800"}}>
            {meal?.title}
          </Typography>
          <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" marginY={2}>
            <Typography>
                Category 
            </Typography>
            <Typography marginLeft={2}>
                    :
            </Typography>
            <Typography marginLeft={2} >
                {meal?.category}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" marginY={2}>
            <Typography>
                Source 
            </Typography>
            <Typography marginLeft={2}>
                    :
            </Typography>
            <Link href={meal?.source?.length > 0 && meal.source} style={{textDecoration:'none',color:'black'}}>
                <Typography marginLeft={2}>
                    {meal?.source?.length > 0 ? meal?.source : "Not found"}
                </Typography>
            </Link>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" marginY={2}>
            <Typography>
                Tags 
            </Typography>
            <Typography marginLeft={2}>
                    :
            </Typography>
            {/* <Typography marginLeft={2}  variant="h6">
                {meal?.source.length > 0 ? meal?.source : "Not found"}
            </Typography> */}
            { 
                tags?.map((tag) => (
                <Chip label={tag} sx={{marginLeft : 1}}/>
            ))
            }
          </Box>

          <Box sx={{ width: '100%', height: 'auto', bgcolor: 'orange',}}>
          <Grid container spacing={1} sx={{px : 2, py:1}}>
            {meal?.ingredients?.map((ingredient, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Typography variant='body2' width={20} height={20} sx={{backgroundColor:'green',p:0.5,  border:1, borderColor : 'white', borderRadius:'50%', textAlign:'center' }}>
                        {index + 1}
                    </Typography>
                    {/* <Box sx={{ mx: 1 }} /> */}
                    <Typography variant="body1" sx={{marginLeft:1}}>{ingredient}</Typography>
                </Box>
                </Grid>
            ))}
            </Grid>
          </Box>
          {/* <Typography variant="body1">
            {description}
          </Typography> */}
          
        </Grid>
      </Grid>
      <Grid container direction="column" marginY={2}>
        <Typography variant='h5' style={{fontWeight:600}}>Measure:</Typography>
        <Grid container spacing={1} sx={{marginY:1,backgroundColor:'#E5E4E2'}}>
            {meal?.measures?.map((measure, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                <Box display="flex" flexDirection="row" alignItems="center">
                <IconButton size="small" >
                    <FiberManualRecordIcon fontSize='small' color="#ff9800"/>
                </IconButton>
                    {/* <Box sx={{ mx: 1 }} /> */}
                    <Typography variant="body1" sx={{marginLeft:1}}>{measure}</Typography>
                </Box>
                </Grid>
            ))}
            </Grid>
      </Grid>
      <Grid container direction="column" marginY={2}>
        <Typography variant='h5' style={{fontWeight:600}}>Instructions :</Typography>
        <List>
            {instructions?.map((step, index) => (
                <ListItem key={index} sx={{display:'flex',alignItems:'center'}}>
                    <CheckBoxIcon fontSize='small' sx={{mr : 2, color:"#ff9800"}}/>
                    <ListItemText primary={step} />
                </ListItem>
            ))}
        </List>
      </Grid>
    </Wrapper>
  )
}

export default MealDetail