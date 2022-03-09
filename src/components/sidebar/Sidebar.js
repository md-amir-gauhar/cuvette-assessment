import React from 'react'
import { RiBarChartFill, RiMedalLine } from 'react-icons/ri'
import { GrCertificate, GrDocument } from 'react-icons/gr'
import SidebarItem from '../Sidebar-item/SidebarItem'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-items">
        <SidebarItem text="Dashboard" Icon={<RiBarChartFill className='icon' />} />
        <SidebarItem text="Skill Test" Icon={<RiMedalLine className='icon' />} active={true} />
        <SidebarItem text="Internships" Icon={<GrDocument className='icon' />} />
      </div>
    </div>
  )
}

export default Sidebar