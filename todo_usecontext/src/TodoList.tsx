import React from 'react';
import { TodoConsumer } from "./TodoContextProvider";

const styles = {
    input: {
      padding: '10px',
      fontSize: '20px',
      width: '480px',
      height: '30px',
      border: 'solid 1px gray',
      borderRadius: 5,
      color: '#000000',
      opacity: 20,
      outline: 0,
    },
};

const TodoList = () => (
    <TodoConsumer>
        {(val: any) => (
            <div style={{ fontSize: '20px' }}>
                <input value={val.text} onChange={e => val.setText(e.target.value)} style={styles.input} />
                <ol>
                    {val.todos.map((todo: any) => <li style={{ marginBottom: '5px', color: 'white' }}>{todo.title}</li>)}
                </ol>
            </div>
        )}
    </TodoConsumer>
);

export default TodoList;