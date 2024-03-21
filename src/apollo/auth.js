import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    user: Login(email: $email, password: $password) {
      email
      password
    }
  }
`;

export const REGISTRATION_USER = gql`
  mutation Registration($email: String, $password: String) {
    user: Registration(email: $email, password: $password) {
      email
      password
    }
  }
`;
