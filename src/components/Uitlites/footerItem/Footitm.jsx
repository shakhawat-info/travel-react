import React from 'react'
import Button from '../button/Button'

const Footitm = ({footHead , link}) => {
  return (
  <div class="item">
    <h2>{footHead}</h2>
    <ul>
        {link.map((item , index)=><li key={index*2.1}><Button type={'link'} content={item} /></li>)}
    </ul>
  </div>
  )
}

export default Footitm