import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { products } from '../Data';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Price and Expense',
      data: products.map(item => ({
        x: parseFloat(item.price.slice(1)),
        y: parseFloat(item.expense.slice(1)),
      })),
      backgroundColor: 'green',
    }
  ],
};
export function ScatterChart() {
   
  return <Scatter options={options} data={data} />;
}
