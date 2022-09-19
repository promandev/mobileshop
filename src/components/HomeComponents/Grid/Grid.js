import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardComponent from '../Card/CardComponent';

function ResponsiveGrid() {

  return (
    <div className='Grid-container'>
      <Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent={'center'}>
          <CardComponent/>
        </Grid>
      </Box>
    </div>
  );
}

export default ResponsiveGrid;