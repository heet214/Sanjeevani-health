import React from 'react'

function HeartRate() {
  return (
    <div >

        <div className="heart-card rounded-5 position-absolute top-0 start-50 translate-middle-x my-5 shadow p-3 mb-5" style={{backgroundColor:"#DCEDF9"}}  >
        <div className="rate">
            <div className="number_rate" style={{padding:"1vh 3vh 0vw 4vw"}}>Heart Rate</div>
            <div className="num_n_unit">
            <div className="number_unit">96</div>
            <div className="unit">. bpm</div>
            </div>
        </div>
        <div className="card-body my-2">
            
            
        </div>
        </div>
    </div>
  )
}

export default HeartRate