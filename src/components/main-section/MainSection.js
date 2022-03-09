import React from 'react'
import Graph from '../graph/Graph'
import Language from '../language/Language'
import QuestionAnalysis from '../question-analysis/QuestionAnalysis'
import SyllabusAnalysis from '../syllabus-analysis/SyllabusAnalysis'
import Statistics from '../statistics/Statistics'
import './mainSection.css'

const MainSection = ({ handleClick }) => {
  return (
    <div className='main-section'>
      <p>Skill Test</p>
      <div className="main-container">
        <div className="main-container__left">
          <Language handleClick={handleClick} />
          <Statistics />
          <Graph />
        </div>
        <div className="main-container__right">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  )
}

export default MainSection