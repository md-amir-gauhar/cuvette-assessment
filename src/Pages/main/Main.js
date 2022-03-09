import React from 'react'
import MainSection from '../../components/main-section/MainSection'
import Sidebar from '../../components/sidebar/Sidebar'

import './main.css'

const Main = ({ handleClick }) => {
  return (
    <div className='main'>
      <Sidebar />
      <MainSection handleClick={handleClick} />
    </div>
  )
}

export default Main