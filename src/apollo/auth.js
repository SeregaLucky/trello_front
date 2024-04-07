import { gql } from '@apollo/client';

// export const CURRENT_USER = gql`
//   mutation CurrentUser($email: String, $password: String) {
//     currentUser: currentUser(email: $email, password: $password) {
//       email
//       password
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    user: login(email: $email, password: $password) {
      email
      password
    }
  }
`;

export const REGISTRATION_USER = gql`
  mutation Registration(
    $email: String
    $password: String
    $confirmPassword: String
  ) {
    user: registration(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      email
      password
      confirmPassword
    }
  }
`;

// export const LOGOUT_USER = gql`
//   mutation Logout() {
//     user: logout() {
//     }
//   }
// `;
