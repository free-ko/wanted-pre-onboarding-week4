import { useEffect, useState } from 'react';

import type { TodoType } from 'src/types';
import { getTodoList } from 'src/api';
import { Header, InputTodo, TodoList } from 'src/components';

const Main = () => {
  const [todoListData, setTodoListData] = useState<TodoType[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className='container'>
      <div className='inner'>
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
