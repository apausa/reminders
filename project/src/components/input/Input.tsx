import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../redux/actions/taskCreator';

export default function Input() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const create = (value: string, which: number) => {
    if (which !== 13 || !value) return;
    dispatch(createTask({ description, state: false, date: Date.now() }));
    setDescription('');
  };
  return (
    <input
      className="index__input"
      type="text"
      name="input"
      placeholder="What needs to be accomplished today?"
      value={description}
      onChange={({ target: { value } }: any) => setDescription(value)}
      onKeyPress={({ target: { value }, which }: any) => { create(value, which); }}
    />
  );
}
