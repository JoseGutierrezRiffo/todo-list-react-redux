import { connect } from "react-redux";
import {addComment, deleteTodo, toggleTodo} from "../store/actions/todoActions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../store/actions/todoActions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  addComment: todo => dispatch(addComment(todo)),
  deleteTodo: todo => {dispatch(deleteTodo(todo.id)); console.log("aqui")}

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
