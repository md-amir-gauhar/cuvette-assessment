import React from 'react'
import './SIdebarItem.css'

const SidebarItem = ({ Icon, text, active }) => {
  return (
    <div className={`sidebarItem ${active ? 'active' : ""}`}>
      {Icon}
      <p>{text}</p>
    </div>
  )
}

export default SidebarItem