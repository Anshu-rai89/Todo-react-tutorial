import {GET_ALL_TODOS} from '../utils';

export async function getAllTodos () {
    try{
        const res = await fetch(GET_ALL_TODOS);
        const data = await res.json();
        return data;
    }catch(error) {
        console.error("Error in fetching all Todos",error);
    }
}

export async function deleteTodo(todoId) {
  try {
    const deleteTodoUrl =  `${GET_ALL_TODOS}/${todoId}`;
    const res = await fetch(deleteTodoUrl,{
        method:"DELETE"
    });
    const data = await res.json();
    console.log("delete todo success",data);
    return data;
  } catch (error) {
    console.error("Error in fetching all Todos", error);
  }
}

export async function createTodo(body) {
  try {
    const res = await fetch(GET_ALL_TODOS, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body:JSON.stringify({
        title:body.todo,
        body:body.title,
        userId:'1'
      })
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetching all Todos", error);
  }
}