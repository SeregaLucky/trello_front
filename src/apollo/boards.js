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
