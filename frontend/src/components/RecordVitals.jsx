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
        <div
          onClick={() => {
            window.location = '/spo2';
          }}
          className="vitals med shadow-sm">
          <GiMedicalPack size={35}/>
        </div>
        <div
          onClick={() => {
            window.location = '/heart';
          }}
          className="vitals spo2 shadow-sm">
          <BiDonateBlood size={35} />
        </div>
        <div
          onClick={() => {
            window.location = '/bpm';
          }}
          className="vitals report shadow-sm">
          <TbReportAnalytics size={35} />
        </div>
        <div
          onClick={() => {
            window.location = '/stress';
          }}
          className="vitals virus shadow-sm">
          <RiVirusLine size={35} />
        </div>
      </div>
    </div>
  );
}
