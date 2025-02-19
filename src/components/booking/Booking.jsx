import React from 'react'
import './booking.css'
import Button from '../Uitlites/button/Button'


const Booking = () => {

    const star = ['/svg/star.svg' , '/svg/star.svg' , '/svg/star.svg' , '/svg/star.svg']

  return (
    <section className="booking">
    <div className="container">
      <div className="booking-box">
        <div className="locatrate">
          <h3>travel location</h3>
          <ul>
            {star.map((item , index)=> <li key={index*1.3}><Button type={'link'} icon={true} content={item} /></li>)}
          </ul>
        </div>
        <div className="price">
          <p>tour price</p>
          <h3><i className="fa-solid fa-dollar-sign"></i><span>12,599</span></h3>
        </div>
        <div className="book">
          <a href="#">book now</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Booking