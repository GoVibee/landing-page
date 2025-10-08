"use client";
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

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function TotalOrdersChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Orders',
        data: [220, 500, 800, 300, 750, 200],
        backgroundColor: '#3B0A45',
        borderColor: '#3B0A45',
        borderWidth: 0.5,
        borderSkipped: false, // 👈 ensures all corners can be rounded
        borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 0, bottomRight: 0 },
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 1000,
        ticks: {
          stepSize: 200,
          color: '#6B7280',
        },
        grid: {
          display: true,
          color: 'rgba(107, 114, 128, 0.1)',
          borderDash: [3, 3],
        },
         border: {
          display: false,
        }
      },
      x: {
        ticks: {
          color: '#6B7280',
        },
        grid: {
          display: false,
        },
         border: {
          display: false,
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#0F172A',
        padding: 10,
        cornerRadius: 6,
        displayColors: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
}