import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
        <img src="./logo.png" alt="" />
      </div>
      <div className="header__right">
        <div className="header__right--profile">
          <img src="https://animecorner.me/wp-content/uploads/2022/01/roronoza-zoro-statue-in-japan.jpg" alt="avatar" className="avatar" />
          <p>Roronoa Zoro</p>
        </div>
      </div>
    </div>
  )
}

export default Header