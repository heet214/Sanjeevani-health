import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const labels = ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [76, 78, 72, 77, 75, 85, 84],
    },
  ],
};

const HeartVitals = () => {
  return (
    <div>
      <Line data={data} />
      <br />

      <div>
        <h4> Previous Records</h4>
      </div>
      <div className="card">
        <div class="card-header">Date</div>
        <div className="card-body d-flex justify-content-between">
          <div className="d-inline ">BPM</div>
          <div className="d-inline">Spo2</div>
          <div className="d-inline">Stress</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Date</div>
        <div className="card-body d-flex justify-content-between">
          <div className="d-inline ">BPM</div>
          <div className="d-inline">Spo2</div>
          <div className="d-inline">Stress</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Date</div>
        <div className="card-body d-flex justify-content-between">
          <div className="d-inline ">BPM</div>
          <div className="d-inline">Spo2</div>
          <div className="d-inline">Stress</div>
        </div>
      </div>
    </div>
  );
};

export default HeartVitals;
