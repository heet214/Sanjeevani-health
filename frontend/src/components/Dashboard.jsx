import React from 'react';
import Banners from './Banners';
import DoctorCards from './DoctorCards';
import HealthCard from './HealthCard';
import RecordVitals from './RecordVitals';

export default function Dashboard() {
  var url = window.location.href;
  var urlArray = url.split('/');
  var value = urlArray[urlArray.length - 1];
  console.log(value);
  localStorage.setItem('heartRate',value)
  return (
    <div>
      <div>
        <HealthCard />
        <RecordVitals />
        <Banners />
        <DoctorCards />
      </div>
    </div>
  );
}
