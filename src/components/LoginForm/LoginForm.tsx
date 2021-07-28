import React, { useState } from 'react';

import { useForm } from '../../utils/useForm';

const LoginForm = () => {
  const [values, setValues] = useForm({username: '', password: ''});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <div className='input-container'>
        <p>Search Text: </p>
        <input
          type='text'
          name='username'
          placeholder='Username...'
          value={values.username}
          onChange={(e) => setValues(e)}
        />
      </div>
      <div className='input-container'>
        <p>Password: </p>
        <input
          type='password'
          name='password'
          placeholder='Password...'
          value={values.password}
          onChange={(e) => setValues(e)}
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