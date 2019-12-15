const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          comment: ""
        }
      ];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "ADD_COMMENT":
      console.log("q", action.updatedTodo);
      return state.map(todo =>
        todo.id === action.updatedTodo.id ? action.updatedTodo : todo
      );

    case "DELETE_TODO":
      console.log("aca");
      return state.filter(todo => todo.id !== action.todoId);

    default:
      return state;
  }
};

export default todosReducer;
