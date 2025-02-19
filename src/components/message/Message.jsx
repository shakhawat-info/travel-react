import React from 'react'
import './message.css'
import Button from '../Uitlites/button/Button'

const Message = () => {
  return (
  <section className="message">
    <div className="container">
      <div className="msg-box">
        <img
          src="images/messageshap.png"
          alt="messageshap"
          className="messageshap"
        />
        <div className="txt">
          <h2>How can we help?</h2>
          <p>
            Our service team is available every day 24/7 Free diagnostics for
            all types of work.
          </p>
          <Button type={'link'} style={'message'} content={'Message Us!'} />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Message