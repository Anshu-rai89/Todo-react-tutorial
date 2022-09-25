import React from 'react';
import Todo from './Todo';
function TodoList(props) {
   const { todoList, setIsDeleted, handleEdit } = props;
       return (
         <ol>
           {todoList.map((todo) => (
             <Todo 
                todo={todo} 
                setIsDeleted={setIsDeleted}
                handleEdit={handleEdit}
              />
           ))}
         </ol>
       );
}

export default TodoList;