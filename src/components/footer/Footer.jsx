import React from 'react'
import './footer.css'
import Footitm from '../Uitlites/footerItem/Footitm'
import Button from '../Uitlites/button/Button'

const Footer = () => {

    const footItms = [
        {footHead: 'quick links' , links: ['help' , 'about' , 'press' , 'blog' , 'contact us']},
        {footHead: 'legal stuff' , links: ['terms of use' , 'cookies' , 'privacy policy' , 'security policy' , 'money back guarantee']},
        {footHead: 'our team' , links: ['testimonials' , 'affiliates' , 'partners' , 'desigital marketing' ]},
        {footHead: 'featured services' , links: ['local SEO' , 'social media marketing' , 'marketing management' , 'search engine optimization' , 'free SEO analysis']},
    ]

    const footericons = ['/svg/message.svg' , "/svg/send.svg" , "/svg/love.svg" , "/svg/plus.svg"]
  return (
    <footer className="footer">
    <div className="container">
      <div className="foot-box">
        {footItms.map((item , index)=>(
            <Footitm key={index*1.7} footHead={item.footHead} link={item.links} />
        ))}
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="copyright-box">
          <div className="txt">
            <p>Copyright 2023-2026 example.com</p>
            <ul>
                {footericons.map((item , index)=> <li key={index*1.9}><Button type={'link'} icon={true} content={item} /></li>)}
            </ul>
            <p>Terms of service Privacy policy ookie policy.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer