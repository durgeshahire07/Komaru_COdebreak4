import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({data}) => {
    // console.log(data)
  return (
    <div>
      <Pie data={data} />
    </div>
  )
}

export default Chart
