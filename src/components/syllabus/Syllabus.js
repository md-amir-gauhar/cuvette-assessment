import React, { useEffect, useState } from 'react'
import './Syllabus.css'

const Syllabus = ({ text, percentage, colors, bgColor }) => {
  const [percent] = useState(percentage)

  const myStyle = {
    backgroundColor: `${colors}`,
    height: '100%',
    width: `${percent}%`,
    borderRadius: '100px',
  }


  return (
    <div className='syllabus'>
      <div className="syllabus__left">
        <p>{text}</p>
        <div className='slider' style={{ backgroundColor: `${bgColor}` }}>
          <div className="range" style={myStyle}></div>
          {/* <ProgressBar colorShift={true} fillColor={bgColor} percent={percent} height='10px' /> */}
        </div>

      </div>
      <div className="syllabus__right">
        <p>{percent}%</p>
      </div>
    </div>
  )
}

export default Syllabus