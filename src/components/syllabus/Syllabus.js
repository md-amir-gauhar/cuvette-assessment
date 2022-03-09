import React from 'react'
import './Syllabus.css'

const Syllabus = ({ text, percentage, colors }) => {
  const myStyle = {
    backgroundColor: `${colors}`,
    width: `${percentage}px`,
    height: '10px',
  }
  return (
    <div className='syllabus'>
      <div className="syllabus__left">
        <p>{text}</p>
        <div className='slider' style={{ backgroundColor: `${colors}` }}>
          <div className="range" style={myStyle}></div>
        </div>
      </div>
      <div className="syllabus__right">
        <p>{percentage}%</p>
      </div>
    </div>
  )
}

export default Syllabus