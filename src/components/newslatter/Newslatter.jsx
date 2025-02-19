import React from 'react'
import './newslatter.css'
import Input from '../Uitlites/inputbox/Input'
import Button from '../Uitlites/button/Button'

const Newslatter = () => {
    const newslatterimg = ["images/news1.png" , "images/news2.png" , "images/news3.png"]
  return (
    <section className="newslatter">
      <div className="container">
        <div className="newslatter-box">
            {newslatterimg.map((item , index)=>  <div key={index * 1.2} className="item"><img src={item} alt="news1" /></div> )}
          <div className="item">
            <span className="offer">subscribe for offers</span>
            <h2>
              <span>to get all news</span>
              <span>subscribe our</span>
              <span>newslatter</span>
            </h2>
            <div className="newsForm">
              <Input icon={'svg/email.svg'}/>
              <Button type={'submit'} style={'newslatterBtn'} content={"Let's Go"}  />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newslatter