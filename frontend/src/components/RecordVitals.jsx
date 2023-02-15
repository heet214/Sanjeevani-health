import React from 'react';
import { TbReportAnalytics } from 'react-icons/Tb';
import { RiVirusLine } from 'react-icons/Ri';
import { BiDonateBlood } from 'react-icons/Bi';
import { GiMedicalPack } from 'react-icons/Gi';

export default function RecordVitals() {
  return (
    <div className="main_vital_container mx-5 my-5">
      <h4 className=" translate-middle-y">Record Vitals</h4>
      <div className="vital_container d-flex justify-content-between ">
        <div className="vitals med shadow">
          <GiMedicalPack size="25x" />
        </div>
        <div className="vitals spo2 shadow-sm">
          <BiDonateBlood size="25x" />
        </div>
        <div className="vitals report shadow-sm">
          <TbReportAnalytics size="25x" />
        </div>
        <div className="vitals virus shadow-sm">
          <RiVirusLine size="25x" />
        </div>
      </div>
          
    </div>
  );
}
