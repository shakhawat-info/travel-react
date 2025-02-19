import React from 'react'
import './memories.css'
import Title from '../Uitlites/title/Title'

const Memories = () => {
  return (
    <section className="memori">
    <div className="container">
      <div className="memori-box">
        <img src="images/memorishap.png" alt="memorishap" className="shap" />
        <div className="image">
          <img src="images/memoriimage.png" alt="memoriimage" />
        </div>
        <div className="txt"> 
         <Title ttlclr={'white'} ttlheadclr={'white'} desclr={'white'} title={'featured destinations'} titleHead={'take only'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}  />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Memories