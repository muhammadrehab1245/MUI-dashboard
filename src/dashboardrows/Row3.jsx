import React from 'react'
import { ProductTable } from '../Charttypes/ProductTable'
import { Grid } from '@mui/material'
import { OrderTable } from '../Charttypes/OrderTable'
import { TripleDough } from '../Charttypes/TripleDough'

export const Row3 = () => {
  return (
    <>
    <Grid item  xs={7} sm={6} md={5} lg={4}>


    <ProductTable/>
 
    
    </Grid>
    <Grid item xs={7} sm={6} md={5} lg={4} >
 

    <OrderTable/>

    
    </Grid>
    <Grid item xs={7} sm={6} md={5} lg={4}>
 

    <TripleDough/>
 
    
    </Grid>
    </>
  )
}
