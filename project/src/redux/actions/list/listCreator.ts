import actions from './listActions';
import { Task } from '../../../types/taskTypes';

export default function resetList(list: Task[]) {
  return (dispatch: any) => {
    dispatch({
      type: actions.RESET_LIST,
      list,
    });
  };
}
