import { useState } from 'react'
import Nav from './components/nav/Nav'
import Banner from './components/banner/Banner'
import Destinetion from './components/destinetion/Destinetion'
import Booking from './components/booking/Booking'

function App() {

  return (
    <>
      <Nav/>
      <Banner/>
      <Destinetion/>
      <Booking/>
    </>
  )
}

export default App
