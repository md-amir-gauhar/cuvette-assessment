import React from 'react'
import './Modal.css'

const Modal = () => {
  return (
    <div className='modal'>
      <div className="modal-container">
        <div className="modal__heading">
          <h2>Update Skill Scores</h2>
          <img src="./html.png" alt="html" />
        </div>
        <div className="modal__details">
          <div className="modal__detail">
            <div className="detail">
              <span>1</span>
              <p>Update your <span>rank</span></p>
            </div>
            <div className="buttons">
              <button>+</button>
              <span>10</span>
              <button>-</button>
            </div>
          </div>
          <div className="modal__detail">
            <div className="detail">
              <span>1</span>
              <p>Update your <span>rank</span></p>
            </div>
            <div className="buttons">
              <button>+</button>
              <span>10</span>
              <button>-</button>
            </div>
          </div>
          <div className="modal__detail">
            <div className="detail">
              <span>1</span>
              <p>Update your <span>rank</span></p>
            </div>
            <div className="buttons">
              <button>+</button>
              <span>10</span>
              <button>-</button>
            </div>
          </div>
        </div>
        <div className="modal__buttons">
          <button className="cancel">Cancel</button>
          <button className="save">Save <span>&#8594;</span></button>
        </div>
      </div>
    </div>
  )
}

export default Modal