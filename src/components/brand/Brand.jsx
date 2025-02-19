import React from 'react'
import './brand.css'

const Brand = () => {
  const brandsLogo = ["svg/row.svg" , "svg/zone.svg" , "svg/hanger.svg" , "svg/creative.svg" ]
  return (
  <section className="brand">
    <img src="images/pakageshap.png" alt="pakageshap" className="shap" />
    <div className="container">
      <div className="brand-box">
        {brandsLogo.map((item , index)=> <div key={index * 1.3} className="item"><img src={item} alt="row" /></div>)}
      </div>
    </div>
  </section>
  )
}

export default Brand