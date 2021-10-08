import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, TextInput } from 'react-materialize';

const Login = () => {
  const [signupForm, setSignupForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
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
        variables: {
          ...signupForm,
          username: signupForm.email.split('@')[0]
        }
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
          label="First Name"
          name="firstName"
          value={signupForm.firstName}
          onChange={handleChange}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          value={signupForm.lastName}
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
        <Button className="waves-effect">Sign Up</Button>
      </form>
      {error && <p>Email already in use. Select login to access your profile.</p>}
    </div>
  )
}

export default Login;