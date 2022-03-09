import React from 'react'
import './Graph.css'

const Graph = () => {
  return (
    <div className='graph'>
      <div className="graph__top">
        <div className="graph__top--left">
          <div className="graph__heading">
            <p>Comparison Graph</p>
          </div>
          <div className="graph__text">
            <p><span>You scored 37% percentile</span> which is lower than the</p>
            <p>average scroe percentile 72% of all the engineers who took this assessment.</p>
          </div>
        </div>
        <div className="graph__top--right">
          <img src="./graph.png" alt="" />
        </div>
      </div>
      <div className="graph__bottom">
        <div className="graph-container">
          <div className="color-blue">
            <div className="blueline"></div>
          </div>
          <div className="graph__units">
          <span>0%</span>
          <span>20%</span>
          <span>40%</span>
          <span>60%</span>
          <span>80%</span>
          <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph