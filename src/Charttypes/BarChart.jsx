import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { kpis } from '../Data';
export const BarChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          
        },
        scales: {
          x: {
            categorySpacing: 0.2,
          },
      
        },
      };
      const [chartData, setChartData] = useState({
        labels,
        datasets: [
          {
            label:'Revenue Month By Month',
            fill:'origin',
            labels: 'Revenue',
           // data: labels.map(() => kpis.monthlyData.revenue.number({ min: 8000, max:23000 })),
           data: kpis[0].monthlyData.map((data) => parseInt(data.revenue.slice(1))), 
           borderColor: 'black',
           backgroundColor: 'green',
      
          }
        ],
      })
  return (
    <Bar options={options} data={chartData} />
  )
}
