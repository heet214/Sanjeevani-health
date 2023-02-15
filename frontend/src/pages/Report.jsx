import React, { useEffect, useState } from 'react';
import HeartRate from '../components/HeartRate';
import Oxygen from '../components/Oxygen';
import Weight from '../components/Weight';
import Documents from '../components/Documents';

function Report() {
  const [bpm, setBpm] = useState('');
  useEffect(() => {
    if (!localStorage.getItem('cheatUser')) return (window.location = '/login');
    const user = JSON.parse(localStorage.getItem('cheatUser'));
    console.log(user);
    setBpm(user[0].name);
  }, []);

  return (
    <div className="report_container">
      <div className="report_page_heading">Reports</div>
      <div className="first_row_container">
        <HeartRate />
      </div>
      <div className="second_row_container">
        <Oxygen />
        <Weight />
      </div>
      <div className="third_row_container">
        <Documents />
      </div>
    </div>
  );
}

export default Report;
