import React from 'react';
import Banners from './Banners';
import DoctorCards from './DoctorCards';
import HealthCard from './HealthCard';
import RecordVitals from './RecordVitals';

export default function Dashboard() {
  return (
    <>
      <HealthCard />
      <RecordVitals />
      <Banners />
      <DoctorCards />
    </>
  );
}
