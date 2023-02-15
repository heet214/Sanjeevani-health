import React from 'react';
import HeartRate from '../components/HeartRate';
import Oxygen from '../components/Oxygen';
import Weight from '../components/Weight';
function Report() {
  return (
    <div className="report_container">
      <div className="first_row_container">
        <HeartRate />
      </div>
      <div className="second_row_container">
        <Oxygen />
        <Weight />
      </div>
    </div>
  );
}

export default Report;
