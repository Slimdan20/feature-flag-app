import React from 'react'
import './Start.css'
import imageOne from '../../assets/imageOne.png'
import { Link, useNavigate } from 'react-router-dom'

const Start = () => {
    const navigate = useNavigate()
  return (
    <div className='start'>
        <img src={imageOne} alt="" />
        <div className='start-text'>
            <h1>Code Academy</h1>
        </div>
        <div className='start-text-2'>
            <button onClick ={()=>navigate('/Signup')}>Get started</button>
            <Link to="/Login">I already have an account</Link>
        </div>
    </div>
  )
}

export default Start
