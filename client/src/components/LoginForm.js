import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, TextInput } from 'react-materialize';

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [login, {error}] = useMutation(LOGIN_USER);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { ...loginForm }
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (

    <div>
      <form className="search-form" onSubmit={handleLogin}>
        <TextInput
          label="Email"
          name="email"
          type="email"
          value={loginForm.email}
          onChange={handleChange}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          value={loginForm.password}
          onChange={handleChange}
        />
        <Button className="waves-effect">Log In</Button>
      </form>
      {error && <p>Login failed! Check credentials</p>}
    </div>
  )
}

export default Login;