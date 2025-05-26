import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../../AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password || !form.confirmPassword){
      alert('please fill in all fields.');
      return;
    }

    if(!form.email.includes('@')) {
      alert('please enter a valid email.')
      return
    }

    if(form.password !== form.confirmPassword){
      alert('password do not match.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((u) => u.email == form.email);
    if (existingUser){
      alert('A user with this email already exists.')
      return
    }

    const newUser = {
      username: form.username,
      email: form.email,
      password: form.password
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    login({email: newUser.email, username: newUser.username});
    navigate('/webpage')
  };

  return (
    <div className='container'>
      <form className='signup' onSubmit={handleSubmit}>
        <p>Sign Up</p>
        <div className='details'>
        <input type="text" name='username' placeholder='Username' value={form.username} onChange={handleChange} />
        <input type="text" name="email" placeholder='Email' value={form.email} onChange={handleChange} />
        <input type="text" name='password' placeholder='Password' value={form.password} onChange={handleChange} />
        <input type="text" name='confirmPassword' placeholder='Confirm password' value={form.confirmPassword} onChange={handleChange} />
        </div>
        <div className='access'>
            <button type='submit'>Sign up</button>
            <Link to="/Login">I already have an account</Link>
        </div>
      </form>
    </div>
  )
}
export default Signup
