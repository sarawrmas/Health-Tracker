import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, TextInput } from 'react-materialize';

const Login = () => {
  const [signupForm, setSignupForm] = useState({ username: '', email: '', password: '' });
  const [signup, { error }] = useMutation(SIGNUP_USER);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupForm({
      ...signupForm,
      [name]: value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signup({
        variables: { ...signupForm }
      });
      Auth.login(data.signup.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSignup}>
        <TextInput
          label="Username"
          name="username"
          value={signupForm.username}
          onChange={handleChange}
        />
        <TextInput
          label="Email"
          name="email"
          value={signupForm.email}
          onChange={handleChange}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          value={signupForm.password}
          onChange={handleChange}
        />
        <Button>Sign Up</Button>
      </form>
      {error && <p>User already exists! Use login</p>}
    </div>
  )
}

export default Login;