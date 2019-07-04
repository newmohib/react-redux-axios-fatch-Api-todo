import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodoToAction }) => (

  // componentWillMount(){
  //   var postData = {username: 'mohib',password:'123456'};
  //   let axiosConfig = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         "token": "tk",
  //     }
  //   };
  
  // axios.post('http://localhost:4000/login', postData, axiosConfig)
  // .then((res) => {
  //   console.log("RESPONSE RECEIVED: ", res.data);
  //   let user=res.data;
  //   this.setState({user:user});
  // })
  // .catch((err) => {
  //   console.log("AXIOS ERROR: ", err);
  // })
 
  //  }


  
  // export function fetchPostsApi(reddit) {
  //   return fetch(`https://www.reddit.com/r/${reddit}.json`)
  //     .then(response => response.json())
  //     .then(json => json.data.children.map(child => child.data))
  // }


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
