import React from 'react'
import './button.css'

const Button = ({type , style , content , icon , ref}) => {
  return (
    type == 'link' ? 
    <a href={ref ? ref : '#'} className={style}> {icon ? <img src={content}/> : content}</a> : 
    <button className={style} type={type}  >{icon ? <img src={content}/> : content}</button>
  )
}

export default Button