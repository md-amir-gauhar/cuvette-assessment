import React, { useState } from 'react'
import './language.css'

const Language = ({ handleClick }) => {

  return (
    <div className='language'>
      <div className="language__left">
        <div className="language__logo">
          <img src="./html.png" alt="html" />
        </div>
        <div className="language__description">
          <p>Hypertext Markup Language</p>
          <span>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</span>
        </div>
      </div>

      <div className="language__right">
        <button onClick={() => handleClick()}>Update</button>
      </div>
    </div>
  )
}

export default Language