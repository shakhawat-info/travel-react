import { useState } from 'react'
import Nav from './components/nav/Nav'
import Banner from './components/banner/Banner'
import Destinetion from './components/destinetion/Destinetion'
import Booking from './components/booking/Booking'
import Package from './components/package/Package'
import Memories from './components/memories/Memories'
import Most from './components/mostStar/Most'
import Counter from './components/counter/Counter'
import Newslatter from './components/newslatter/Newslatter'
import Brand from './components/brand/Brand'
import Customer from './components/customer/Customer'
import Message from './components/message/Message'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Nav/>
      <Banner/>
      <Destinetion/>
      <Booking/>
      <Package/>
      <Memories/>
      <Most/>
      <Counter/>
      <Newslatter/>
      <Brand/>
      <Customer/>
      <Message/>
      <Footer/>
    </>
  )
}

export default App
