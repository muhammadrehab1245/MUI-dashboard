import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Campaigns', 'Targets'],
  datasets: [
    {
      data: [40,60],
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

const options = {
  responsive: true,
  maintainAspectRatio: false,
};


export const DoughChart = () => {
   
    return <Doughnut data={data} options={options}  />;
}
