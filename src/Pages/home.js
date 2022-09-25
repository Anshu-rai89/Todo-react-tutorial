import React,{useState,useEffect} from 'react';
import TodoInput from '../Component/TodoInput';
import TodoList from '../Component/TodoList';
import {getAllTodos,createTodo} from '../Api';
import {Button, Modal,Box} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Home(props) {
     const [todoList,setTodoList] = useState([]),
      [isDeleted,setIsDeleted] = useState(false),
      [showModal,setShowModal] = useState(false),
      [currentTodo,setCurrentTodo] = useState('');
     const handleAddTodo = async (todo) => {
        const todoRes = await createTodo({
          todo
        });
        setTodoList([todoRes,...todoList]);
     }

     const handleEditTodoOnClick = async () => {
      setShowModal(false);
     }

     const handleEdit = (todo)=>{
      setCurrentTodo(todo);
      setShowModal(true);
     }
     console.log("Todolist",todoList)

     useEffect(() => {
      debugger;
      console.log("triggeringUseeffect");
       async function getTodos() {
         const todoList = await getAllTodos();
         console.log("TodoList", todoList);
         setTodoList(todoList);
       }

       getTodos();
     }, [isDeleted]);

    return (
      <>
        <div>
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{ ...style, width: 200 }}>
              <label>Edit todo</label>
              <input type="text" value={currentTodo.title}
               />
              <Button onClick={handleEditTodoOnClick}> Save </Button>
            </Box>
          </Modal>
        </div>
        <div>
          <h4>Welcome to Todo</h4>
          <TodoInput handleAddTodo={handleAddTodo} />
          <TodoList
            todoList={todoList}
            setIsDeleted={(val) => setIsDeleted(val)}
            handleEdit={handleEdit}
          />
        </div>
      </>
    );
}


export default Home;

var a=10;
function add(a) {
  var b =90;
  return a+b;
}

add(a);
console.log(b);