import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ['HTML/CSS', 'JavaScript', 'Python', 'C/C++', 'Databases (DBMS)', 'Cloud (Azure/AWS)', 'ServiceNow'],
  datasets: [
    {
      label: 'Proficiency',
      data: [9, 8, 8, 7, 8, 7, 9], // Dummy proficiency levels (out of 10)
      backgroundColor: 'rgba(144, 202, 249, 0.2)',
      borderColor: 'rgba(144, 202, 249, 1)',
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    r: {
      angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
      grid: { color: 'rgba(255, 255, 255, 0.2)' },
      pointLabels: { color: '#e0e0e0', font: { size: 14 } },
      ticks: {
        color: '#e0e0e0',
        backdropColor: 'rgba(0, 0, 0, 0)',
        stepSize: 2,
      },
      min: 0,
      max: 10,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

const Skills = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: '600' }}>
        Technical Skills
      </Typography>
      <Paper elevation={3} sx={{ p: 3, background: '#1e1e1e', height: '500px' }}>
        <Radar data={data} options={options} />
      </Paper>
    </Box>
  );
};

export default Skills;