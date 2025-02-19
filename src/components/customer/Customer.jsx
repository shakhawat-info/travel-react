import React from 'react'
import './customer.css'
import Title from '../Uitlites/title/Title'
import Cart from '../Uitlites/cart/Cart'

const Customer = () => {
    const customerInfo =[
        {name: 'Victoria Wotton' , job: 'Traveler, Guide' , image: "images/coustomer1.png" , stars: [1 , 2, 3 , 4 ,5] , txt:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.'},
        {name: 'Sonia Marmeladova' , job: 'Traveler, Guide' , image: "images/coustomer2.png" , stars: [1 , 2, 3 , 4 ,5] , txt:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.'},
        {name: 'Hindley Earnshaw' , job: 'Traveler, Guide' , image: "images/coustomer3.png" , stars: [1 , 2, 3 , 4 ,5] , txt:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.'},
        {name: 'Catherine Earnshaw' , job: 'Traveler, Guide' , image: "images/coustomer4.png" , stars: [1 , 2, 3 , 4 ,5] , txt:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.'},
        {name: 'Isabella Linton' , job: 'Traveler, Guide' , image: "images/coustomer5.png" , stars: [1 , 2, 3 , 4 ,5] , txt:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.'},
        {name: 'Jennifer Williams' , job: 'Traveler, Guide' , image: "images/coustomer6.png" , stars: [1 , 2, 3 , 4 ,5] , txt:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.'},
    ]
  return (
    <section className="customer">
    <div class="container">
        <Title titleHead={'customer words'} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'}  />
      <div class="word-box">
        {customerInfo.map((item , index)=><Cart key={index*1.6} name={item.name} job={item.job} icons={item.stars} style={`item ${index % 2 === 0 ? 'brand' : 'yellow'} `} /> )}
      </div>
    </div>
  </section>
  )
}

export default Customer