import { gql } from '@apollo/client';

// description {
//   isFulled
// }
export const ALL_COLUMNS = gql`
  query getAllColumn {
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
`;

export const ADD_COLUMN = gql`
  mutation AddColumn($boardId: ID, $title: String) {
    newColumn: addColumn(boardId: $boardId, title: $title) {
      id
      title
      position
      columnColor

      tasks {
        id
        columnId {
          id
        }
        title
        createdDate
        updatedDate
      }
    }
  }
`;

export const REMOVE_COLUMN = gql`
  mutation RemoveColumn($id: ID!) {
    removedColumn: removeColumn(id: $id) {
      id
    }
  }
`;

export const UPDATE_COLOR_COLUMN = gql`
  mutation UpdateColumnColor($id: ID, $columnColor: String) {
    newColorColumn: updateColorColumn(id: $id, columnColor: $columnColor) {
      id
      columnColor
    }
  }
`;

export const UPDATE_COLUMN_TITLE = gql`
  mutation UpdateColumnTitle($id: ID, $title: String) {
    newColumnTitle: updateColumnTitle(id: $id, title: $title) {
      id
      title
    }
  }
`;

export const UPDATE_POSITION_COLUMNS = gql`
  mutation UpdatePositionColumns($newListPositions: [NewPositionsColumns]) {
    newPositionColumns: updatePositionColumns(
      newListPositions: $newListPositions
    ) {
      id
      position
    }
  }
`;
