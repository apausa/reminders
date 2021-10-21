import React from 'react';
import { useSelector } from 'react-redux';

import Input from '../input/input';
import Placeholder from '../palceholder/placeholder';
import List from './list/List';

export default function Page() {
  const list = useSelector(({ taskReducer }: any) => taskReducer);
  return (
    <main className="weventure">
      <Input />
      { (list.length === 0)
        ? <Placeholder />
        : <List />}
    </main>
  );
}
