import React from 'react'
import imageOne from "../../assets/imageOne.png"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
        <img src={imageOne} alt="" />
        </div>
        <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="">Logout</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
