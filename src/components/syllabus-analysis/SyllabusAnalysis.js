import React from 'react'
import Syllabus from '../syllabus/Syllabus'
import './SyllabusAnalysis.css'

const SyllabusAnalysis = () => {
  return (
    <div className='syllabus-analysis'>
      <p className='heading'>Syllabus wise Analysis</p>
      <div className="syllabi">
        <Syllabus text="HTML Tools, Forms, History" percentage={80} colors="#438AF6" />
        <Syllabus text="Tags & References in HTML" percentage={60} colors="#FF9142" />
        <Syllabus text="Tables & CSS Basics" percentage={24} colors="#FB5E5E" />
        <Syllabus text="Tables & CSS Basics" percentage={96} colors="#2EC971" />
      </div>
    </div>
  )
}

export default SyllabusAnalysis