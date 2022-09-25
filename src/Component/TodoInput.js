import React,{useState} from 'react';

function TodoInput(props) {
    const [todoData,setTodoData] = useState(''),
        {handleAddTodo} = props;
    const handleOnCHnage = (event) =>{
        setTodoData(event.target.value);
    }

    console.log("todo data",todoData);
    return (
      <div className="todo-input">
        <input
          value={todoData}
          type="text"
          placeholder="Enter whatever you want to do"
          onChange={handleOnCHnage}
        />
        <button onClick={() => {
            handleAddTodo(todoData);
            setTodoData('');
        }}>Add</button>
      </div>
    );
}

export default TodoInput;