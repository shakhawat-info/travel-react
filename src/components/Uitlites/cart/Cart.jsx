import React from 'react'
import './cart.css'

const Cart = ({style , name , icons , job}) => {
  return (
    <div class={style}>
          <img class="profile" src="images/customer6.png" alt="customer6" />
          <h3>{name}</h3>
          <h4>{job}</h4>
          {/* <ul>
            {icons.map((item)=> <li><img src="/svg/star.svg" alt="star" /></li>)}
          </ul> */}
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
    </div>
  )
}

export default Cart