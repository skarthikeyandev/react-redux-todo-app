import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/todoapp/actions";
export const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [editValue, setEditValue] = useState("");
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let date = new Date();
    let time = date.getTime();
	if(!name) {
		return;
	}
    let todoObj = {
      id: time,
      todo: name,
      completed: false,
    };
    setName("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(updateTodo(editedObj));
  };
  return (
    <div>
      {editFormVisibility === false ? (
        <form onSubmit={handleSubmit}>
          <label>
            Add todo:
            <input type="text" value={name} onChange={handleChange} />
          </label>
          <input type="submit" className="btn-submit" value="ADD" />
        </form>
      ) : (
        <form onSubmit={editSubmit}>
          <label>
            Update todo:
            <input
              type="text"
              onChange={(e) => setEditValue(e.target.value)}
              value={editValue || ""}
            />
          </label>
          <input type="submit" value="Update" />
          <button type="button" onClick={cancelUpdate}>
            Back
          </button>
        </form>
      )}
    </div>
  );
};
