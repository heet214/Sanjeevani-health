import React from 'react';
import HeartRate from '../components/HeartRate';
import Oxygen from '../components/Oxygen';
import Weight from '../components/Weight';
import Documents from '../components/Documents';
import img1 from '../assets/runningPerson.jpeg'

function Report() {
  // const [bpm, setBpm] = useState('');
  // useEffect(() => {
  //   if (!sessionStorage.getItem('cheatUser'))
  //     return (window.location = '/login');
  //   const user = JSON.parse(sessionStorage.getItem('cheatUser'));
  //   console.log(user);
  //   setBpm(user[0].name);
  // }, []);

  var url = window.location.href;
  var urlArray = url.split('/');
  console.log('urlArray', urlArray);
  var value = urlArray[urlArray.length - 1];
  console.log('value', value);
  if (value === 'report') {
    sessionStorage.setItem('heart_rate', 81);
  } else {
    sessionStorage.setItem('heart_rate', value);
  }

  return (
    <div className="report_container">
      <div className="report_page_heading">Reports</div>
      <div
        onClick={() => {
          window.location = '/heart';
        }}
        className="first_row_container">
        <HeartRate />
      </div>
      <div
        onClick={() => {
          window.location = '/spo2';
        }}
        className="second_row_container">
        <Oxygen />
        <Weight />
      </div>
      <div className="third_row_container">
        <img src={img1} width='100%'  height='100%'  />
      </div>
    </div>
  );
}

export default Report;
