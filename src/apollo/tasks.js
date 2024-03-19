import { gql } from '@apollo/client';

export const ADD_TASK = gql`
  mutation AddTask($columnId: ID, $title: String) {
    newTask: addTask(columnId: $columnId, title: $title) {
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
`;

// export const ALL_TASKS = gql`
//   query AllTasks {
//     tasks: allTasks {
//       id
//       column_id
//       title
//     }
//   }
// `;

export const REMOVE_TASK = gql`
  mutation RemoveTask($id: ID) {
    removedTask: removeTask(id: $id) {
      id
      columnId {
        id
      }
    }
  }
`;

//
export const UPDATE_POSITION_TASKS = gql`
  mutation UpdatePositionTasks($newListPositions: [NewPositionsTasks]) {
    newPositionTasks: updatePositionTasks(newListPositions: $newListPositions) {
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
`;

export const UPDATE_TITLE_TASK = gql`
  mutation UpdateTaskTitle($id: ID, $title: String) {
    newTaskTitle: updateTaskTitle(id: $id, title: $title) {
      id
      title
      columnId {
        id
      }
    }
  }
`;
