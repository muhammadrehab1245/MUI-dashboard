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
} from "chart.js";

import { kpis } from '../Data';
export const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: 'Profit',
       // data: labels.map(() => kpis.monthlyData.revenue.number({ min: 8000, max:23000 })),
       data: kpis[0].monthlyData.map((data) => parseFloat(data.revenue.slice(1))-parseFloat(data.expenses.slice(1))), 
       borderColor: 'green',
        backgroundColor: '#228b22',
  
      },
      {
        label: 'Revenue',
       // data: labels.map(() => kpis.monthlyData.expenses.datatype.number({ min: 8000, max:23000 })),
       data: kpis[0].monthlyData.map((data) => parseFloat(data.revenue.slice(1))), 
       borderColor: 'green',
        backgroundColor: '#39ff14',
        overflow:'hidden'
      },
    ],
  })
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
