import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log('SUBMIT YOUR USERNAME')
  }

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <div className='input-container'>
        <p>Search Text: </p>
        <input
          type='text'
          name='text-search'
          placeholder='Username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='input-container'>
        <p>Password: </p>
        <input
          type='password'
          name='tag-search'
          placeholder='Password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='advanced'></div>
      <div className="container input-container">
        <button type='submit' className='btn btn-lg'>Login</button>
      </div>
    </form>
  )
}

export default LoginForm;