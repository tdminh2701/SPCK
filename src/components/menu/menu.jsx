import React from 'react'
import './menu.css'
import img from '../img/Logo_White.png'
import icon1 from '../img/Group.png'
import icon2 from '../img/material-symbols-light_explore-outline.png'
import icon3 from '../img/material-symbols-light_album-outline.png'
import icon4 from '../img/healthicons_ui-user-profile-outline.png'
import icon5 from '../img/fluent-mdl2_recent.png'
import icon6 from '../img/arcticons_niagara-launcher-recently-installed.png'
import icon7 from '../img/ph_heart-light.png'
import icon8 from '../img/ph_playlist.png'
import icon9 from '../img/subway_add-playlist.png'
import icon10 from '../img/lets-icons_setting-line.png'
import icon11 from '../img/line-md_log-out.png'




document.body.style="background-color: #181818;"
function Menu() {
    const pStyle = {color:"#F5F5F5", marginLeft: "8px", marginTop: "30px"}
    const pClassname = "poppins poppins-larger"
    const selectedTab = {borderRadius: "9px", backgroundColor: "#B388FF"}


  return (
    <>
    <div className='left-side'>

    <div className='logo_container'>
        <img className='logo' src={img} alt="" />
    </div>

    <div className='poppins-medium menu'>


        <p className='poppins poppins-regular' style={pStyle}>Menu</p>

        <div className='icon' style={selectedTab}>
            <img src={icon1} alt="" /> <p className={pClassname}>Home</p>
        </div>

        <div className='icon'>
            <img src={icon2} alt="" /> <p className={pClassname}>Discover</p>
        </div>

        <div className='icon'>
            <img src={icon3} alt="" /> <p className={pClassname}>Albums</p>
        </div>

        <div className='icon'>
            <img src={icon4} alt="" /> <p className={pClassname}>Artists</p>
        </div>

        <p className='poppins' style={pStyle}>Library</p>

        <div className='icon'>
            <img src={icon5} alt="" /> <p className={pClassname}>Recently added</p>
        </div>
        <div className='icon'>
            <img src={icon6} alt="" /> <p className={pClassname}>Most played</p>
        </div>
        
        <p className='poppins' style={pStyle}>Playlist and favorite</p>

        <div className='icon'>
            <img src={icon7} alt="" /> <p className={pClassname}>Your favorites</p>
        </div>
        <div className='icon'>
            <img src={icon8} alt="" /> <p className={pClassname}>Your playlist</p>
        </div>
        <div className='icon'>
            <img src={icon9} alt=""/> <p style={{color : '#0E9EEF'}} className={pClassname}>Add playlist</p>
        </div>

    </div>

        <p className='poppins' style={pStyle}>General</p>

        <div className='icon'>
            <img src={icon10} alt=""/> <p className={pClassname}>Setting</p>
        </div>
        <div className='icon'>
            <img src={icon11} alt=""/> <p className={pClassname}>Logout</p>
        </div>


    
    </div>
    </>
  )
}

export default Menu
