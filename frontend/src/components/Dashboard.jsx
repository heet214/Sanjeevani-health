import React from 'react';
import Banners from './Banners';
import HealthCard from './HealthCard';
import RecordVitals from './RecordVitals';

export default function Dashboard() {
  return (
    <div>
      <div>
        <HealthCard />
        <RecordVitals />
        <Banners />
      </div>
    </div>
  );
}
