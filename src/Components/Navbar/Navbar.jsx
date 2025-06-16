import React, { useState, useEffect } from 'react';
import imageOne from "../../assets/imageOne.png"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(prev => !prev);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.background = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "linear-gradient(to right, #b3e5fc, #81d4fa)";
      document.body.style.color = "black";
    }

    const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.style.color = isActive ? 'white' : 'black';
  });
  }, [isActive]);
  
  return (
    <div>
      <nav>
        <div>
        <img src={imageOne} alt="" />
        </div>
        <div className='head'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="">Logout</a>
       {/* <div className='darkmode'>
        <div className='first'>
          < i className='bxr  bx-brightness-half'  ></i> 
        </div>
        <div className={`second ${isActive ? 'active' : ''}`} onClick={toggleSwitch}>
          < i className='bxr  bxs-circle'  ></i> 
        </div>
        </div>*/}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
