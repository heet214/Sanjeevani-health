import React from 'react';
import { TbReportAnalytics } from 'react-icons/tb';
import { RiVirusLine } from 'react-icons/ri';
import { BiDonateBlood } from 'react-icons/bi';
import { GiMedicalPack } from 'react-icons/gi';

export default function RecordVitals() {
  return (
    <div className="main_vital_container mx-5 my-5">
      <h4 className=" translate-middle-y"></h4>
      <div className="vital_container d-flex justify-content-between mx-2">
        <div className="vitals med shadow-sm">
          <GiMedicalPack />
        </div>
        <div className="vitals spo2 shadow-sm">
          <BiDonateBlood />
        </div>
        <div className="vitals report shadow-sm">
          <TbReportAnalytics />
        </div>
        <div className="vitals virus shadow-sm">
          <RiVirusLine />
        </div>
      </div>
    </div>
  );
}
