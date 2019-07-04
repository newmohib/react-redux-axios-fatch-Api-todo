import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodoToAction }) => (
  <li className="todo-item" onClick={() => toggleTodoToAction(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);





const mapStateToProps = (state) => {
  return (
      {
          // token:state.tokens.token,
          // user:state.users.currentUser,
          // campaignlist:state.campaignList
      }
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodoToAction: (value) => { dispatch(toggleTodo(value))
      }
  }
};
export default connect(mapStateToProps , mapDispatchToProps)(Todo);
