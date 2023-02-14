import React from 'react'
import "../App.css"

export default function HealthCard() {
  return (
    <div>
        <div classname="card health-card"  >
        <div classname="card-body">
            <h5 classname="card-title">Card title</h5>
            <h6 classname="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" classname="card-link">Card link</a>
            <a href="/" classname="card-link">Another link</a>
        </div>
        </div>
    </div>
  )
}
