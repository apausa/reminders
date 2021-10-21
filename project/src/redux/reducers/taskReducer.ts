/* eslint-disable no-param-reassign */
import taskActions from '../actions/taskActions';
import listActions from '../actions/listActions';
import { Task, Action } from '../../types/taskTypes';

export default function Reducer(initial: Task[] = [], action: Action) {
  let list = initial;
  const removeTask = (task: Task) => task !== action.task;
  const updateTask = (task: Task) => {
    if (task === action.task) task.state = (task.state === false);
    return task;
  };
  if (action.type === taskActions.CREATE_TASK) list = [action.task, ...list];
  if (action.type === taskActions.REMOVE_TASK) list = list.filter(removeTask);
  if (action.type === taskActions.UPDATE_TASK) list = list.map(updateTask);
  if (action.type === listActions.RESET_LIST) list = [];
  return list;
}
