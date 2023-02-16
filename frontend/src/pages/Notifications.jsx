import React, { useEffect } from 'react';
import '../css/notification.css';
function notifications() {
  useEffect(() => {
    const oxygen = JSON.parse(sessionStorage.getItem('cheatUser'));
    console.log(oxygen);
    if (lastOxy > 70) {
      alert('Please  ');
    }
  });
  return (
    <>
      <div className="Container">
        <p className="">Notifications</p>
        <div className="notificationContainer">
          <img
            className="bellIcon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM8wmBn2wptzrg9hvnKFYkTCjb76L9OigoQ5gzd-L9EJgAHNUr9YhSetUHNzW6q6UwA4&usqp=CAU"
            alt=""
          />
          <div className="notificationContent">
            <div className="">
              Your Heart rate is not normal , Please consult a Cardiologist
            </div>

            <div className="buttonsContainer">
              <button className="stroke">Cancle</button>
              <button className="fill">Book an Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Container">
        <p className="">Notifications</p>
        <div className="notificationContainer">
          <img
            className="bellIcon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM8wmBn2wptzrg9hvnKFYkTCjb76L9OigoQ5gzd-L9EJgAHNUr9YhSetUHNzW6q6UwA4&usqp=CAU"
            alt=""
          />
          <div className="notificationContent">
            <div className="">
              Your Oxygen rate is not normal , Please consult a Cardiologist
            </div>

            <div className="buttonsContainer">
              <button className="stroke">Cancle</button>
              <button className="fill">Book an Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default notifications;
