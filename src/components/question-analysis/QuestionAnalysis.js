import React from 'react'
import { GiArrowScope } from 'react-icons/gi'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './QuestionAnalysis.css'

const QuestionAnalysis = () => {
  return (
    <div className='question-analysis'>
      <div className="qa__top">
        <div className="qa__top-heading">
          <p>Question Analysis</p>
          <span>07/15</span>
        </div>
        <p><span>You scored 7 question correct out of 15.</span> However it still needs some improvements</p>
      </div>
      <div className="qa__bottom" style={{ width: 180, height: 180 }}>
        <CircularProgressbar
          styles={{
            backgroundColor: '',
            path: {
              stroke: `rgba(#438AF6, ${60 / 100})`,
              strokeLinecap: 'butt',
            }
          }}
          value={60}
          text={'🎯'}
          strokeWidth={15}

        />
      </div>
    </div>
  )
}

export default QuestionAnalysis