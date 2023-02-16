import React, { useEffect } from 'react'

function Stress() {
    useEffect(() => {
        window.location.href = "http://127.0.0.1:5000/stress"
    }, [] )
  return (
    <div>Stress</div>
  )
}

export default Stress