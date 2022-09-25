import React from 'react';
import {deleteTodo} from "../Api";
import {Button} from '@mui/material';

function Todo(props) {
    const { todo, setIsDeleted,handleEdit } = props;
    const handleOnClick = async () => {
      await deleteTodo(todo.id);
      setIsDeleted(true);
    }
    return (
      <li>
        {todo.title}
        <button onClick={handleOnClick}>Delete</button>
        <Button onClick={() => handleEdit(todo)}> Edit</Button>
      </li>
    );
}

export default Todo;