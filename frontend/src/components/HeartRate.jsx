import React from 'react';

function HeartRate() {
  const rate = sessionStorage.getItem('heart_rate');

  return (
    <div className="heart_rate_container">
      <div
        className="heart-card rounded-5 p-4 mb-4 d-flex justify-content-around"
        style={{ backgroundColor: '#DCEDF9' }}>
        <div className="heart_rate_left">
          <div className="number_rate" style={{ padding: '1vh 3vh 0vw 4vw' }}>
            Heart Rate
          </div>
          <div className="num_n_unit">
            <div className="number_unit">{rate ? rate : 96}</div>
            <div className="unit">bpm</div>
          </div>
        </div>
        <div className="heart_rate_right">
          <svg
            width="150"
            height="110"
            viewBox="0 0 158 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.7002 77.5982H28.3875L38.2673 60.4606L45.1831 77.5982H53.0869L58.5208 90.5812L68.4005 0.7388L80.7502 121.221L91.1239 77.5982H104.462L115.329 52.6708L129.655 77.5982H155.38"
              stroke="#1C6BA4"
              strokeWidth="4.63524"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeartRate;
