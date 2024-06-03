import { gql } from '@apollo/client';

export const CURRENT_USER = gql`
  query getCurrentUser {
    currentUser {
      id
      email
    }
  }
`;

// export const CURRENT_USER = gql`
//   query getCurrentUser {
//     currentUser {
//       id
//       email

//       boards {
//         id
//         title
//         isFavorite
//         createdDate
//       }
//     }
//   }
// `;
