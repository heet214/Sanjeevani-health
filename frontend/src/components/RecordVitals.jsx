import React from 'react';
import { TbReportAnalytics } from 'react-icons/tb';
import { RiVirusLine } from 'react-icons/ri';
import { BiDonateBlood } from 'react-icons/bi';
import { GiMedicalPack } from 'react-icons/gi';
import {TbReport} from 'react-icons/tb'
import {AiFillHeart} from 'react-icons/ai'
import {GiBrain} from 'react-icons/gi'

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
          <RiVirusLine size={35}/>
        </div>
        <div
          onClick={() => {
            window.location = '/heart';
          }}
          className="vitals spo2 shadow-sm">
          <TbReport size={35} />
        </div>
        <div
          onClick={() => {
            window.location = '/bpm';
          }}
          className="vitals report shadow-sm">
          <AiFillHeart size={35} />
        </div>
        <div
          onClick={() => {
            window.location = '/stress';
          }}
          className="vitals virus shadow-sm">
          <GiBrain size={35} />
        </div>
      </div>
    </div>
  );
}
