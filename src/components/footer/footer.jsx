import React from 'react'
import Zuri from '../../assets/zuri.png'
import I4g from '../../assets/I4G.png'
import './footer.css'


const footer = () => {
  return (
    <footer>
      <div className="footContent">
        <img src={Zuri} alt=""/>
        <h3 id='footerText'>HNG Internship 9 Frontend Task</h3>
        <img src={I4g} alt=""/>

      </div>
    </footer> 
  )
}

export default footer