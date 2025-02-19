import React from 'react'
import './counter.css'

const Counter = () => {
    const counterItm =[
        {counterNmbr: 800 , countertxt: 'subscribers' , unit: 'K'},
        {counterNmbr: 2.3 , countertxt: 'followers'},
        {counterNmbr: 1.7 , countertxt: 'likes'},
        {counterNmbr: 4.5 , countertxt: 'rating'},
    ]
  return (
    <section className="counter">
      <img src="images/pakageshap.png" alt="pakageshap" className="pakageshap" />
      <div className="container">
        <div className="count-box">
        {counterItm.map((item , index)=> (
          <div className="item" key={index*2.2}>
            <h2><span className="count">{item.counterNmbr}</span><span>{item.unit}</span></h2>
            <p>{item.countertxt}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Counter