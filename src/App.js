import { Form } from './components/Form';
import { Todo } from './components/Todo';
import { useDispatch } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';
import './css/style.css'
function App() {
  const dispatch = useDispatch();
  const [editFormVisibility, seteditFormVisibility] =  useState(false);
  const [editTodo, setEditTodo] = useState("");
  const handleEditClick = (todo) => {
    seteditFormVisibility(true);
    setEditTodo(todo)
  }
  const cancelUpdate = () => {
    seteditFormVisibility(false);
  }
  return (
    <div className="container">
      <h1>TODO APP</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <Todo handleEditClick= {handleEditClick} editFormVisibility= {editFormVisibility}/>
      <button className='btn' onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
    </div>
  );
}

export default App;
