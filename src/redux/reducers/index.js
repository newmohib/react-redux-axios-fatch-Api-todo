import { combineReducers ,createStore} from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";


export default createStore(
        combineReducers({ todos, visibilityFilter })
    );
//export default combineReducers({ todos, visibilityFilter });
