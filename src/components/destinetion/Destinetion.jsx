import React from 'react'
import './destinetion.css'
import Title from '../Uitlites/title/Title'

const Destinetion = () => {
  return (
  <section className="destination">
    <div className="container">
      <div className="destination-box">
        <Title  ttlheadclr='brand' title={'featured destination'} titleHead={'choose the perfect accommodation'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'} />
        <div className="video">
          <img src="images/destination.png" alt="destination" />
          <div className="play">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Destinetion