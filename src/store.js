import { createStore } from "redux";
import counterReducer from "./services/reducers/CounterReducer";

const store = createStore(counterReducer);
export default store;
