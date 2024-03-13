import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './index.css'
import { Card } from 'react-bootstrap';

const Login = () => {
  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  // Dummy credentials
  const dummyUsername = 'admin@gmail.com';
  const dummyPassword = 'admin123';

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === dummyUsername && password === dummyPassword) {
      // Successful login logic (e.g., redirect to homepage)
      console.log('Login successful');
      Navigate('/Home')
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='login-card'>

      
    <div className='am'>
    <div className='form'>
       <h2 className='head'>Login Form</h2>
       <form onSubmit={handleSubmit}>
          <div className='input-card'>
             <label htmlFor='username'>*Username</label><br/>
             <input
            type="text"
            id="username"
            placeholder="Enter Username"
            className="form-control input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />       
          </div>
          <div className='input-card'>
             <label htmlFor='password'>*Password</label><br/>       
             <input
            type="password"
            placeholder="Enter Password"
            id="password"
            className="form-control input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          <div className='btn-card'>
            <button type='submit' className='btn'>Submit</button>
          </div>
          {error && <h6 className="alert alert-danger">{error}</h6>}
          <p>Username : admin@gmail.com <br/> Password: admin123</p>  
      </form>   
    </div>
 

    </div>
   </div>

  );
};

export default Login;
