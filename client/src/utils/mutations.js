import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        firstName
        lastName
        email
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signup($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        firstName
        lastName
        email
      }
    }
  }
`;