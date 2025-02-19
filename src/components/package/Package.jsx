import React from 'react'
import './package.css'
import Title from '../Uitlites/title/Title'
import Packageitm from '../Uitlites/packageItem/Packageitm'

const Package = () => {

    const pkgItem = [
          {
            pkgName: 'starter',
            pkgPrice : 9,
            pkgDuration: 'per month',
            featureList: ['International Air Ticket.' , ' Daily Continental Breakfast.' , ' Lunch And Dinner' , 'City Tour with Guide' , '09 Nights Hotel' , 'Desert Safari & BBQ Dinner']
        },
          {
            pkgName: 'stander',
            pkgPrice : 199,
            pkgDuration: 'per month',
            featureList: ['International Air Ticket.' , ' Daily Continental Breakfast.' , ' Lunch And Dinner' , 'City Tour with Guide' , '09 Nights Hotel' , 'Desert Safari & BBQ Dinner']
        },
          {
            pkgName: 'premium',
            pkgPrice : 499,
            pkgDuration: 'per month',
            featureList: ['International Air Ticket.' , ' Daily Continental Breakfast.' , ' Lunch And Dinner' , 'City Tour with Guide' , '09 Nights Hotel' , 'Desert Safari & BBQ Dinner']
        }
    ]
  return (
    <section className="package">
    <img src="images/pakageshap.png" alt="pakageshap" className="shap" />
    <div className="container">
      <Title titleHead={'Special Package'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'} />
      <div className="package-box">
        {pkgItem.map((item , index)=>(
            <Packageitm key={index*1.4} pkgName={item.pkgName} pkgPrice={item.pkgPrice} pkgDuration={item.pkgDuration} features={item.featureList}  />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Package