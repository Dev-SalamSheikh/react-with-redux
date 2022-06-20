import { createStore, applyMiddleware } from "redux";
import todosReducer from "./services/reducers/todosReducers";
import thunk from "redux-thunk";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
