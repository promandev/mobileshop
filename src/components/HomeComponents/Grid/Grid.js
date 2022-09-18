import React, {useContext} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Context as ProductsContext} from "../../../context/productsContext"
import CardComponent from '../Card/CardComponent';


const MOCK_DATA = [
    {
        item: 1
    },
    {
        item: 2
    },
    {
        item: 3
    },
    {
        item: 4
    },
    {
        item: 5
    },
    {
        item: 6
    },
    {
        item: 7
    },
    {
        item: 8
    },
  ]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const { state: productState } = useContext(ProductsContext)
  // {console.log('tatarara', productState.products)}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} >
        {productState.products.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} >
            <Item key={index}>
              <CardComponent key={item.id} image={item.image} brand={item.brand} model={item.model} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}