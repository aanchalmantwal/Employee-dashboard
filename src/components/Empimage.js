import React from 'react'
import './Empimage.css'
import profileImage from '../images/profileside.png'
const Empimage = () => {
  return (
    <div className="empimage-wrapper"> 
     {/* Display date and time */}
    <div className="empimage-info">
      <p className="date">March 30, 2024</p>
      <p className="time">09:38 AM</p>
    </div>
    {/* Display profile image */}
    <div className="empimage-container">
    <img src={profileImage} alt="Profile" className="empimage" />
  </div>
  </div>
  )
}

export default Empimage
