import React, { Component } from 'react'
import background from '../assets/background1.png'
export class Intro1 extends Component {
  render() {
    return (
      <div className='container'>
        <img src={background} alt="" style={{height : '100%', width:'100%'}}/>
        
      </div>
    )
  }
}

export default Intro1
