import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/actions/taskCreator';
import './inputStyles.scss';

export default function Input() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const create = (value: string, which: number) => {
    if (which !== 13 || !value) return;
    dispatch(createTask({ description, state: false }));
    setDescription('');
  };
  return (
    <input
      className="main__input"
      type="text"
      name="input"
      placeholder="Write your reminder"
      value={description}
      onChange={({ target: { value } }: any) => setDescription(value)}
      onKeyPress={({ target: { value }, which }: any) => { create(value, which); }}
    />
  );
}
