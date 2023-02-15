import React from 'react'
import {Bar} from 'react-chartjs-2'

function HeartVitals() {
  return (
    <div>
        <Bar
        data={{
            labels:['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'],
            datasets:[{
                
            }]
        }}
        height={80}
        width={50}
        options={{
            maintainAspectRatio:false
        }}
        />

    </div>
  )
}

export default HeartVitals  