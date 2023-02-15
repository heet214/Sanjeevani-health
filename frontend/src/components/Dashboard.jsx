import React from 'react'
import Banners from './Banners'
import DoctorCards from './DoctorCards'
import HealthCard from './HealthCard'
import RecordVitals from './RecordVitals'


export default function Dashboard() {
  return (
    <div>
      <div >
              <HealthCard/>
              <RecordVitals/>
              <Banners/>
              {/* <DoctorCards/> */}

      </div>
    </div>
  )
}
