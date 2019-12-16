import React, { useState } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import AddIcon from "./ui/AddIcon";
import DeleteIcon from "./ui/DeleteIcon";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  message: {
    height: "100%",
    width: "100%",
    resize: "none",
    outline: "none",
    borderRadius: "10px 10px 10px 10px",
    margin: 0,
    padding: 5,
    boxSizing: "border-box"
  }
});

const Todo = ({ onClick, completed, todo, addComment, deleteTodo }) => {
  const [comment, setComment] = useState("");
  const classes = useStyles();

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
        listStyle: "none"
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <p onClick={onClick}>{todo.text}</p>
        </Grid>
        <br />
        <Grid item xs={8} sm={8} md={8}>
          {" "}
          <TextareaAutosize
            className={classes.message}
            value={comment}
            aria-label="minimum height"
            placeholder="¿Aglún comentario?"
            rows={3}
            onChange={event => {
              setComment(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <AddIcon
            addComment={() => {
              addComment({ ...todo, comment: comment });
              setComment("");
            }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <DeleteIcon deleteTodo={() => deleteTodo(todo)} />
        </Grid>

        <Grid item xs={8} sm={2} md={2}>
          <p>{todo.comment}</p>
        </Grid>
      </Grid>
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
