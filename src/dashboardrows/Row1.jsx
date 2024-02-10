import React from 'react'
import { AreaChart } from '../Charttypes/AreaChart';
import { Grid } from '@mui/material';
import { LineChart } from '../Charttypes/LineChart';
import { BarChart } from '../Charttypes/BarChart';
import { BasicBox } from '../CompoBox/Box1';
export const Row1 = () => {
  return (
    <>
          <Grid item xs={7} sm={6} md={5} lg={4}>
          <BasicBox>

      <AreaChart/>
  
    </BasicBox>
  </Grid>
  <Grid item xs={7} sm={6} md={5} lg={4} >
  <BasicBox >

   
      <LineChart/>

    </BasicBox>

  </Grid>
  <Grid item xs={7} sm={6} md={5} lg={4}>
  <BasicBox >

   
      <BarChart/>

    </BasicBox>

  </Grid>
 </>
  )
}
