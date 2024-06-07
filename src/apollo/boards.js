import { gql } from '@apollo/client';

export const ALL_BOARDS = gql`
  query getAllBoards {
    boards {
      id
      title
      isFavorite
      createdDate
    }
  }
`;

export const GET_FULL_BOARD = gql`
  query getFullBoard($id: ID!) {
    board(id: $id) {
      id
      title
      isFavorite
      createdDate

      columns {
        id
        title
        columnColor
        position

        tasks {
          id
          title
          createdDate
          updatedDate
          position

          columnId {
            id
          }
        }
      }
    }
  }
`;

export const ADD_BOARD = gql`
  mutation AddBoard($title: String) {
    newBoard: addBoard(title: $title) {
      id
      title
      isFavorite
      createdDate
    }
  }
`;

export const ADD_USER_IN_BOARD = gql`
  mutation AddUserInBoard($boardId: ID!, $email: String!) {
    newBoard: addUserInBoard(boardId: $boardId, email: $email) {
      boardId
      email
    }
  }
`;

export const REMOVE_USER_FROM_BOARD = gql`
  mutation RemoveUserFromBoard($boardId: ID!, $email: String!) {
    newBoard: removeUserFromBoard(boardId: $boardId, email: $email) {
      boardId
      email
    }
  }
`;

// title
// isFavorite
// createdDate

// columns {
//   id
//   title
//   columnColor
//   position

//   tasks {
//     id
//     title
//     createdDate
//     updatedDate
//     position

//     columnId {
//       id
//     }
//   }
// }
