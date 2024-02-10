import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { kpis } from '../Data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const MultiLine = () => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [chartData, setChartData] = useState({
    labels,

    datasets: [
      {
        label: 'Operational',
        data: kpis[0].monthlyData.map((data) => parseFloat(data.operationalExpenses.slice(1))),
        borderColor: 'green',
        backgroundColor: '#228b22',
        tension:0.4,
        yAxisID: 'y',
      },
      {
        label: 'Non Operational',
        data: kpis[0].monthlyData.map((data) => parseFloat(data.nonOperationalExpenses.slice(1))),
        borderColor: 'green',
        backgroundColor: '#39ff14',
        tension:0.4,
        yAxisID: 'y1',
      },
    ],
  })

    const options = {
      maintainAspectRatio: false,
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
    
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
         
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };
      
      return <Line options={options} data={chartData} />;
}
