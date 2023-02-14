import React from 'react'
import {TbReportAnalytics} from 'react-icons/Tb'
import {RiVirusLine} from 'react-icons/Ri'
import {BiDonateBlood} from 'react-icons/Bi'
import {GiMedicalPack} from 'react-icons/Gi'

export default function RecordVitals() {
  return (
    <div className='main_vital_container'>
        <h4 className=' translate-middle-y'>Record Vitals</h4>
        <div className='vital_container d-flex justify-content-between '>
          <div className='vitals'><GiMedicalPack size="25x"/></div>
          <div className='vitals'><BiDonateBlood size="25x"/></div>
          <div className='vitals'><TbReportAnalytics size="25x"/></div>
          <div className='vitals'><RiVirusLine size="25x"/></div>
        </div>

    </div>
  )
}
