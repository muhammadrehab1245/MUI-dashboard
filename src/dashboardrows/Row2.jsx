import React from 'react'
import { MultiLine } from '../Charttypes/MultiLine'
import {  Grid, Stack,  } from '@mui/material'
import { DoughChart } from '../Charttypes/DoughChart'
import { ScatterChart } from '../Charttypes/ScatterChart'
import { BasicBox } from '../CompoBox/Box1'
import styled from '@emotion/styled'

export const Row2 = () => {
   const PositionStack = styled(Stack)(({ theme })=>({

    position:'relative',bottom:16,
    [theme.breakpoints.down('md')]: {
      position:'static',
      bottom:0,
    },
  }))
  return (
    <>
    <Grid item xs={7} sm={6} md={5} lg={4}>
    <BasicBox   >

<MultiLine/>

</BasicBox>
</Grid>
<Grid item xs={7} sm={6} md={5} lg={4}>
<BasicBox  >




<DoughChart/>
  

</BasicBox>

</Grid>
<Grid item xs={7} sm={6} md={5} lg={4}>
<PositionStack>
<BasicBox>

<ScatterChart/>

</BasicBox>
</PositionStack>

</Grid>
</>
  )
}
