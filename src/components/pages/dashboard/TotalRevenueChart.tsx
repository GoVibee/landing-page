"use client";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function TotalRevenueChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [0, 150, 200, 180, 250, 400, 500, 600, 550, 450, 500, 1000],
        fill: true,
        backgroundColor: 'rgba(233, 213, 255, 1)',
        borderColor: '#3B0A45',
        tension: 0.4, // Makes the line curved
        pointBackgroundColor: '#fff',
        pointBorderColor: '#3B0A45',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#10B981',
        pointRadius: (context: any) => context.dataIndex === 7 ? 8 : 0, // Highlight the 8th point (August)
        pointBorderWidth: (context: any) => context.dataIndex === 7 ? 3 : 0,
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
          stepSize: 100,
          callback: (value: any) => '$' + value,
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
          display: false, // Hide grid lines for x-axis
        },
        border: {
          display: false,
        }
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#0F172A',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          label: (context: any) => `${context.dataset.label}: $${context.formattedValue}`
        }
      },
    },
  };

  return <Line data={data} options={options} />;
}