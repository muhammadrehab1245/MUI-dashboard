import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { kpis } from '../Data';
import { useTheme, useMediaQuery, Box, Stack } from '@mui/material';
ChartJS.register(ArcElement, Tooltip, Legend);

export const salarydatacompare = {
  datasets: [
    {
        data: [parseFloat(kpis[0].totalExpenses.slice(1)),parseFloat(kpis[0].expensesByCategory.salaries.slice(1))],
      backgroundColor: [
        'green',
        'lightgreen',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
      rotation:88,
    },
  ],
};
export const suppliesdatacompare = {
  datasets: [
    {
      data: [parseFloat(kpis[0].totalExpenses.slice(1)),parseFloat(kpis[0].expensesByCategory.supplies.slice(1))],
      backgroundColor: [
        'green',
        'lightgreen',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
      rotation:88,
    },
  ],
};
export const servicesdatacompare = {
  datasets: [
    {
        data: [parseFloat(kpis[0].totalExpenses.slice(1)),parseFloat(kpis[0].expensesByCategory.services.slice(1))],
      backgroundColor: [
        'green',
        'lightgreen',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      
      borderWidth: 1,
      rotation:88,
    },
  ],
};



export const TripleDough = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    return ( 
        <div>
          <Stack border={'1px solid grey'}>
        <Box   display={'flex'} alignItems={'center'}    flexDirection={isMdScreen ? 'column' : 'row'} width={isMdScreen?'100%':147} height={isMdScreen?'100%':230}
       
     >

    <Doughnut data={salarydatacompare}  />
    <Doughnut data={suppliesdatacompare}  />
    <Doughnut data={servicesdatacompare}  />

        </Box>
        </Stack>
    </div>
     )
}
