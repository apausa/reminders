import actions from './taskActions';
import { Task } from '../../../types/taskTypes';

export function createTask(task: Task) {
  return (dispatch: any) => {
    dispatch({
      type: actions.CREATE_TASK,
      task,
    });
  };
}

export function removeTask(task: Task) {
  return (dispatch: any) => {
    dispatch({
      type: actions.REMOVE_TASK,
      task,
    });
  };
}

export function updateTask(task: Task) {
  return (dispatch: any) => {
    dispatch({
      type: actions.UPDATE_TASK,
      task,
    });
  };
}
