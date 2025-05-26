import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const {login} = useAuth()

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      alert('please fill in all fields.')
      return
    }

    if (!form.email.includes('@')) {
      alert('please enter a valid email.')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password);
    if (!user) {
      alert('Invalid email or password.');
      return;
    }

    login({ email: user.email, username: user.username });
    navigate('/webpage');}
  return (
    <div>
      <form className='signup' onSubmit={handleSubmit}>
        <p>Login</p>
        <div className='details'>
        <input type="text" name="email" placeholder='Email' value={form.email} onChange={handleChange} />
        <input type="password" name='password' placeholder='Password' value={form.password} onChange={handleChange} />
        </div>
        <div className='access'>
            <button type='submit'>Login</button>
            <Link to="/Signup">Don't have an account? signup</Link>
        </div>
      </form>
    </div>
  )
};

export default Login;
