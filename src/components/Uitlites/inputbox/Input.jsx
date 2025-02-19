import React from 'react'
import './input.css'

const Input = ({icon}) => {
  return (
  <form action="#">
    <label for="newsmail"><img src={icon} alt="email" />
      <input  type="email" id="newsmail" placeholder="enter your email" required="required" />
    </label>
  </form>
  )
}

export default Input