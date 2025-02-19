import React from 'react'
import './title.css'

const Title = ({title , titleHead , description , ttlclr , ttlheadclr , desclr}) => {
  return (
  <div class="title">
    <span className={ttlclr}>{title}</span>
    <h2  className={ttlheadclr}>{titleHead}</h2>
    <p className={desclr} >{description}</p>
  </div>
  )
}

export default Title