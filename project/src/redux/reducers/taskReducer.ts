/* eslint-disable no-param-reassign */
import actions from '../actions/taskActions';
import { Task, Action } from '../../types/interfaces';
import List from '../../mocks/listMock';

export default function Reducer(initial: Task[] = List, action: Action) {
  let list = initial;
  const removeTask = (task: Task) => task !== action.task;
  const updateTask = (task: Task) => {
    if (task === action.task) task.state = (task.state === false);
    return task;
  };
  if (action.type === actions.CREATE_TASK) list = [action.task, ...list];
  if (action.type === actions.REMOVE_TASK) list = list.filter(removeTask);
  if (action.type === actions.UPDATE_TASK) list = list.map(updateTask);
  return list;
}
