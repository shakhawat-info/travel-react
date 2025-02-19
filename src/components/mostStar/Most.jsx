import React from 'react'
import './most.css'
import Title from '../Uitlites/title/Title'

const Most = () => {
    const mostImg = ['images/most1.png' , 'images/most2.png' , 'images/most3.png' , 'images/most4.png' , 'images/most5.png' , 'images/most6.png' , 'images/most7.png' , 'images/most8.png']
  return (
    <section className="most">
      <div className="container">
        <Title titleHead={'Most Destinations'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}  />
        <div className="most-destination">
            {mostImg.map((item , index)=><div key={index * 9.1} className="item"><img src={item} alt="most" /></div>)}
        </div>
      </div>
    </section>
  )
}

export default Most