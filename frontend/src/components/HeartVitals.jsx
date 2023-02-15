import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};   

const HeartVitals = () => {
  return (
    <div>
      <Line data={data}/><br />

        <div>
           <h4> Previous Records</h4></div>
      <div class="card">
  <div class="card-header">
    Date
  </div>
  <div class="card-body d-flex justify-content-between">
  <div className="d-inline ">BPM</div>
  <div className="d-inline">Spo2</div>
  <div className="d-inline">Stress</div>
  </div>
</div>
<div class="card">
  <div class="card-header">
    Date
  </div>
  <div class="card-body d-flex justify-content-between">
  <div className="d-inline ">BPM</div>
  <div className="d-inline">Spo2</div>
  <div className="d-inline">Stress</div>
  </div>
</div>
<div class="card">
  <div class="card-header">
    Date
  </div>
  <div class="card-body d-flex justify-content-between">
  <div className="d-inline ">BPM</div>
  <div className="d-inline">Spo2</div>
  <div className="d-inline">Stress</div>
  </div>
</div>
    </div>
  );
};

export default HeartVitals;