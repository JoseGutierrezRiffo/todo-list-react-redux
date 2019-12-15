import React, { useState } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import AddIcon from "./ui/AddIcon";
import DeleteIcon from "./ui/DeleteIcon";

const Todo = ({ onClick, completed, todo, addComment, deleteTodo }) => {
  const [comment, setComment] = useState("");

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      <p onClick={onClick}>{todo.text}</p>
      <br />
      <TextareaAutosize
        value={comment}
        aria-label="empty textarea"
        placeholder="Empty"
        onChange={event => {
          setComment(event.target.value);
        }}
      />
      <p>{todo.comment}</p>
      <AddIcon
        addComment={() => {
          addComment({ ...todo, comment: comment });
          setComment("");
        }}
      />
      <DeleteIcon deleteTodo={() => deleteTodo(todo)} />
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
