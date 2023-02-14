import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo, handleCheckbox } from "../redux/todoapp/actions";
export const Todo = ({ editFormVisibility, handleEditClick }) => {
  const todos = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        {editFormVisibility === false && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckbox(todo.id))}
          />
        )}
        <span
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </span>
      </div>
      <div className="actions-box">
        {editFormVisibility === false && (
          <>
            <span>
              <Icon icon={edit2} onClick={() => handleEditClick(todo)}></Icon>
            </span>
            <span>
              <Icon
                icon={trash}
                onClick={() => dispatch(removeTodo(todo.id))}
              ></Icon>
            </span>
          </>
        )}
      </div>
    </div>
  ));
};
