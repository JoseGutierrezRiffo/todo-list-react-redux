import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, addComment, deleteTodo }) => (
  <div>
    <ul>
      {todos.map(todo => (
        <div>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            addComment={addComment}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        </div>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
