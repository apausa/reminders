/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import './titleStyles.scss';
import { useSelector } from 'react-redux';

export default function Title() {
  const list = useSelector(({ taskReducer }: any) => taskReducer);
  const [length, setLength] = useState(0);
  useEffect(() => {
    setLength(list.reduce((previous: any, current: any) => (
      (current.state === false) ? previous + 1 : previous), 0));
  }, [list]);
  return (
    <hgroup className="main__titles">
      <h1 className="title__reminders">Reminders</h1>
      <h2 className="title__length">{length}</h2>
    </hgroup>
  );
}
