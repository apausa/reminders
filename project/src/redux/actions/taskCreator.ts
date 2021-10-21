import actions from './taskTypes';
import { Task } from '../../types/interfaces';

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

export function resetList(list: Task[]) {
  return (dispatch: any) => {
    dispatch({
      type: actions.RESET_LIST,
      list,
    });
  };
}
