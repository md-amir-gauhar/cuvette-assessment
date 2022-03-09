import React from 'react'
import './Statistics.css'

const Statistics = () => {
  return (
    <div className='statistics'>
      <span className='statistics__heading'>
        Quick Statistics
      </span>
      <div className="statistics__details">
        <div>
          <div className="logo">
            <img src="./trophy.png" alt="" />
          </div>
          <div className="details">
            <p>12,890</p>
            <span>Your Rank</span>
          </div>
        </div>
        <div>
          <div className="logo">
            <img src="./document.png" alt="" />
          </div>
          <div className="details">
            <p>37%</p>
            <span>percentile</span>
          </div>
        </div>
        <div>
          <div className="logo">
            <img src="./greentick.png" alt="" />
          </div>
          <div className="details">
            <p>07/15</p>
            <span>correct answers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics