import React from 'react';
import { Container, Col, Row, Tabs, Tab } from 'react-materialize';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Login = () => {
  return (

    <div>
      <h2 className="center-align">Account</h2>
      <Container className="center-align">
        <Row>
          <Col s={12} m={12} l={12}>
            <Tabs className="tabs-fixed-width">
              <Tab idx="login" title="Log In">
                <LoginForm />
              </Tab>
              <Tab idx="signup" title="Sign Up">
                <SignupForm />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login;