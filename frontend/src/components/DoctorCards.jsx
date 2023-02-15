import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function DoctorCards() {
  const [docs, setDocs] = useState('');
  useEffect(() => {
    axios
      .get('../doctor.json')
      .then((response) => {
        console.log(response.data);
        const doctors = response.data;
        localStorage.setItem('doctors', JSON.stringify(doctors));
        const docList = JSON.parse(localStorage.getItem('doctors'));
        console.log('docList', docList);
        setDocs(docList[0].name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ marginLeft: '7%' }}>
      <div
        className="Doc"
        style={{
          margin: '-26px',
        }}>
        <h4>Doctors</h4>
      </div>

      <div
        className="d-flex flex-row mb-2"
        style={{ marginTop: '3rem', marginLeft: '1rem' }}>
        <div
          className="card docCard p-2"
          style={{ height: '13rem', width: '45%', marginLeft: 'auto' }}>
          <img src="" className="card-img-top" alt="doc1" />
          <div className="card-body">
            <h5 className="card-title">{docs}</h5>
            <p className="card-text">General physician near you</p>
            <a href="/" className="btn btn-primary">
              Contact
            </a>
          </div>
        </div>
        <div
          className="card docCard p-2"
          style={{ height: '13rem', width: '45%', marginLeft: 'auto' }}>
          <img src="" className="card-img-top" alt="doc1" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">General physician near you</p>
            <a href="/" className="btn btn-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
