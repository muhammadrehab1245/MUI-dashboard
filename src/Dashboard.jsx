import React from 'react'
import { Row1 } from './dashboardrows/Row1'
import { Grid } from '@mui/material'
import { Row2 } from './dashboardrows/Row2'
import { Row3 } from './dashboardrows/Row3'

export const Dashboard = () => {
  return (
    <Grid container   justifyContent={'center'} columnSpacing={2} rowSpacing={3}>

   <Row1/>
   <Row2/>
   <Row3/>
    </Grid>
  )
}
