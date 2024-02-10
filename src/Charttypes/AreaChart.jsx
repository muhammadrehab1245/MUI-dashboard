import React, { useState } from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

import { kpis } from '../Data';
export const AreaChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        order:1,
        fill:true,
        label: 'Revenue',
       // data: labels.map(() => kpis.monthlyData.revenue.number({ min: 8000, max:23000 })),
       data: kpis[0].monthlyData.map((data) => parseFloat(data.revenue.slice(1))), 
       borderColor: 'green',
       backgroundColor: '#228b22',
      },
      {
        order:0,
        fill:true,
        label: 'Expenses',
       // data: labels.map(() => kpis.monthlyData.expenses.datatype.number({ min: 8000, max:23000 })),
       data: kpis[0].monthlyData.map((data) => parseFloat(data.expenses.slice(1))), 
       borderColor: 'green',
       backgroundColor: '#39ff14',

      },

    ],
  })
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      
    },
  };
      
  return (
    <div className="chart-container">
    <Line options={options} data={chartData} />
  </div>
  )
}
