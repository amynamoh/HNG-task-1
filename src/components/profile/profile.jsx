import React from 'react'
import './profile.css'
import profilePicture from '../../assets/mee'
import AvatarIcon from '../../assets/icon.png'
import Cursor from '../../assets/Cursor.png'
import Tooltip from '../../assets/Tooltip.png'
import profilePictureHover from '../../assets/meehover.png'
import Menu from '../../assets/menuIcon.png'


const profile = () => {
  return (
    <section className='profileSection'>
      <div className="user">
          <img id='profile__img' src={profilePicture} alt="profilePicture" />
          <img id='profile_img_hover' src={profilePictureHover} alt="profilePictureHover" />
      </div>
        <div id='twitter'>
            <h1>amynamoh</h1>
        </div>
        <h2 id='slack'>Amina Mohammed</h2>
        <i></i>
        <div id="avatarDash">
            <div id="avatarContent">
                <img id='AvatarIcon' src={AvatarIcon} alt="" />
                <img id='cursor' src={Cursor} alt="" />
                <img id='Tooltip' src={Tooltip} alt="" />
            </div>
        </div>
        <div id="menuDash">
            <div id="menuContent">
                <img id='menuIcon' src={Menu} alt="" />
            </div> 
        </div>
    </section>
  )
}

export default profile