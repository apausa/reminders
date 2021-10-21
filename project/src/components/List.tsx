import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeTask, resetList, updateTask } from '../redux/actions/taskCreator';
import { Task } from '../types/interfaces';
import Input from './input/Input';
import Placeholder from './placeholder/Placeholder';
import './pageStyles.scss';

export default function List() {
  const dispatch = useDispatch();
  const list = useSelector(({ taskReducer }: any) => taskReducer);
  const remove = (task: Task) => dispatch(removeTask(task));
  const reset = (tasks: Task[]) => dispatch(resetList(tasks));
  const update = (task: any) => dispatch(updateTask(task));
  return (
    <main className="weventure">
      <Input />
      { (list.length === 0)
        ? <Placeholder />
        : (
          <ul className="weventure__list">
            { list.map((task: Task) => (
              <li className="list__task">
                <form className="task__form">
                  <button
                    className={(task.state === false)
                      ? 'form__text--unstriked'
                      : 'form__text--striked'}
                    type="button"
                    onClick={() => update(task)}
                  >
                    {task.description}
                  </button>
                  <button
                    className="form__remove"
                    type="button"
                    onClick={() => remove(task)}
                  >
                    X
                  </button>
                </form>
              </li>
            ))}
            <button
              className="list__reset"
              type="button"
              onClick={() => reset(list)}
            >
              Clear all
            </button>
          </ul>
        )}
    </main>
  );
}
