import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Modal from '../../components/modal/Modal'
import Main from '../main/Main'

import './Home.css'

const Home = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(open => !open)
    console.log(open)
  }
  
  return (
    <div className='home'>
      {open ? <Modal /> : null}
      <Header />
      <Main handleClick={handleClick} />
    </div>
  )
}

export default Home